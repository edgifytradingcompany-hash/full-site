import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req){

 const { items } = await req.json();

 const session = await stripe.checkout.sessions.create({
  payment_method_types:["card"],
  line_items:items,
  mode:"payment",
  success_url:"/success",
  cancel_url:"/cart"
 });

 return Response.json({url:session.url});
}
