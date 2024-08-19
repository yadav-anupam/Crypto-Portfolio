import React from "react";
import { useForm } from "react-hook-form";
import { ethers } from "ethers";
import { useSelector } from "react-redux";
import getProvider from "../components/getprovider";

export default function Send() {
  const { register, handleSubmit } = useForm();
  const wallet = useSelector((state) => state.currwallet);

  const handleSendEther = async (data) => {
    const { recipentaddress, amount } = data;
    if (ethers.utils.isAddress(recipentaddress)) {
      try {
        const provider = getProvider();
        const privateKey = prompt('Enter your private key');
        
        const wallet = new ethers.Wallet(privateKey, provider);
        const value = ethers.utils.parseEther(amount);
        
        const tx = await wallet.sendTransaction({
          to: recipentaddress,
          value,
        });
        await tx.wait();
        
        console.log('Transaction sent:', tx);
        alert('Transaction sent!');
      } catch (error) {
        console.error('Error sending Ether:', error);
        alert('Failed to send Ether');
      }
    } else {
      alert('Invalid Address');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 text-white rounded-lg shadow-lg p-6">
      <h2 className="text-3xl font-bold mb-4">Send Ether</h2>
      <form onSubmit={handleSubmit(handleSendEther)}>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">From</label>
          <input 
            className="w-full p-2 bg-gray-900 text-gray-300 rounded-md"
            value={wallet} 
            disabled 
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">To</label>
          <input 
            className="w-full p-2 bg-gray-900 text-gray-300 rounded-md"
            {...register("recipentaddress")} 
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Amount</label>
          <input 
            className="w-full p-2 bg-gray-900 text-gray-300 rounded-md"
            {...register("amount")} 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
