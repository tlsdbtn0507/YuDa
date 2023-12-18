import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import router from './router';

function App() {
  return(
    <RouterProvider router={router}/>
  )
}


export default App;
