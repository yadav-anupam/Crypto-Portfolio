import App from "../App.jsx"
import { createBrowserRouter } from "react-router-dom"
import ConnectWallet from "../pages/connectwallet"
import Watchlist from "../pages/watchlist"
import Home from "../pages/home"
import Send from "../pages/send"
import Wallet from "../pages/wallet"

const router = createBrowserRouter([
    {
      path: "/",
      element: < App />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path : "wallet",
          element: <Wallet />
        },
        {
          path : "send",
          element: <Send />
        },
        {
          path : "watchlist",
          element : <Watchlist/>
        },
        {
          path: "/connectwallet",
          element: <ConnectWallet />,
        },
        
      ]

    },

])

export default router;