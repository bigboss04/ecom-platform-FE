import axios from 'axios'

// config
import { CONFIG_API } from 'src/configs/api'

// type
import { TLoginAuth } from 'src/types/auth'

/**
 * API đăng nhập
 */
export const LoginAuth = async (data: TLoginAuth) => {
  try {
    const res = await axios.post(`${CONFIG_API.AUTH.INDEX}/login`, data)
    return res.data
  } catch (error) {
    console.error('Login failed:', error)
    return null
  }
}

/**
 * API đăng xuất
 */
export const logoutAuth = async () => {
  try {
    const res = await axios.post(`${CONFIG_API.AUTH.INDEX}/logout`)
    return res.data
  } catch (error) {
    console.error('Logout failed:', error)
    return null
  }
}
