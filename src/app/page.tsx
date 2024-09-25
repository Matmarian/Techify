import Card from "@/components/Card/Card";
import CardList from "@/components/CardList.tsx/CardList";
import Hero from "@/components/Hero/Hero"
import { getProductsService } from "@/services/productsService";
import { IProduct } from "../../interfaces/products";


const page =  async () => {
  const url = `${process.env.API_URL}/products`;
  const products = await getProductsService(url)
  const featuredProducts= products.slice(0, 3);
  return (
    <>
    <Hero />
    <main className="container">
      <CardList>
        {featuredProducts.map((product: IProduct, i:number) => (
            <Card product={product} key={i} />    
            
        ))}
      </CardList>  
    
    </main>
    </>
  )
}

export default page