import { postCommentToReview } from "./api"
import { useEffect, useRef, useState } from 'react';
import { useParams } from "react-router-dom";

export default function PostComment (props) {
    const commentAuthorRef = useRef()
    const commentBodyRef = useRef()

    
    const { review_id } = useParams()
    const [correct, setCorrect] = useState(true)
    const [pass, setPass] = useState(true)
    



    function handleSubmit(event) {
        event.preventDefault()
        const authorz = commentAuthorRef.current.value
        const body = commentBodyRef.current.value

        if (!authorz || !body) {
            setCorrect(false)
            return
        }
        const inputObj = {username: authorz, body: body}
        console.log(review_id)
        postCommentToReview(review_id, inputObj)
        .then(function () {
            props.setCommentCount(function(current) {
                return current + 1              
            })
        })
        
        commentAuthorRef.current.value = ''
        commentBodyRef.current.value = ''
        setPass(false)
    }



  return (<form onSubmit={handleSubmit}>
  <label>Author: </label>
  <input ref={commentAuthorRef} type="text" id="author" name="author" />
  <label>Comment: </label>
  <input ref={commentBodyRef} type="text" id="comment" name="comment" />
  <input type="submit" value="Submit" />
  <p hidden={correct}>Please fill correctly.</p>
  <p hidden={pass}>Success</p>
</form> )
}