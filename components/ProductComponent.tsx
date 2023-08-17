import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProductType from "../utils/productType";

type CollectionType = {
  id: string;
  name: string;
  image: string;
  products: Array<object>;
};

export default function ProductComponent({
  product,
}: {
  product: CollectionType;
}) {
  return (
    <>
      <div className="sm:w-64 h-96 bg-slate-200 m-2 float-left rounded-md p-2 flex items-center justify-center">
        <Image
          src={product.image}
          alt="product image"
          width={150}
          height={150}
        ></Image>
      </div>
      <p className="text-center bg-slate-100 p-2 m-2">{product.name}</p>
    </>
  );
}
