import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";
import ProductComponent from "components/ProductComponent"

interface handleFilterEventType {
  target: HTMLButtonElement;
}

interface productData {
  products: Array<object>;
}

type product = {
  info: string;
  price: number;
};
interface individualProduct {
  Image: string;
  InStock: boolean;
  id: string;
  name: string;
  price?: number;
  category: string;
}


function Paintings({ data }: { data: productData }) {
  console.log(data);
  const [productData, setProductData] = useState([...data.products]);
  const handleFilter = (e: Event) => {
    if (e.target !== null) {
      const { target } = e;
      if (target) console.log((target as HTMLButtonElement).value);
      // TODO: filter based on what was presesd ;
    }
  };

  useEffect(() => {
    console.log(data.products);
  }, [data]);

  return (
    <>
      <div className="w-90 h-20 rounded bg-slate-400 h m-2">
        <div className="flex justify-center items-center align-middle">
          <ul className="relative top-6">
            <li className="float-left mx-5">
              <button onClick={handleFilter} value="Abstract">
                All paintings
              </button>
            </li>
            <li className="float-left mx-5">
              <button onClick={handleFilter} value="Abstract">
                Abstract
              </button>
            </li>
            <li className="float-left mx-5">
              <button onClick={handleFilter} value="Scenery">
                Scenery
              </button>
            </li>
            <li className="float-left mx-5">
              <button onClick={handleFilter} value="Nature">
                Nature
              </button>
            </li>
            <li className="float-left mx-5">
              <button onClick={handleFilter} value="Fruits">
                Fruits
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* this is for the products */}
      <div className="flex flex-wrap">
        {productData.map((product: individualProduct, key) => {
          console.log(product);
          return (
            <Link key={key} href={`/products/${product.name}`} passHref>
              <ProductComponent product={product} />
            </Link>
            // make this into a component
          );
        })}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
  });
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default Paintings;
