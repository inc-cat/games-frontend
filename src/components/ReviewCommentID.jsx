// Utils
import { individualCommentID } from "./api"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ReviewCommID () {
    const { review_id } = useParams()
    const [comments, setComments] = useState([])
    const [errorHandle, setErrorHandle] = useState(false)

    useEffect(function () {
        individualCommentID(review_id)
        .then(function (data) {
            setComments(data.comments)
            console.log(data)
        }).catch(function (err) {
            if (err.response.status === 400) {
                setErrorHandle(true)
            }
        })
    }, [review_id])

    if (errorHandle) {
        return <h1>400</h1>
    }

    console.log(comments)

    return (<ul className="comment-container">
        {comments.map(function (comment) {
            return (
                <li>
                <h3>{comment.comment_id}</h3>
                <h4>{comment.body}</h4>
                <p>{comment.author}</p>
                </li>
            )
        })}
    </ul>)
}