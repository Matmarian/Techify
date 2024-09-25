"use client"
import { useContext } from "react";
import { AuthContext } from "@/contexts/authContext";
import { useRouter } from "next/navigation";
import { IProduct } from "../../../interfaces/products";

interface BuyButtonProps{
product: IProduct;
}

const BuyButton = ({product}: BuyButtonProps ) => {
   const {user} = useContext(AuthContext);
   const router = useRouter();  
    
    const handleBuy = ()=> {
    if(!user?.login){
        router.push("/login");
    } else {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]") as IProduct[];
        if(!cart.some((p: IProduct) => p.id === product?.id)){
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));        
            router.refresh();
            alert(`${product?.name} añadido a tu carrito`)
        } else {
            alert(`${product?.name} ya está en tu carrito`)
        }
    }
};
  return <button className="bg-Fifth text-white p-4 rounded" onClick={handleBuy}>Buy</button>

}

export default BuyButton