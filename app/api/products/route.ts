import { supabase } from "../../../lib/supabase"

export async function POST(req:Request){

 const body = await req.json()

 const {data,error} = await supabase
  .from("products")
  .insert(body)

 return Response.json({data,error})

}
