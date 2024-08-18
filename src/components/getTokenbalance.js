import { ethers } from "ethers";

const tokenAbi = [
    // balanceOf function
    "function balanceOf(address owner) view returns (uint256)",
    // decimals function
    "function decimals() view returns (uint8)",
    "function allowance(address owner, address spender) view returns (uint256)"
];

export default async function getTokenBalance(provider, tokenAddress, walletAddress) {
    const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, provider);
    try {
        console.log("Fetching token balance...");
        // Fetch the token balance
        const walAddress = walletAddress[0].toString();

        const balance =  await tokenContract.balanceOf(walAddress);

        console.log(`Token balance: ${balance }with type of ${typeof(balance)}}`);

        // Fetch the number of decimals for the token
        const decimals = await tokenContract.decimals();

        // Convert balance to a more readable format
        const formattedBalance = ethers.utils.formatUnits(balance, decimals);
        console.log("Token balance:", formattedBalance);
        return formattedBalance;

        console.log(`The value of provider is ${provider} with type of ${typeof(provider)}`);
        console.log(`The value of wallet is ${walAddress} with type of ${typeof(walAddress)}`);
        console.log(`The value of tokenAddress is ${tokenAddress} with type of ${typeof(tokenAddress)}`);
        return "Token balance";
    } catch (error) {
        console.error("Error fetching token balance:", error);
        return "Error";
    }
}