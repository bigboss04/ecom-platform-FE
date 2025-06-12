/* eslint-disable @typescript-eslint/no-unused-vars */
// ** React Imports
// next
import { useRouter } from 'next/router'

// // Constants dùng để lấy dữ liệu từ localStorage
// config
import { ACCESS_TOKEN, USER_DATA } from 'src/configs/auth'

// react import
import { ReactNode, ReactElement, useEffect, useContext } from 'react'

// ham ho tro xoa du lieu local
import { clearLocalUserData } from 'src/helpers/storage'

//// Hook dùng để lấy trạng thái đăng nhập
import { useAuth } from 'src/hooks/useAuth'

// Interface xác định kiểu props nhận vào
interface GuestGuardProps {
  children: ReactNode //    // Nội dung sẽ được render nếu thỏa điều kiện
  fallback: ReactElement | null // // Component loading hoặc null hiển thị khi đang kiểm tra
}

const GuestGuard = (props: GuestGuardProps) => {
  const { children, fallback } = props

  // router
  const router = useRouter() //// Hook Next.js để điều hướng
  console.log('router', router)

  // auth
  const authContext = useAuth() //lay context thong tin nguoi dung
  console.log('authContext', { authContext })

  useEffect(() => {
    if (!router.isReady) {
      return //doi san router san sang
    }
    if (window.localStorage.getItem(ACCESS_TOKEN) && window.localStorage.getItem(USER_DATA)) {
      router.replace('/') // chuyen ve trang chu
    }
  }, [router]) // chuyen 1 lan khi render thay doi

  if (authContext.loading) {
    return fallback
  }

  return <>{children}</> // render noi dung cua trang nhu login
}

export default GuestGuard
