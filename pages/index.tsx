import connectMongo from "@/utils/connectMongo";
import Test from '../models/testModel';
import { useEffect } from "react";

export default function Home({ tests }: {tests: any}) {
  useEffect(() => {
    console.log(tests)
  })
  const createTest = async () => {
    const randomNum = Math.floor(Math.random() * 1000);
    const res = await fetch('/api/test/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `Test ${randomNum}`,
        email: `test${randomNum}@test.com`,
      }),
    });
    const data = await res.json();
    console.log(data);
  }
  return (
    <div className="bg-purple-200 flex items-center justify-center h-screen">
      <button onClick={createTest}>Click me</button>
      Hello World
    </div>
  )

}

export const getServerSideProps = async () => {
  // in here we want to connect to prisma and access the data
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('FETCHING DOCUMENTS');
    const tests = await Test.find();
    console.log('FETCHED DOCUMENTS');

    return {
      props: {
        tests: JSON.parse(JSON.stringify(tests)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};