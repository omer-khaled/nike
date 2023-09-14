import {lazy,Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import {Provider} from 'react-redux';
import LoddingRoute from './components/LoddingRoute.tsx'
import {store} from './store/store.ts';
export const Home = lazy(()=>import('./pages/Home.tsx'));
export const Shop = lazy(()=>import('./pages/Shop.tsx'));
export const Cart = lazy(()=>import('./pages/Cart.tsx'));
const router = createBrowserRouter([
  {
    path:'/nike/',
    element:<App/>,
    children:[
      {
        index:true,
        element:<Suspense fallback={<LoddingRoute/>}><Home/></Suspense>
      },
      {
        path:'shop',
        element:<Suspense fallback={<LoddingRoute/>}><Shop/></Suspense>
      },
      {
        path:'cart',
        element:<Suspense fallback={<LoddingRoute/>}><Cart/></Suspense>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
