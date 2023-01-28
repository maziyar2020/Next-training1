import { useRouter } from "next/router";

const Blog = () => {
    const router = useRouter()
    const {params} = router.query
    return ( 
        <>
            all routes  {JSON.stringify(params)}
        </>

     );
}
 
export default Blog;