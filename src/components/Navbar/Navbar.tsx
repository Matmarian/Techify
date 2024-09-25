import Link from "next/link"
import UserWidget from "../UserWidget/UserWidget"


const Navbar = () => {
  return (    
    <nav className="bg-Fifth text-First h-20 ">
      <div className= "container mx-auto flex justify-between items-center h-full">
       <Link href="/"className="text-xl font-bold si ">Techify</Link>
          <div className="flex space-x-4">
            <Link href="/products"><p>products</p></Link>           
            <Link href="/cart"><p>cart</p></Link>        
          </div>
          <UserWidget />          
          </div>    
          
    </nav>
  )
}

export default Navbar