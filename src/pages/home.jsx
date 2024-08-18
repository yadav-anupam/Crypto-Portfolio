import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch  } from "react-redux";
import {addcurrwallet ,removeCurrWallet} from "../store/currwalletslice";
import { useNavigate } from "react-router-dom";


export default function Home() {
    const wallet = useSelector((state) => state.wallet);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const handleClick = (e) => {
    //     dispatch(addcurrtoken("0x123456"));
    // }

    return (
        <>
            
            {wallet.map((address) => (
                <nav className="bg-gray-800 p-4">
                  <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-lg font-bold">
                      <Link to="/">Crypto Wallet App</Link>
                    </div>
                    <div className="text-white">
                      {/* <Link to="/wallet" onClick={dispatch(addcurrwallet(address))}>
                        Wallet: <span className="font-mono">{address}</span>
                      </Link> */}
                      <button onClick={() => {
                          dispatch(addcurrwallet(address));
                          navigate("wallet");
                      }}>{address}</button>
                    </div>
                  </div>
                </nav>
            ))}
        </>
    );
}