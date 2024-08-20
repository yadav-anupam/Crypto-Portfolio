import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"; // To get token address from the path
import getProvider from "../components/getprovider";
import { checkAllowance } from "../components/utils";
import { ethers } from "ethers";

export default function AllowanceModal({ onClose , tokenAddress }) {
    const currwallet = useSelector((state) => state.currwallet);
    const [smartContractAddress, setsmartContractAddress] = useState("");
    const [allowance, setAllowance] = useState(null);
    // const { tokenAddress } = useParams(); // Get token address from the URL path
    const provider = getProvider();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(ethers.utils.isAddress(smartContractAddress) === false) {
            alert('Enter valid contract address');
            return;
        }
        const result = await checkAllowance(provider , tokenAddress , currwallet, smartContractAddress);
        setAllowance(result);
    };


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h3 className="text-xl font-semibold mb-4">Check Token Allowance</h3>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-4">
                        <span className="text-gray-700">Smart Contract Address:</span>
                        <input
                            type="text"
                            value={smartContractAddress}
                            onChange={(e) => setsmartContractAddress(e.target.value)}
                            placeholder="Enter Smart Contract Address"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </label>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none"
                    >
                        Check Allowance
                    </button>
                </form>
                {allowance !== null ? (
                    <p className="mt-4 text-gray-800">Allowance: {allowance} tokens</p>
                ) : (
                    <p className="mt-4 text-gray-500">
                        {allowance === null ? "Enter spender address to check allowance." : "Loading..."}
                    </p>
                )}
                <button
                    onClick={onClose}
                    className="mt-4 w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
