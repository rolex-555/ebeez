import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/actions/action';
import ImageLight from '../assets/img/login-office.jpeg'
import ImageDark from '../assets/img/login-office-dark.jpeg'
import { GithubIcon, TwitterIcon } from '../icons'
import { Label, Input, Button } from '@windmill/react-ui'
import { ClipLoader } from 'react-spinners';

function Login() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(">> Login",email,password);
    dispatch(login(email, password));
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
              <Label>
                <span>Email</span>
                <Input className="mt-1" type="text" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Label>

              <Label className="mt-4">
                <span>Password</span>

                <Input className="mt-1" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Label>

              <Button className="mt-4" onClick={handleLogin} block tag={Link} to="/app" on>
                Log in
              </Button>

              <hr className="my-8" />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Login
