import { NextPage } from 'next'
import RegisterPage from 'src/views/pages/register'

type TProps = {}
const Register: NextPage<TProps> = () => {
  return <RegisterPage />
}
export default Register
<<<<<<< Updated upstream
=======

Register.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>
Register.guestGuard = true
>>>>>>> Stashed changes
