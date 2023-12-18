import { createBrowserRouter } from 'react-router-dom';
import Root from "./Root";
import Login from './Login';

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

      }
    ]
  }
])
export default router