import {NextApiRequest, NextApiResponse} from "next";
import {getUniqueProducts} from "@/prisma/users";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {

    const { pid } = req.query

    try {
        if (typeof(pid) === 'string') {
            const { product, error } = await getUniqueProducts(pid)
            console.log(product)
            if (error) throw new Error(" it failed "); 
            return res.status(200).json(product)
        }
    } catch (error: any) {
        return res.status(500).json({ error: error.message})
    }
}
