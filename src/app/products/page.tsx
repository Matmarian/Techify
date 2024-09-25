import Card from "@/components/Card/Card";
import CardList from "@/components/CardList.tsx/CardList";
import { IProduct } from "../../../interfaces/products";
import { getProductsService } from "@/services/productsService";

const page = async () => {
    const url = `${process.env.API_URL}/products`;
    const products = await getProductsService(url)      
    
    return (
      <main className="container">
        <CardList>
          {products.map((product: IProduct, i: number) => (
            <Card key={i} product={product} />
          ))}
        </CardList>
      </main>
    );

};

export default page;
