"use client"
import { AuthContext } from "@/contexts/authContext";
import { IProduct } from "../../../interfaces/products"
import { useContext, useState } from "react";
import { Order } from "../../../interfaces/forms";


const Page = () => {
  const {user} = useContext(AuthContext);
  const [cart, setCart] = useState(
    (typeof window !== "undefined" ? JSON.parse(localStorage.getItem("cart") || "[]"): []) 
);

  
  const handleOrder= ()=>{
  const url = process.env.NEXT_PUBLIC_API_URL + "/orders" || "http://localhost:3000/orders";
  const products = cart.map((product: IProduct) => product.id);
 
    fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: user?.token as string,
    },
    body: JSON.stringify({
      userId: JSON.stringify(user?.user.userId),
      products: products,
    }),
  }) 
  
   
  .then((res) => res.json())
  .then((json) => { 
     localStorage.setItem("cart", JSON.stringify([]));
    setCart([]);
    
    const userWithNewOrder = user; // sincronizo orders en el user de mi contexto 
    userWithNewOrder?.user.orders!.push({
      id: json.id,
      date: json.aate,
    } as Order);
    setUser(userWithNewOrder)
    alert("success!");
   })
   .catch((error) => console.error(error));  
  };

 return (
  <main className="container">
    <h1>Cart</h1>
    <div className="flex justify-between items-center">
        <h4>Total products: {cart.length}</h4>
        <h4>Total US: $ </h4>
        <button className="bg-Fifth text-black p-4 rounded" onClick={handleOrder}>
          Finish Order</button>
    </div>
    <div className="mt-8 flex flex-col gap-2 text-2xl text-black">
      {cart.map((product: IProduct, i: number)=>(
        <div key={i}>{`${i+1}) ${product.name} (US ${product.price})`}</div>
      ))}
    </div>
  </main>
  )
}

export default Page

function setUser(userWithNewOrder: import("../../../interfaces/forms").UserSession | null) {
  throw new Error("Function not implemented.");
}
