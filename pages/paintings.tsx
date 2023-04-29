import Image from "next/image";
import Link from "next/link";
import React, {
  useEffect,
  useState,
  useContext,
  HtmlHTMLAttributes,
} from "react";
import ProductComponent from "components/ProductComponent";
import { getProducts } from "@/prisma/users";

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
  const [productData, setProductData] = useState([...data.products]);
  const handleFilter = (e: React.MouseEvent) => {
    setProductData([...data.products]);
    console.log(data.products);
    if (e.target !== null) {
      if (e.target) {
        let cateogry = (e.target as HTMLInputElement).value;
        if (cateogry === "All paintings") {
          setProductData([...data.products]);
        } else {
          let filteredProducts = [...data.products].filter((product: any) => {
            // console.log(product.category)
            return product.category.toLowerCase() === cateogry;
          });
          setProductData(filteredProducts);
          console.log(filteredProducts);
        }
      }
      return 1;
      // TODO: filter based on what was presesd ;
    }
  };

  return (
    <>
      <div className="w-90 xs:h-20 h-32 rounded bg-slate-400 h xs:m-2">
        <button className=""></button>
        <div className="flex text-center justify-center items-center align-middle">
          <ul className="flex items-center justify-center flex-wrap h-30 xs:h-20 relative -top-6">
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
      <div className="flex justify-center items-center flex-wrap">
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
    </>
  );
}

export async function getStaticProps() {
  const data = await getProducts();

  return {
    props: {
      data,
    },
  };
}

export default Paintings;
