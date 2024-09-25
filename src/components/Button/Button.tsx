import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

interface IButton{
    children: React.ReactNode;
    className?: string;
    variant?: "transparent" | "Fifth" | "Sixth" | "Seventh"
    onClick?: () => void;
    href?: string;
    //type: ButtonHTMLAttributes<HTMLButtonElement>;
}

const Button = ({
  children,
  className = "",
  variant = "Sixth",
  onClick,
  href = "",
  //type,


}: IButton) => {
  return (
    <Link href={href}>
     <button 
     className="p-4 mt-2 border-2 rounded bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 active:scale-95 ..."
    onClick={onClick}  
    >
    {children}
    </button>
  </Link>
  )
}




export default Button