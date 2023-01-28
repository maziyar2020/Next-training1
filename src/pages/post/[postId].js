const { useRouter } = require("next/router")

const Post = () => {
    const router = useRouter()
    
    const {postId} = router.query

    return <div>slm - {postId} </div>
}

export default Post;