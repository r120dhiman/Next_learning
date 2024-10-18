import { notFound } from "next/navigation"
export default function ProductDetails({params}){
    if(parseInt(params.reviewsid)>100){
        notFound()
    }
    return <>
    <h1> Review {params.reviewsid} for product {params.productids} </h1>
    </>
}