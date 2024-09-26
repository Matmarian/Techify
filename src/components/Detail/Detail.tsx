import { IProduct } from "../../../interfaces/products"
import Image from 'next/image'; 

const Detail = (product: IProduct) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
     
      <Image 
        src={product.image} 
        alt={product.name} 
        width={300}  
        height={300} 
        layout="responsive"  
      />
    </div>
  )
}

export default Detail;
