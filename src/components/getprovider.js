import { ethers } from "ethers";
function getProvider() {
    // const infuraURl = String(import.meta.env.VITE_INFURA_URL);
    // const provider = new ethers.providers.JsonRpcProvider(infuraURl);/
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    return provider;
}

export default getProvider;