import Link from "next/link";
import { IProduct } from "../../../interfaces/products";
import Image from "next/image";

interface ProductProps{
    product: IProduct;
}

const Card = ({product}: ProductProps) => {
  return (
    <Link href={`/products/${product.id}`} 
    className="bg-Sixth text-white rounded p-4 mt-2 mb-5"
    >
    <div className="flex justify-between items-center">
        <h2>{product.name}</h2>
        <p className="text-white text-base">US${product.price}</p>
    </div>
        <div className="flex justify-center">
          <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          />

        </div>
    </Link>
  )
}

export default Card