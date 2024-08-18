import React from "react";
import { useForm } from "react-hook-form";
import { ethers } from "ethers";
import { useSelector } from "react-redux";
import getProvider from "../components/getprovider";


export default function Send() {
    const { register, handleSubmit } = useForm();
    const wallet = useSelector((state) => state.currwallet);
    const provider = useSelector((state) => state.provider);

    const handleSendEther = async (data) => {
      const {recipentaddress, amount } = data;
      if(ethers.utils.isAddress(recipentaddress)){
          try {
            const provider = getProvider();
            console.log(provider);
            const privateKey = prompt('Enter your private key');

            // Get the provider and signer from the wallet
            const wallet = new ethers.Wallet(privateKey, provider);
          
            // Convert amount to Ether (from string)
            const value = ethers.utils.parseEther(amount);
          
            // Send the transaction
            const tx = await signer.sendTransaction({
              to: recipentaddress,
              value,
            });
            await tx.wait()
          
            console.log('Transaction sent:', tx);
            alert('Transaction sent!');
          } catch (error) {
            console.error('Error sending Ether:', error);
            alert('Failed to send Ether');
          }
      }else {
        alert('Invalid Address');
      }
    };
    
    return (
      <form className = "rounded-3xl px-0  bg-rose-800 border-t-2 border border-gray-300 p-4 " onSubmit={handleSubmit(handleSendEther)}>
        <div className="bg-transparent py-1 px-0 text-3xl">From</div>
        <div className="bg-transparent py-1 px-0">
        <input className="text-1xl" value={wallet} disabled /> <br/>
        </div>
        <div className="bg-transparent py-1 px-0 text-3xl">To</div>
        <div className="bg-transparent py-1 px-0 ">
        <input className="text-1xl" {...register("recipentaddress")} /><br/>
        </div>
        <div className="bg-transparent py-1 px-0 text-3xl" >Amount</div>
        <div className="bg-transparent py-1 px-0 " >
        <input  className="text-1xl" {...register("amount")} />
        </div>
        <div className="bg-transparent py-1 px-0 " >
        <input className="rounded-2xl text-1xl bg-black p-5 rou lg:hover:text-green-600 sm:hover:bg-blue-600" type="submit" />
        </div>
      </form>
  )
}