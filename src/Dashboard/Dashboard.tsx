"use client"

import { AuthContext } from "@/contexts/authContext"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"

const Dashboard = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setIsMounted(true);  // Asegura que el componente se ha montado
  }, []);

  useEffect(() => {
    if (isMounted && !user?.login) {
      router.push("/login");
    }
  }, [isMounted, user]);

  if (!isMounted) {
    return null;  // Prevenir el renderizado hasta que se monte en el cliente
  }

  return (
    <>
      <h1>Dashboard</h1>
      <h4>{user?.user.name}</h4>
      <h4>{user?.user.email}</h4>
      {user?.user.orders?.map((order, i) => (
        <div className="flex gap-4" key={i}>
          <p>Order {order.id}</p>
          <p>{order.date}</p>
        </div>
      ))}
    </>
  )
}

export default Dashboard;
