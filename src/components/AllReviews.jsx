import { allReviews } from "./api";
import { useState, useEffect } from 'react';

export default function Reviews () {
    const [reviews, setReviews] = useState([]);
    useEffect(function () {
    allReviews().then(function (data) {
      setReviews(data);
    });
  }, []);



    return (<ul className="rev-container">
        {reviews.map(function (revEntry) {
            return (
                <li>
                <h3>{revEntry.title}</h3>
                <h4>{revEntry.designer}</h4>
                <p>Votes: {revEntry.votes}</p>

                <img key="rev-img" src={revEntry.review_img_url} alt={revEntry.title}></img>

                </li>
            )
        })}
    </ul>)
}





