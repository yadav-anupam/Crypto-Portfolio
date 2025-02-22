import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch , useSelector} from "react-redux";
import { addwallet } from "../store/walletslice";
import { addtowatchlist } from "../store/watchlistslice";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';


function ConnectWallet() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wallet = useSelector((state) => state.wallet);

  async function connectMetamask() {
    if (window.ethereum) {
      try {
        const account = await window.ethereum.request({ method: "eth_requestAccounts" });
        console.log(account);
        console.log("Connected to MetaMask");
        console.log(`${typeof(wallet)} with value of ${wallet}`);
        if(wallet.find((w) => w === account[0])) {
          alert("Wallet already connected");
          return;
        }
        dispatch(addwallet(account[0]));
        dispatch(addtowatchlist({ address: account[0], watchlist: [] }));
        alert("Connected to MetaMask wallet of address: " + account[0]);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("MetaMask not found");
    }
  }

  const connectToCoinbaseWallet = async () => {
    const YOUR_INFURA_PROJECT_ID = import.meta.env.INFUIRA_API_KEY;
    try {
      const APP_NAME = 'crypto-portfolio';
      const APP_LOGO_URL = 'https://example.com/logo.png';
      const DEFAULT_ETH_JSONRPC_URL = 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID';
      const DEFAULT_CHAIN_ID = 1;

      const coinbaseWallet = new CoinbaseWalletSDK({
        appName: APP_NAME,
        appLogoUrl: APP_LOGO_URL,
        darkMode: false,
      });

      const ethereum = coinbaseWallet.makeWeb3Provider(DEFAULT_ETH_JSONRPC_URL, DEFAULT_CHAIN_ID);
      const provider = new ethers.providers.Web3Provider(ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      console.log('Connected to Coinbase Wallet:', accounts[0]);
      if(wallet.find((w) => w === accounts[0])) {
        alert("Wallet already connected");
        return;
      }
      dispatch(addwallet(accounts[0]));
      dispatch(addtowatchlist({ address: accounts[0], watchlist: [] }));
      alert("Connected to coinbase wallet of address: " + accounts[0]);
      navigate("/");
      //ethereum.on('accountsChanged', (accounts) => {
       // console.log(accounts.length > 0 ? accounts[0] : null);
      //});

      //ethereum.on('chainChanged', (chainId) => {
      //  console.log('Network changed:', chainId);
      //});
    } catch (error) {
      console.error('Error connecting to Coinbase Wallet:', error);
    }
  };


  const connectviaaddrees = async (e) => {
    try {
      const address = e.walletaddress;
      if (!ethers.utils.isAddress(address)) {
        console.error(`Invalid address: ${address}`);
        return;
      }
      if(wallet.find((w) => w === address)) {
        alert("Wallet already connected");
        return;
      }
      dispatch(addwallet(address));
      console.log("Connected to wallet:", address);
      console.log("Adding to watchlist");
      dispatch(addtowatchlist({ address: address, watchlist: [] }));
      console.log("Added to watchlist");
      alert("Connected to wallet of address: " + address);
        navigate("/");
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-8">Connect Your Wallet</h1>
      <div className="flex space-x-4 mb-8">
        <button
          onClick={connectMetamask}
          className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-2 px-4 rounded-lg transition duration-200 ease-in-out"
        >
          <img
            src="https://img.icons8.com/?size=100&id=za6M8q4B1tMF&format=png&color=000000"
            alt="MetaMask Logo"
            className="w-8 h-8 mr-2"
          />
          <span className="text-lg font-semibold">MetaMask</span>
        </button>
        <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-200 ease-in-out" onClick={connectToCoinbaseWallet}>
          <img
            src="https://img.icons8.com/?size=100&id=5qUJBPRD9xiI&format=png&color=000000"
            alt="Coinbase Logo"
            className="w-8 h-8 mr-2"
          />
          <span className="text-lg font-semibold">Coinbase</span>
        </button>
      </div>
      <form onSubmit={handleSubmit(connectviaaddrees)} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="walletaddress" className="block text-sm font-medium text-gray-400">
            Wallet Address
          </label>
          <input
            id="walletaddress"
            {...register("walletaddress")}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter wallet address"
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-2 rounded-lg transition duration-200 ease-in-out font-semibold"
        >
          Connect Wallet
        </button>
      </form>
    </div>
  );
}

export default ConnectWallet;
