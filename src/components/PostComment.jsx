import { postCommentToReview } from "./api"
import { useRef } from 'react';
import { useParams } from "react-router-dom";

export default function PostComment (props) {
    const commentAuthorRef = useRef()
    const commentBodyRef = useRef()
    
    const { review_id } = useParams()

    function handleSubmit(event) {
        event.preventDefault()
        const authorz = commentAuthorRef.current.value
        const body = commentBodyRef.current.value

        if (!authorz || !body) {
            return
        }
        const inputObj = {username: authorz, body: body}
        console.log(review_id)
        postCommentToReview(review_id, inputObj)
         
    }



    return (<form onSubmit={handleSubmit}>
  <label>Author: </label>
  <input ref={commentAuthorRef} type="text" id="author" name="author" />
  <label>Comment: </label>
  <input ref={commentBodyRef} type="text" id="comment" name="comment" />
  <input type="submit" value="Submit" />
</form> )
}