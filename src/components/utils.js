import { ethers } from "ethers";

const ERC20_ABI = [
    // balanceOf function
    "function balanceOf(address owner) view returns (uint256)",
    // decimals function
    "function decimals() view returns (uint8)",
    "function allowance(address owner, address spender) view returns (uint256)"
];

async function getTokenBalance(provider, tokenAddress, walletAddress) {
    const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
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
    } catch (error) {
        console.error("Error fetching token balance:", error);
        return "Error";
    }
}

async function checkAllowance(provider, tokenAddress, ownerAddress, spenderAddress) {

    // Create a contract instance
    const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
    try {
        // Get the allowance
        const walAddress = ownerAddress[0].toString();
        const allowance = await tokenContract.allowance(walAddress , spenderAddress);
        return ethers.utils.formatUnits(allowance, 18);  // Formatting the allowance
    } catch (error) {
        console.error("Error fetching allowance:", error);
        return null;
    }
}

export { getTokenBalance, checkAllowance };
