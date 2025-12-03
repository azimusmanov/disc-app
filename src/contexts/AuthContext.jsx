import { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from '../config/supabase'

const AuthContext = createContext()

// custom hook to access auth state (context)in any component
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// children is a special React prop that contains whatever you
//  put BETWEEN the component tags:

// Component that determines the auth state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Check if user is already logged in on mount
  useEffect(() => {
    checkUser()
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        setUser(session.user)
        
        // Check if user exists in custom tables
        const { data: existingUser } = await supabase
          .from('users')
          .select('id')
          .eq('id', session.user.id)
          .single()
        
        // If new user, create profile
        if (!existingUser) {
          await createUserProfile(session.user)
        }
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    setUser(session?.user ?? null)
    setLoading(false)
  }

  // Create user in custom tables on first login
  const createUserProfile = async (authUser) => {
    try {
      // Create in users table
      const { data: usersInsert, error: usersError } = await supabase
        .from('users')
        .insert({
          id: authUser.id,
          email: authUser.email,
          username: authUser.user_metadata?.full_name || authUser.email.split('@')[0],
          created_at: new Date().toISOString()
        })
        .select()

      if (usersError) {
        console.error('Error inserting into users:', usersError)
        return
      }

      // Create in user_profiles table (one-to-one with users)
      // Use upsert to avoid duplicate key errors if the profile already exists
      const { data: profileInsert, error: profileError } = await supabase
        .from('user_profiles')
        .upsert({
          id: authUser.id,  // Same ID as users table
          bio: 'New user - update your bio!',
          date_of_birth: new Date().toISOString() // fix this later
        }, { onConflict: 'id' })
        .select()

      if (profileError) {
        console.error('Error inserting into user_profiles:', profileError)
        return
      }
      
      console.log('User and profile created:', { usersInsert, profileInsert })
    } catch (error) {
      console.error('Error creating user profile:', error)
    }
  }

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/your-account`
      }
    })
    if (error) console.error('Error logging in:', error)
  }

  // const signOut = async () => {
  //   console.log('signOut function called')
  //   const { error } = await supabase.auth.signOut()
  //   console.log('Supabase signOut result:', { error })
  //   if (error) {
  //     console.error('Error logging out:', error)
  //   } else {
  //     console.log('Setting user to null and redirecting...')
  //     setUser(null)
  //     window.location.href = '/'
  //   }
  // }

  async function signOut() {
    console.log('About to call')
    const { error } = await supabase.auth.signOut()
    console.log('after')
    if (error) {
      console.log("Error Logging Out: ", error)
    }
    setUser(null)
    window.location.href = '/'
  }

  // values to be passed
  const value = {
    user,
    loading,
    signInWithGoogle,
    signOut
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}