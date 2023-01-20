import {NextApiRequest, NextApiResponse} from "next";

export default async function(req: NextApiRequest, res:NextApiResponse) {
    // it should NOT be a react component
    
    console.log("REQUEST BODY", req.body)

    res.json({ num: Math.floor(Math.random() * 10) })
} 
