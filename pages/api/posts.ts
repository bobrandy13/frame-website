// Fetch all posts (in /pages/api/posts.ts)
import { prisma } from "@prisma/client"
import {NextApiRequest, NextApiResponse} from "next"
import {getProducts, createProduct} from "../../prisma/users"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const { products, error } = await getProducts()
      if (error) throw new Error(error, "it fialed")
      return res.status(200).json({ products })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  if (req.method === 'POST') {
    try {
      const data = req.body
      const { product, error } = await createProduct(data)
      if (error) throw new Error(error, "failed")
      return res.status(200).json({ product })
    } catch (error: any) {
      return res.status(500).json({ error: error.message, message: "you suck" })
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
