import axios from 'axios'

// config
import { CONFIG_API } from 'src/configs/api'

// type
import { TLoginAuth } from 'src/types/auth'

export const LoginAuth = async (data: TLoginAuth) => {
  try {
    const res = await axios.post(CONFIG_API.AUTH.INDEX, data)
    
    return res.data

  } catch (error) {
    return null
  }
}
