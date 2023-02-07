import axios from "axios";

const BlogList = ({ blogs, category }) => {
    return (
        <div className="blog__list">
            <h1>Blog Detail page for category = {category}</h1>
            <div className="blog__data">
                {blogs.map(blog =>
                    <div className="blog__data" key={blog.id}>
                        <h2>Title : {blog.title} </h2>
                        <p>Description : {blog.description} </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BlogList;

export async function getServerSideProps({ params , query }) {
    const { category } = params
    const { data } = await axios.get(`http://localhost:4000/blogs?category=${category}`)
    console.log(query);
    return {
        props: {
            category,
            blogs: data
        }
    }
}