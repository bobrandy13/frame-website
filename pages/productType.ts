import { useRouter } from "next/router";

const Product = ({ data }: { data: object }) => {
  const router = useRouter();

  const { products } = router.query;

  return <p>Post: {products}</p>;
};

export default interface productData {
  Image: string;
  InStock: boolean;
  id: string;
  name: string;
  price?: number;
}

