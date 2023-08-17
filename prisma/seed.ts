// i am going to see some random data
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const seeding_data = [
  {
    name: "magical painting",
    Image: "https://picsum.photos/1000/500",
    InStock: true,
    category: "scenery",
  },
];

for (let i = 0; i < 30; i++) {
  seeding_data.push({
    name: "magical painting",
    Image: "https://picsum.photos/1000/500",
    InStock: true,
    category: "scenery",
  });
}

async function main() {
  // prisma.product.createMany({
  //   data: // fill in data from the products
  // })

  return prisma.product.createMany({
    data: seeding_data,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
