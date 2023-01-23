import React from "react";
import Image from "next/image"
import Link from "next/link"
import ProductType from "../pages/productType"

const ProductComponent = React.forwardRef(({product, href}, ref) => {
  console.log(product)
  return (
    // make this into a component
    <div className="flex-[1_1_30%] sm:flex-grow shadow-lg lg:flex-[1_1_18%] lg:bg-green-200 bg-slate-200 h-60 rounded-sm m-2 p-10 hover:shadow-slate-300 ">
      <Image
        src={product.Image}
        width={120}
        height={100}
        alt="product image"
      />
      <Link href="./frames" />
    </div>
  );
})

ProductComponent.displayName = "ProductComponent"

export default ProductComponent;