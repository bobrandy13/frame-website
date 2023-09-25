import React from "react";

export default function FilterButton({
  Category,
  handleFilter,
}: {
  Category: string;
  handleFilter: () => number;
}) {
  // const handleFilter = (e: React.MouseEvent) => {
  //     setProductData([...data.products]);
  //     console.log(data.products);
  //     if (e.target !== null) {
  //         if (e.target) {
  //             let cateogry = (e.target as HTMLInputElement).value;
  //             if (cateogry === "All paintings") {
  //                 setProductData([...data.products]);
  //             } else {
  //                 let filteredProducts = [...data.products].filter((product: any) => {
  //                     // console.log(product.category)
  //                     return product.category.toLowerCase() === cateogry;
  //                 });
  //                 setProductData(filteredProducts);
  //                 console.log(filteredProducts);
  //             }
  //         }
  //         return 1;
  //         // TODO: filter based on what was presesd ;
  //     }
  // };
  return (
    <li className="float-left mx-5">
      <button onClick={handleFilter} value="All paintings">
        {Category}
      </button>
    </li>
  );
}
