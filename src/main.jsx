import React from 'react'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client'

import ConnectWallet from './pages/connectwallet.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
      path: "/connectwallet",
      element: <ConnectWallet />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)