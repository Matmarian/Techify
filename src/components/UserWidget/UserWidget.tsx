"use client"
import { AuthContext } from '@/contexts/authContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineDashboard } from "react-icons/ai";;
import { MdLogout } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi"; // Ícono del carrito

// Definir un tipo para los elementos del carrito
interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number; // Propiedad que define la cantidad de productos
}

const UserWidget = () => {
    const router = useRouter();
    const { user, logout } = useContext(AuthContext);
    const [cart, setCart] = useState<CartItem[]>([]);  // Estado para el carrito con el tipo CartItem
    const [isMounted, setIsMounted] = useState(false);  // Para detectar si el componente ya se ha montado en el cliente.

    useEffect(() => {
        setIsMounted(true);  // Aseguramos que el componente esté montado en el cliente.
        if (typeof window !== "undefined") {
            const storedCart = localStorage.getItem("cart");
            console.log("Carrito almacenado:", storedCart); // Añade este log para ver los datos del carrito
            if (storedCart) {
                setCart(JSON.parse(storedCart));
            }
        }
        router.refresh();  // Refrescamos para asegurarnos de que los datos son los correctos.
    }, [router]);

    if (!isMounted) {
        return null;  // Prevenir el renderizado en el servidor.
    }

    // Calcula la cantidad total de productos en el carrito
    const totalItems = cart?.reduce((total, item) => total + (item.quantity || 0), 0);

    if (user?.login) {
        return (
            <div className="flex items-center gap-4">
                <Link href="/dashboard">
                    <AiOutlineDashboard size={35} />
                </Link>
                <Link href="/cart" className="relative">
                    < HiOutlineShoppingBag  size={35} />
                    {totalItems > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                            {totalItems}
                        </span>
                    )}
                </Link>
                <button onClick={logout}>
                    < MdLogout size={35} />
                </button>
            </div>
        );
    }

    return (
        <Link href="/login">
            < AiOutlineLogin size={35} />
        </Link>
    );
};

export default UserWidget;


