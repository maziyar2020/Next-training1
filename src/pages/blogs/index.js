import axios from "axios";


const BlogList = ({ blogs }) => {
    return (
        <div className="blog">
            <h5 className="blog__header">Blog Header</h5>
            <div className="blog__card">
                {blogs.map(blog => {
                    return <div key={blog.id}>
                        <h2> Title : {blog.title}</h2>
                        <h3> category : {blog.category}</h3>
                    </div>
                })}
            </div>
        </div>
    );
}

export default BlogList;


export async function getServerSideProps({ }) {
    const { data } = await axios.get('http://localhost:4000/blogs')

    return {
        props: {
            blogs: data
        }
    }
}