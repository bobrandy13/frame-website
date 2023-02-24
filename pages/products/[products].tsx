import { useRouter } from "next/router";
import {type} from "os";
import { useEffect, useState } from "react";
import ProductType from "../productType"
import Image from "next/image";

const Product = ({data}: {data: ProductType}) => {
  const router = useRouter();
  const [individualProduct] = useState(data)

  console.log(individualProduct)
  const { products } = router.query;

  return (
    <>
      <div>
        <div className="relative left-11 h-96 w-96">
          <Image src={individualProduct.Image} alt="product photo" fill/>
        </div>
      </div>
    </>
  )
};

export async function getStaticProps(context) {
  console.log(context)
  const url = "http://localhost:3000/api/productsCollection/" + context.params?.products
  const res = await fetch(url)
  console.log(url)
  const data = await res.json()
  console.log("data", data)
  return {
    props: {
      data: data,
    }
  }
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/productsCollection")
  const data = await res.json()
  return {
     paths: data.products.map((product: ProductType)=> {
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