import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removefromwatchlist, addtowatchlist } from "../store/watchlistslice";
import { useForm } from "react-hook-form";
import { ethers } from "ethers";
import getProvider from "../components/getprovider";
import {getTokenBalance} from "../components/utils";
import AllowanceModal from "./allowance";

export default function Watchlist() {
  const dispatch = useDispatch();
  const currwallet = useSelector((state) => state.currwallet);
  const watchlist = useSelector((state) => state.watchlist[currwallet]);
  const { register, handleSubmit } = useForm();
  const [balances, setBalances] = useState({});
  const [loading, setLoading] = useState({});

  const addingthetoken = (data) => {
    if (ethers.utils.isAddress(data.token)) {
      if(watchlist.find((w) => w === data.token)) {
        alert("Token already in watchlist");
        return;
      }
      dispatch(addtowatchlist({ address: currwallet, watchlist: data.token }));
    } else {
      console.log("Invalid Address");
      alert("Invalid Address");
    }
  };

  const provider = getProvider();
  
  useEffect(() => {
    watchlist.forEach(async (token) => {
      setLoading((prev) => ({ ...prev, [token]: true }));
      try {
        const balance = await getTokenBalance(provider, token, currwallet);
        setBalances((prev) => ({ ...prev, [token]: balance }));
      } catch (error) {
        console.error(`Failed to fetch balance for ${token}:`, error);
      } finally {
        setLoading((prev) => ({ ...prev, [token]: false }));
      }
    });
  }, [watchlist]);


  const [showAllowanceModal, setShowAllowanceModal] = useState(false);

    const openModal = () => {
        setShowAllowanceModal(true);
    };

    const closeModal = () => {
        setShowAllowanceModal(false);
    };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Your Watchlist</h1>
        <h2 className="text-xl mb-6">Current Wallet: {currwallet}</h2>
        <ul className="space-y-4 mb-8">
          {watchlist.map((item) => (
            <li key={item} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold">{item}</p>
                <p className="text-sm">
                  {loading[item] ? "Loading..." : balances[item] !== undefined ? `${balances[item]} tokens` : "Balance not available"}
                </p>
              </div>
              <button
                onClick={openModal} className="bg-black hover:bg-red-700 text-white py-2 px-4 rounded-lg transition duration-200"
              >
                Check Allowance
              </button>
              {showAllowanceModal && <AllowanceModal onClose={closeModal}  tokenAddress = {item}/> }
              {/* <div>
                  <button onClick={openModal}>Check Allowance</button>
                  <AllowanceModal show={showAllowanceModal} onClose={closeModal} />
              </div> */}
              <button
                onClick={() => dispatch(removefromwatchlist({ address: currwallet, token: item }))}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition duration-200"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h1 className="text-2xl font-semibold mb-4">Add to Watchlist</h1>
          <form onSubmit={handleSubmit(addingthetoken)} className="flex space-x-4">
            <input
              {...register("token")}
              placeholder="Token Address"
              className="flex-grow px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-2 px-4 rounded-lg transition duration-200 font-semibold"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
