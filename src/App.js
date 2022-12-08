// Utilities
import './utils/App.css';
import {
  BrowserRouter, Route, Link, Routes, Outlet, NavLink, useParams, useNavigate
} from "react-router-dom";
import { useState } from 'react'

// Components
import Reviews from './components/AllReviews';
import Review from './components/IndividualReviews';
import ReviewCommID from './components/ReviewCommentID';
import PostComment from './components/PostComment';
import Categories from './components/Categories';



function App() {
  // States

  // Render
  return (
    <BrowserRouter>
      {<Categories />}
      <div>
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/review/:review_id" element={<Review />} />
          <Route path="/review/:review_id/comments" element={<ReviewCommID />} />
          <Route path="/review/:review_id/test" element={<PostComment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
