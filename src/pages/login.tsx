<<<<<<< Updated upstream
import { NextPage } from 'next'
=======
// import next
import { NextPage } from 'next'
import { ReactNode } from 'react'

// import views
import BlankLayout from 'src/views/layouts/BlankLayout'
>>>>>>> Stashed changes
import LoginPage from 'src/views/pages/login'


type TProps = {

}
const Login:NextPage<TProps>= () => {
  return (
    <LoginPage/>
  )
}

<<<<<<< Updated upstream
export default Login
=======
export default Login

Login.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>
Login.guestGuard = true
>>>>>>> Stashed changes
