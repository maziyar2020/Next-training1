import axios from "axios";

const ProductList = ({ products }) => {
    return (
        <div>
            <h1>products list page</h1>
            <div>
                {products.map(product => <h2 key={product.id}>
                    title : {product.title} - price {product.price}
                </h2>
                )}
            </div>
        </div>
    );
}

export default ProductList;

export async function getStaticProps() {
    const { data } = await axios.get('http://localhost:4000/products')

    return {
        props: {
            products: data
        }
    }
}