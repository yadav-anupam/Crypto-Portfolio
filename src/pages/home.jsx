import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addcurrwallet } from "../store/currwalletslice";
import { ethers } from "ethers";
import getProvider from "../components/getprovider";

export default function Home() {
  const wallet = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [balances, setBalances] = useState({});

  useEffect(() => {
    const fetchBalances = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const newBalances = {};
      for (let address of wallet) {
        try {
          const balance = await provider.getBalance(address);
          newBalances[address] = ethers.utils.formatEther(balance);
        } catch (error) {
          console.error(`Failed to fetch balance for ${address}:`, error);
          newBalances[address] = "Error";
        }
      }
      setBalances(newBalances);
    };
    fetchBalances();
  }, [wallet]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Your Wallets</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wallet.map((address, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <div>
                <p className="text-xl font-mono break-all mb-4">{address}</p>
                <p className="text-sm text-gray-400 mb-2">Total Balance:</p>
                <p className="text-lg font-semibold">
                  {balances[address] !== undefined
                    ? `${balances[address]} ETH`
                    : "Loading..."}
                </p>
              </div>
              <button
                onClick={() => {
                  dispatch(addcurrwallet(address));
                  navigate("/wallet");
                }}
                className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-2 px-4 rounded-lg transition duration-200 font-semibold"
              >
                View Wallet
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
