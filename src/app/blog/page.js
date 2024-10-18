import Link from "next/link"
export const metadata={
    title:'Blog'
}
export default function Blog(){
    return(<>

<Link href='/'> <button> Home</button></Link>
        <h1 className="text-red-200">Blog pagec</h1></>
    )
}