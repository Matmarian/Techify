
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById, getProductsService } from "@/services/productsService";
import BuyButton from "@/components/BuyButton/BuyButton";

const page = async ({ params }: { params: { id: string } }) => { 
    const url = `${process.env.API_URL}/products`;
    const product = await getProductById(url, params.id);  
    if (product === undefined) {
       notFound()
    }

    return (
      <main className="container">
        <h1>{product.name}</h1>
        <div className="flex gap-10">
          <Image src={product.image} alt={product.name} width={320} height={320} />
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold text-end text-red-700">US${product.price}</p>
            <div className="flex justify-between items-center">
              <p className="text-end font-bold pr-1">{product.stock} in stock</p>
              <BuyButton product={product} />
            </div>
            <p className="py-4 text-xl">{product.description}</p>
          </div>
        </div>
      </main>
    );
}

export default page;
