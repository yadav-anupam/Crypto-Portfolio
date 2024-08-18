import React from 'react'
import { RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import store from "./store/store"
import router from './router/router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)