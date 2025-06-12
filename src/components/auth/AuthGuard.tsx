/* eslint-disable @typescript-eslint/no-unused-vars */
// ** React Imports
// next import 
import { useRouter } from 'next/router'


// react imports 
import { ReactNode, ReactElement, useEffect, useContext } from 'react'

// config
import { ACCESS_TOKEN, USER_DATA } from 'src/configs/auth'

// helper
import { clearLocalUserData } from 'src/helpers/storage'

//hook 
import { useAuth } from 'src/hooks/useAuth'

interface AuthGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}

const AuthGuard = (props: AuthGuardProps) => {
  // props
  const { children, fallback } = props

  //bat buoc dang nhap neu chua dang nhap = > login 
  //auth
  const authContext = useAuth()
  

  // lay router da sang login
  //router
  const router = useRouter()

  //chua dang nhap => login
  // neu page chua first render xong => return khong chay phia duoi
  useEffect(() => {
    if (!router.isReady) {
      return
    }
    if (
      // Nếu chưa có thông tin user và cũng không có token
      authContext.user === null &&
      !window.localStorage.getItem(ACCESS_TOKEN) &&
      !window.localStorage.getItem(USER_DATA)
    ) {
      // accessToken het han thi phai dang nhap lai va tra ve trang cu

      if (router.asPath !== '/') {
        router.replace({
          pathname: '/login',
          query: { returnUrl: router.asPath } //// quay lại trang đang muốn truy cập
        })
      } else {
        router.replace('/login') // da ve trang login
      }

      authContext.setUser(null) // reset context user tra ve null
      clearLocalUserData() //// xoá dữ liệu trong localStorage
    }
  }, [router])

  // check dieu kien loading ma khong hien ra trang

  // if (authContext.loading || authContext.user === null) {
  //   return fallback
  // }
  return <>{children}</>
}

export default AuthGuard
