import { PrismaClient } from "@prisma/client";
const frameData = [
  {
    name: "Volcano",
    Image: "https://storage.googleapis.com/framingwebsite/2%20p%20abstract.png", 
    InStock: true,
    category: "abstract"
  },
  {
    name: "Mountain View", 
    Image: "https://storage.googleapis.com/framingwebsite/IMG_1409.jpeg", 
    InStock: true, 
    category: "scenery"
  },
  {
    name: "Man on Horse", 
    Image: "https://storage.googleapis.com/framingwebsite/IMG_1608.JPG", 
    InStock: true, 
    category: "miscellaneous"
  }
]

const prisma = new PrismaClient() 


const load =async () => {
  try {
    await prisma.product.createMany({
      data: frameData
    })
    console.log("created product data")
  
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

