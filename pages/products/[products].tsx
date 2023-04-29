import { useRouter } from "next/router";
import {type} from "os";
import { useEffect, useState } from "react";
import ProductType from "../../utils/productType"
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { GetStaticProps } from "next";
import { getProducts, getUniqueProducts } from "@/prisma/users";

const Product = ({data}: {data: ProductType}) => {
  const router = useRouter();
  const [individualProduct] = useState(data)

  console.log(individualProduct)
  const { products } = router.query;

  return (
    <>
      <div>
        {/* <div className="relative left-11 h-96 w-1/2 min-h-screen flex items-center">
          <div className="relative h-4/5 w-screen m-2 ">
            <Image
              src={individualProduct.Image}
              alt="product image"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="inline float-right absolute top-36 right-80"><h1 className="text-3xl font-bold">{individualProduct.name}</h1></div> */}
        <div className="min-h-screen flex flex-col flex-wrap justify-center md:flex-row">
          <div className="container-1 grow-[2] bg-red-100 m-2 flex items-center justify-center">
            <div className="relative w-4/5 h-screen">
              <Image
                src={individualProduct.Image}
                alt="product image"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="container-2 bg-indigo-200 m-2 flex-grow text-center flex justify-center items-center flex-wrap">
            <h1 className="text-3xl">{individualProduct.name}</h1>
          </div>  
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await getUniqueProducts(context.params?.products);
  return {
    props: {
      data: res.product,
    }
  }
}

export async function getStaticPaths() {
  const a = await getProducts();
  console.log(a)
  return {
     paths: a.products?.map((product: any)=> {
       return {
         params: {
           products: product.name
         }
       }
     }),
    fallback: false
  }
}

export default Product;