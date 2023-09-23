import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ProductComponent from "components/ProductComponent";
import { getProducts } from "@/prisma/users";
import { GetServerSideProps, GetStaticProps } from "next";

interface handleFilterEventType {
  target: HTMLButtonElement;
}
type product = {
  info: string;
  price: number;
};
interface collectionData {
  id: string;
  image: string;
  name: string;
  products: Array<product>;
}

function Paintings({ data }: { data: any }) {
  console.log(data);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const numOfPages = Math.max(data.products.length / recordsPerPage, 1);
  console.log(numOfPages);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const pageData = data.products.slice(firstIndex, lastIndex);
  const [productData, setProductData] = useState([...pageData]);

  useEffect(() => {
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const pageData = data.products.slice(firstIndex, lastIndex);
    setProductData([...pageData]);
  }, [currentPage, data.products]);

  const handleFilter = (e: React.MouseEvent) => {
    setProductData([...data.products]);
    console.log(data.products);
    if (e.target !== null) {
      if (e.target) {
        let cateogry = (e.target as HTMLInputElement).value;
        if (cateogry === "All paintings") {
          setProductData([...productData]);
        } else {
          let filteredProducts = [...productData].filter((product: any) => {
            // console.log(product.category)
            return product.category.toLowerCase() === cateogry;
          });
          setProductData(filteredProducts);
          console.log(filteredProducts);
        }
      }
      return 1;
    }
  };

  return (
    <>
      <div
        data-theme="light"
        className="w-90 xs:h-20 h-32 rounded bg-slate-400 h xs:m-2 dark:text-white"
      >
        <div className="items-center align-middle">
          <ul className="flex flex-wrap h-30 xs:h-20 items-center justify-center">
            <li className="float-left mx-5">
              <button onClick={handleFilter} value="All paintings">
                All paintings
              </button>
            </li>
            <li className="float-left mx-5">
              <button onClick={handleFilter} value="abstract">
                Abstract
              </button>
            </li>
            <li className="float-left mx-5">
              <button onClick={handleFilter} value="scenery">
                Scenery
              </button>
            </li>
            <li className="float-left mx-5">
              <button onClick={handleFilter} value="nature">
                Nature
              </button>
            </li>
            <li className="float-left mx-5">
              <button onClick={handleFilter} value="fruits">
                Fruits
              </button>
            </li>
            <li className="float-left mx-5">
              <button onClick={handleFilter} value="fruits">
                Clearance
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* this is for the productsCollection */}
      <div className="flex justify-center items-center flex-wrap dark:bg-slate-100 dark:text-black">
        {/* {productData.map((product: individualProduct, key) => {
          console.log(product);
          return (
            <Link href=`/productsCollection/${product.name}`>
              <ProductComponent product={product} key={key}/>
            </Link>
            // make this into a component
          );
        })} */}
        {productData.map((product: any, key: number) => {
          return (
            <Link href={`/products/${product.name}`} key={key}>
              <ProductComponent key={key} product={product} />
            </Link>
          );
        })}
      </div>
      <div className="dark:bg-white flex justify-end p-2">
        {/* i want to loop as there are many pages as there are. */}
        <div className="join">
          {[...Array(numOfPages)].map((e, index: number) => {
            console.log("ran");
            return (
              <button
                className="join-item btn btn-md m-2"
                key={index}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            );
          })}

          {/* <button
            className="join-item btn btn-md btn-active m-2"
            onClick={() => setCurrentPage(2)}
          >
            2
          </button>
          <button
            className="join-item btn btn-md m-2"
            onClick={() => setCurrentPage(3)}
          >
            3
          </button>
          <button
            className="join-item btn btn-md m-2"
            onClick={() => setCurrentPage(4)}
          >
            4
          </button> */}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // take in values from the page request.
  const data = await getProducts();

  return {
    props: {
      data,
    },
  };
}

export default Paintings;
