export default function Docs({params}){
    if (params.slug?.length==2){
        return (<>
        <h1> You are viewing docs for feature {params.slug[0]} and concept for {params.slug[1]} </h1>
        </>) }
        else if (params.slug?.length==1){
            return (<>
            <h1> You are viewing docs for feature {params.slug[0]} </h1>
            </>)}
   
    return  (
        <>
        <h1> Docs</h1>
        </>
    )
}