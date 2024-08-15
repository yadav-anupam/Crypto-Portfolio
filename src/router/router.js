import ConnectWallet from "../pages/connectwallet"

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