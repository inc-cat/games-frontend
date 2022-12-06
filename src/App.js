// Utilities
import './utils/App.css'; import {
  BrowserRouter, Route, Link, Routes, Outlet, NavLink, useParams, useNavigate
} from "react-router-dom";
import { useState } from 'react'

// Components
import AllReviews from './components/AllReviews';
import { allReviews } from "./components/api";
import Reviews from './components/AllReviews';
import Review from './components/IndividualReviews';



function App() {
  // States
  const [review, setReview] = useState({})


  // Render
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Reviews allReviews={Reviews} />} />
        </Route>
        <Route path="reviews" element={<Review category={review} />}>
          <Route path=":review_id" element={<Review category={review} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
