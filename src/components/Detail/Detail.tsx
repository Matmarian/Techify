import { IProduct } from "../../../interfaces/products"


const Detail = (product:IProduct) => {
  return (
    <div>
    <h1>{product.name}</h1>
    <p>{product.price}</p>
    <p>{product.description}</p>
    <img src={product.image} alt={product.name} />    
    
    </div>
  )
}

export default Detail