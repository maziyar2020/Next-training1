import { useRouter } from "next/router";

const Review = () => {

    const router = useRouter()
    const { reviewId, postId } = router.query

    return (
        <div>
            <div>slm id man {reviewId}</div>
            <br />
            <div>slm postId man {postId}</div>
        </div>

    );
}

export default Review;