import Link from "next/link"
export default function Product(params){
    const productId=100;
    return (<>
        <Link href='/product/1'><h1> Product 1</h1></Link>
        <Link href='/product/2'><h1> Product2</h1></Link>
        <Link href='/product/3' target="blank" replace><h1> Product 3</h1></Link>
        <Link href={`product/${productId}`} ><h1> Product {productId}</h1></Link>
        
<Link href='/'> <button> Home</button></Link></>
    )
}