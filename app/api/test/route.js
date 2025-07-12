import connectDB from "@/db/connectDB";

export async function GET(){
  await connectDB()
  return Response.json({message : "Connected"})
}



