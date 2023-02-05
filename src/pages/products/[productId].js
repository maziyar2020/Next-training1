import axios from "axios";

const Product = ({ product }) => {


    return (
        <>
            <h4>Product title</h4>
            <p>
                {product.title} 
            </p>
            <br />
            <h4>Product price</h4>
            <p>
                {product.price}
            </p>
            
        </>
    );
}

export default Product;

export async function getStaticPaths() {
    const { data } = await axios.get(`http://localhost:4000/products`)

    return {
        paths: [
            {
                params: { productId: '1' }
            }
        ],
        fallback: true
    }
}


export async function getStaticProps({ params }) {
    const { data } = await axios.get(`http://localhost:4000/products/${params.productId}`)

    return {
        props: {
            product: data
        },
        revalidate : 10
    }
}