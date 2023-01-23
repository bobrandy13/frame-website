import { PrismaClient } from "@prisma/client"
import { StringExpression } from "mongoose"

const prisma = new PrismaClient()

export async function getProducts() {
  try {
    const products = await prisma.product.findMany()
    return {products}
  } catch(error) {
    return {error}
  }
}
interface product {
  name: string,
  price?: number,
  image: string, 
  inStock: boolean,
  category: string
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
