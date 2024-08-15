import React from "react";
import { useForm } from "react-hook-form";


export default function Send() {
    const { register, handleSubmit } = useForm()
    const send = (data) => console.log(data)

    return (
      <form onSubmit={handleSubmit(send)}>
        <select {...register("walletaddress")}>
            <option value="MetaMask">MetaMask</option>
            <option value="Coinbase">Coinbase</option>
            <option value="Trust Wallet">Trust Wallet</option>
            <option value="Binance">Binance</option>
        </select>
        <input className="gap-y-7" {...register("recipentaddress")} />
        <input className="gap-y-7"{...register("amount")} />
        <input type="submit" />
      </form>
  )
}