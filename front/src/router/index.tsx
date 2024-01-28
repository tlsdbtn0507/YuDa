import { createBrowserRouter } from 'react-router-dom';
import Root from "./Root";
import Login from './Login';
import Sign from './Sign';
import Main from './Main';
import { login, sendSign } from '../api/users/usersApi';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        path:'/login',
        element: <Login />,
      },
      {
        path:'/sign', 
        element: <Sign />,
        action:sendSign
      },
      {
        path:"/main",
        element:<Main/>
      }
    ]
  }
])
export default router