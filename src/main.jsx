/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import Store from './store/Store.js'
import Order from './Componant/order.jsx'

const router = createBrowserRouter([{
  path: "/", element: <App />
},
{
  path: "/order", element: <Order />
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>

  </StrictMode>,
)
