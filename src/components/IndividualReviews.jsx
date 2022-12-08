// Utils
import { individualReview } from "./api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewCommID from "./ReviewCommentID";
import PostComment from "./PostComment";

export default function Review (props) {
    const { review_id } = useParams()
    const [reviewLook, setReviewLook] = useState({})
    const [errorHandle, setErrorHandle] = useState(false)

    useEffect(function () {
        individualReview(review_id)
        .then(function (data) {
            setReviewLook(data)
            console.log(data)
        }).catch(function (err) {
            console.log(err.response.status);
            if (err.response.status === 400) {
                setErrorHandle(true);
            }
        });
  }, [review_id]);

  if (errorHandle) {
    return <body>400!</body>
  }

  
  console.log(reviewLook)
  return (
  <div>
    <p>{reviewLook.review_id}</p>
    <h1>{reviewLook.title}</h1>
    <p>{reviewLook.review_body}</p>
    <img src={reviewLook.review_img_url}></img>
    <p>{reviewLook.designer}</p>

    <ReviewCommID></ReviewCommID>
    <PostComment></PostComment>
  </div>
  )

}