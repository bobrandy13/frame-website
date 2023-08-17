import { PrismaClient } from "@prisma/client";
import { generate, count } from "random-words";

const frameData = [
  {
    name: generate(),
    Image: "https://picsum.photos/750/1500",
    InStock: true,
    category: "miscellaneous",
}, 
  {
    name: generate(),
    Image: "https://picsum.photos/750/1500",
    InStock: true,
    category: "miscellaneous",
}, 
  {
    name: generate(),
    Image: "https://picsum.photos/750/1500",
    InStock: true,
    category: "miscellaneous",
}, 
  {
    name: generate(),
    Image: "https://picsum.photos/750/1500",
    InStock: true,
    category: "miscellaneous",
}, 
  {
    name: generate(),
    Image: "https://picsum.photos/750/1500",
    InStock: true,
    category: "miscellaneous",
}, 
  {
    name: generate(),
    Image: "https://picsum.photos/750/1500",
    InStock: true,
    category: "miscellaneous",
}, 
  {
    name: generate(),
    Image: "https://picsum.photos/750/1500",
    InStock: true,
    category: "miscellaneous",
}, 
  {
    name: generate(),
    Image: "https://picsum.photos/750/1500",
    InStock: true,
    category: "miscellaneous",
}, 
];

// generate seeding data for the website.
for (let i = 0; i < 10; i++) {
  frameData.push({
    name: generate(),
    Image: "https://picsum.photos/750/1500",
    InStock: true,
    category: "miscellaneous",
  });
}

console.log(frameData)

const prisma = new PrismaClient();

const load = async () => {
  try {
    // fill with relational data.
    // One collection should have many different paintings.
    // create the collections of products to upload to prisma
    const collections = await prisma.collections.create({
      data: {
        name: generate(),
        image: "https://picsum.photos/750/1500",
        products: {
          create: frameData
          // create: {
          //   name: generate(),
          //   Image: "https://picsum.photos/750/1500",
          //   InStock: true,
          //   category: "miscellaneous",
          // },
        },
      },
    });

    console.log("created product data");

    // retunr the output of all the collections found
    const user = await prisma.collections.findMany({
      include: {
        products: true,
      },
    });
    console.log(user[0].products);
  } catch (e) {
    // if error output
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
