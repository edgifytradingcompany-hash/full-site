export default function SellPage(){

 return (
  <div className="p-10">

   <h1 className="text-3xl mb-6">Sell on Edgify</h1>

   <form className="flex flex-col gap-4 max-w-md">

    <input placeholder="Product Name"/>

    <input placeholder="Price"/>

    <textarea placeholder="Description"/>

    <button className="bg-black text-white p-2">
     Upload Product
    </button>

   </form>

  </div>
 )
}
