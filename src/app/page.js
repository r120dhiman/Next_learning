import Link from "next/link"
import './globals.css'
export default function Home(){
    return(<><div className="flex flex-row gap-5 justify-center align-middle items-center">
   <Link href='/blog'> <button> Click me to go to blog site</button></Link>
   <Link href='/product'> <button> Products</button></Link>
   <Link href='/login'> <button> Login</button></Link>
   <Link href='/order-product'> <button> Order here</button></Link></div> 
        <h1 className="text-2xl fonr-extrabold"> Welcome to my first website </h1></>
    )
}