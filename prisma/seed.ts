import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient() 

async function main() {
  // prisma.product.createMany({
  //   data: // fill in data from the products
  // })
}


main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
