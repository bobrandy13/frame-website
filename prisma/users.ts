import Frames from "@/pages/Frames"
import { PrismaClient } from "@prisma/client"
import { StringExpression } from "mongoose"

const prisma = new PrismaClient()
interface product {
  name: string,
  price?: number,
  image: string, 
  inStock: boolean,
  category: string
}

interface frames {
  name: string,
  ppm: number,
  image: string,
  inStock: boolean,
}



export async function getUniqueProducts(Name: any) {
  try {
    console.log(Name)
    const product = await prisma.product.findUnique({
      where: {
        name: Name
      }
    })
    console.log(product)
    return {product}
  }
  catch (error) {
    console.log(error)
    return {error}
  }
}


export async function getProducts() {
  try {
    const products = await prisma.product.findMany()
    return {products}
  } catch(error) {
    return {error}
  }
}
export async function createProduct(product: product) {
  try {
    const productsFromDB = await prisma.product.create({ data: {
      "name": product.name, 
      "Image": product.image,
      "InStock": product.inStock,
      "category": product.category,
    }})
    return {product: productsFromDB}
  } catch (error) {
    return {error}
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    })
    return { user }
  } catch (error) {
    return { error }
  }
}
