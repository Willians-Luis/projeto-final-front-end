import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Listagem from './pages/Listagem';
import Details from './pages/Details';

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Listagem />
    },
    {
      path: '/Details/:name',
      element: <Details />
    }
    
  ])

  return (
    <main className='containerBody'>
      <RouterProvider router={routes}/>
    </main>
    
  );
}

export default App;
