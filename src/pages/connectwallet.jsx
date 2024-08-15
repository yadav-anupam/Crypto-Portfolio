import React from "react";
//import {connectMetamask} from "../components/connectwithmetamask";
import { useForm } from "react-hook-form";
import {useNavigate } from "react-router-dom";
import {ethers} from "ethers";

function ConnectWallet() {
    const { register, handleSubmit } = useForm()

    async function connectMetamask() {
        if (window.ethereum) {
            try {
                const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
                console.log(account);
                const provider = new ethers.providers.Web3Provider(window.ethereum);

                console.log("Connected to MetaMask");
            } catch (error) {
                console.error(error);
            }
        } else {
            console.error("MetaMask not found");
        }
    }

    async function connectwallet( data ) {
        console.log(data);
        const walletaddress = data.walletaddress;
    }
  return (
    <>
    <div>
        <button onClick = {connectMetamask} >
            <div>
                <img src = "https://img.icons8.com/?size=100&id=za6M8q4B1tMF&format=png&color=000000" alt = "MetaMask Logo"/>
                <div kind="caption/accent">MetaMask</div>
            </div>
        </button>
        <button >
            <div>
                <img src="https://img.icons8.com/?size=100&id=5qUJBPRD9xiI&format=png&color=000000" alt = "Coinbase Logo"/>
                <div kind="caption/accent">Coinbase</div>
            </div>
        </button>
    </div>
    <div>
        <form onSubmit={handleSubmit(connectwallet)}>
            <input className="gap-y-96 p-96" {...register("walletaddress")} />
            <input type="submit" />
        </form>

    </div>


    </>
  );
}

export default ConnectWallet;