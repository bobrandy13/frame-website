import { createUser, getUsers, getFrames } from "../../../prisma/users"

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { users, error } = await getUsers()
      const { user1, error1 } = await getFrames()
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
      const {user ,error} = await createUser(data)
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
