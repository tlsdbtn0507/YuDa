import { createBrowserRouter } from 'react-router-dom';
import Root from "./Root";
import Login from './Login';
import Sign from './Sign';

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
        element:<Sign/>
      },
      {
        path:"/:userId",

      }
    ]
  }
])
export default router