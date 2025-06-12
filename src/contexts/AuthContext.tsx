// ** React Imports
import { createContext, useEffect, useState, ReactNode } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'
import { CONFIG_API } from 'src/configs/api'

// ** Services & Helpers
import { LoginAuth, logoutAuth } from 'src/services/auth'
import { clearLocalUserData, setLocalUserData } from 'src/helpers/storage'

// ** Types
import { AuthValuesType, LoginParams, ErrCallbackType, UserDataType } from './types'

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)

      if (storedToken) {
        setLoading(true)
        try {
          const response = await axios.get(CONFIG_API.AUTH.AUTH_ME, {
            headers: {
              Authorization: `Bearer ${storedToken}`
            }
          })

          setUser({ ...response.data.data })
        } catch (error) {
          clearLocalUserData()
          setUser(null)
          if (!router.pathname.includes('login')) {
            router.replace('/login')
          }
        } finally {
          setLoading(false)
        }
      } else {
        setLoading(false)
      }
    }

    initAuth()
  }, [router.pathname])

  const handleLogin = (params: LoginParams, errorCallback?: ErrCallbackType) => {
    LoginAuth({ email: params.email, password: params.password })
      .then(async response => {
        // Lưu token và user nếu "rememberMe"
        if (params.rememberMe) {
          setLocalUserData(
            JSON.stringify(response.data.user),
            response.data.access_token,
            response.data.refresh_token
          )
        }

        setUser({ ...response.data.user })

        const returnUrl = router.query.returnUrl
        const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
        router.replace(redirectURL as string)
      })
      .catch(err => {
        if (errorCallback) errorCallback(err)
      })
  }

  const handleLogout = () => {
    logoutAuth().then(() => {
      setUser(null)
      clearLocalUserData()
      router.push('/login')
    })
  }

  const values: AuthValuesType = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
