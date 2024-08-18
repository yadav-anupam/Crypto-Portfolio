import React ,{useState} from "react";
//import {connectMetamask} from "../components/connectwithmetamask";
import { useForm } from "react-hook-form";
import {useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import {useDispatch , useSelector} from "react-redux";
import { addwallet } from "../store/walletslice";
import {addtowatchlist} from "../store/watchlistslice"




function ConnectWallet() {
    const { register , handleSubmit } = useForm()
    const dispatch = useDispatch();

    async function connectMetamask() {
        if (window.ethereum) {
            try {
                const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
                console.log(account);
                //const provider = new ethers.providers.Web3Provider(window.ethereum);
                //console.log(provider);
                console.log("Connected to MetaMask");
                dispatch(addwallet(account[0]));
            } catch (error) {
                console.error(error);
            }
        } else {
            console.error("MetaMask not found");
        }
    }

    const connectviaaddrees = async (e) => {
        //e.preventDefault();
        try{
            // const infuraURl = "https://mainnet.infura.io/v3/6788a7defd274be796343d21820517cc";
            // const provider = new ethers.providers.JsonRpcProvider(infuraURl);
            // console.log(provider);
            // const balance = await provider.getBalance(e.walletaddress);
            // console.log(balance);
            const address = e.walletaddress;
            if (!ethers.utils.isAddress(address)) {
                console.error(`Invalid address and the address is ${address}`); 
                return;
            }
            // const inputPrivateKey = prompt('Enter your private key');
            // if (inputPrivateKey) {
            //     try {
            //       // Connect using the private key
            //       const connectedWallet = new ethers.Wallet(inputPrivateKey);
            //       if (connectedWallet.address === address) {
            //         console.log('Connected to wallet');
            //         dispatch(addwallet(address));
            //       } else {
            //         console.error('Private key does not match the address');
            //       }
            //     } catch (Error) {
            //       console.error(`The error is ${Error}`);
            //     }
            // }
            dispatch(addwallet(address));
            console.log("Connected to wallet" , address);
            console.log("Adding to watchlist");
            dispatch(addtowatchlist({address : address , watchlist :  ["fygtffvgf" , "gverrgag0" , "avidfjvn"]}));
            console.log("Added to watchlist");
        }catch(error){
            console.error(`Well ... The error is ${error}`);
        }
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
        <form onSubmit={handleSubmit(connectviaaddrees)}>
            <div className="p-5 bg-slate-600 rounded">
                <input className="p-5 " {...register("walletaddress")} />
                <input className= 'p-5 bg-black '   type="submit" />
            </div>
        </form>

    </div>


    </>
  );
}

export default ConnectWallet;