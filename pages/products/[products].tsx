import { useRouter } from "next/router";

const Product = ({ data }: { data: object }) => {
  const router = useRouter();

  const { products } = router.query;
  console.log(data);

  return <p>Post: {products}</p>;
};

// interface productData {
//   Image: string;
//   InStock: boolean;
//   id: string;
//   name: string;
//   price?: number;
// }

// make a call to my database and see which item i am ttying to fetch

export async function getServerSideProps(context: Object) {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Product;
