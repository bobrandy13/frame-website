import { getProducts, createProduct} from "../../../prisma/users"

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { user1, error1 } = await getProducts()
      console.log("user1", user1)
      if (error) throw new Error(error)
      return res.status(200).json({ user1 })
    } catch(err) {
      return (res.status(500).json({error:err.message}))
    }
  }
  if (req.method === "POST") {
    try {
      const data = req.body 
      const {user ,error} = await createProduct(data)
      if (error) throw new Error(error)
      return res.status(200).json({user})
    } catch(error){
      return res.status(500).json({error:error.message})
    }
  }

  res.setHeader("Allow", ["GET", "POST"])
  res.status(425).end("Method is not allwoed")
}
export default handler
