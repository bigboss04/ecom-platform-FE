// import next 
import { NextPage } from 'next'
import { ReactNode } from 'react'

// import views 
import BlankLayout from 'src/views/layouts/BlankLayout'
import LoginPage from 'src/views/pages/login'

type TProps = {}

const Login: NextPage<TProps> = () => {
  return <LoginPage />
}

Login.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>
Login.guestGuard = true

export default Login
