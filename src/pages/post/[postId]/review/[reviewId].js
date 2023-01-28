import { useRouter } from "next/router";

const Review = () => {

    const router = useRouter()
    const {reviewId , postId} = router.query

    return ( 
        <div>
            slm id man {reviewId}
            slm
        </div>

     );
}
 
export default Review;