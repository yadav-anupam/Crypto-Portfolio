import React from "react";
function ConnectWallet() {
  return (
    <>
    <div>
        <button >
            <div  >
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
        <form >
            <label for="Wallet Address">Connect your wallet via wallet address</label><br/>
            <input type="text" id="Wallet Address" name = "Wallet address"></input>
            <input type="submit" value="Connect Wallet"></input>
        </form>
    </div>


    </>
  );
}

export default ConnectWallet;