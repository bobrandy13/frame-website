import { useRouter } from "next/router";
import { type } from "os";
import { useEffect, useState } from "react";
import ProductType from "../../utils/productType";
import Image from "next/image";
// import { Carousel } from "react-responsive-carousel";
import { GetStaticProps } from "next";
import { getProducts, getUniqueProducts } from "@/prisma/users";
import { Carousel } from "react-responsive-carousel";

const images = {
  // load images from the api
};

const Product = ({ data }: { data: ProductType }) => {
  console.log(data);
  const router = useRouter();
  const [individualProduct] = useState(data);

  console.log(individualProduct);
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
        <div className="sm:min-h-screen sm:flex flex-col flex-wrap justify-center md:flex-row">
          <div className="container-1 sm:grow-[2] bg-white m-2 sm:items-center sm:justify-center flex justify-center rounded">
            <div className="relative w-4/5 h-72 sm:h-screen carousel">
              <div id="item1" className="carousel-item relative w-full m-20">
                {[...Array(individualProduct.products?.length)].map(
                  (e, index) => (
                    <Image
                      key={index}
                      src={individualProduct.products[index].Image}
                      alt="product image"
                      className="w-full "
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  )
                )}
                {/* <Image
                  src={individualProduct.products[0].Image}
                  alt="product image"
                  className="w-full "
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                /> */}
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-md">
              1
            </a>
            <a href="#item2" className="btn btn-md">
              2
            </a>
            <a href="#item3" className="btn btn-md">
              3
            </a>
            <a href="#item4" className="btn btn-md">
              4
            </a>
          </div>
          <div className="container-2 bg-slate-100 m-2 flex-grow text-center flex justify-center items-center flex-wrap dark:text-black p-2 rounded">
            <h1 className="text-3xl">{individualProduct.name}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await getUniqueProducts(context.params?.products);
  console.log("PRODUDCT PRODUCT PRODUCT ", context.params?.products);
  return {
    props: {
      data: res.product,
    },
  };
};

export async function getStaticPaths() {
  const a = await getProducts();
  console.log("A IS IS IS IS", a);
  return {
    paths: a.products?.map((product: any) => {
      return {
        params: {
          products: product.name,
        },
        // params: {
        //   products: product,
        // },
      };
    }),
    fallback: false,
  };
}

export default Product;
