import { createBrowserRouter } from 'react-router-dom';
import Root from "./Root";
import Login from './Login';
import Sign from './Sign';
import { sendSign } from '../api/action/actions';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'sign',
        element:<Sign/>,
        action:sendSign
      },
      {
        path:"/:userId",

      }
    ]
  }
])
export default router