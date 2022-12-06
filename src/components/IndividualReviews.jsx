import { individualReview } from "./api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Review (props) {
    let { review_id } = useParams()
    const [reviewLook, setReviewLook] = useState([])
    useEffect(function () {
        individualReview(review_id)
        .then(function (data) {
            setReviewLook(data)
            console.log(data)
        }).catch((err) => {
        console.log(err.response.status);
        if (err.response.status === 400) {
          return (
            <body>
              <p>400!</p>
            </body>
          );
        }
      });
  }, [setReviewLook]);

  
  console.log(reviewLook)
  return (
  <div>
    <p>{reviewLook.review_id}</p>
    <h1>{reviewLook.title}</h1>
    <p>{reviewLook.review_body}</p>
    <img src={reviewLook.review_img_url}></img>
    <p>{reviewLook.designer}</p>
  </div>
  )

}