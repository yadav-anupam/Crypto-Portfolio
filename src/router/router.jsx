import App from "../App.jsx"
import { createBrowserRouter } from "react-router-dom"
import ConnectWallet from "../pages/connectwallet"
import Watchlist from "../pages/watchlist"
import Home from "../pages/home"
import Send from "../pages/send"

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
          path: "/connectwallet",
          element: <ConnectWallet />,
        },
        {
          path: "/watchlist",
          element: <Watchlist />,
        },
      ]
    },
    {
      path : "/send",
      element: <Send />

    }

])

export default router;