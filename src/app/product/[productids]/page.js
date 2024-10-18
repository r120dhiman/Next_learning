export const generateMetadata = async ({ params }) => {
    const title= await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`iPhone  ${params.productids}`)
        }, 1000);
    })
    return {
        title: `Product ${title}`,
    };
}

export default function ProductDetails({ params }) {
    return (
        <>
            <h1>Welcome to Dhiman Electronic Space</h1>
            <h2>Here are your product details</h2>
            <p>Product details: {params.productids}</p>
        </>
    );
}
