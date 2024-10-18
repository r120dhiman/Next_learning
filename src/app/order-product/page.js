"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function OrderProduct(){
const router=useRouter();
const [orderplaced, setorderplaced] = useState(false)
const orderhandle=async () => {
setorderplaced(true)
  setTimeout(() => {
    router.push("/")
  }, 5000);
}

    return(<>
    <div className={` ${orderplaced ? "hidden" : "block"}`}>
    <h1 className= "bg-slate-50 border-2 rounded-2xl">Order Yout product</h1>
    <button onClick={orderhandle} className="bg-slate-100 m-10 p-3"> Place order</button></div>
    <div  className={` ${orderplaced ? "flex" : "hidden"} w-[100vw] h-[100vh]  justify-center align-middle`}>
        <h1 className="font-extrabold text-[30px"> Order Placed . Redirecting you to Home page</h1>
    </div>
    </>)
}