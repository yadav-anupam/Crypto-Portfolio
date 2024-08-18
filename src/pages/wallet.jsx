import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Wallet() {
  const currwallet = useSelector((state) => state.currwallet);
  const watchlist = useSelector((state) => state.watchlist[currwallet]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 underline">Current Wallet</h1>
        <p className="text-2xl mb-6">Address: <span className="font-mono">{currwallet}</span></p>

        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Watchlist</h2>
          {watchlist && watchlist.length > 0 ? (
            <ul className="space-y-4">
              {watchlist.map((token, index) => (
                <li key={index} className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-between">
                  <span className="text-lg font-semibold">{token}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-lg text-gray-400">No tokens in watchlist</p>
          )}
        </div>

        <div className="flex space-x-4">
          <Link to="/watchlist">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-2 px-4 rounded-lg transition duration-200 font-semibold">
              View Watchlist
            </button>
          </Link>

          <Link to="/send">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200 font-semibold">
              Send
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
