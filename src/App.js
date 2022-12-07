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
import ReviewCommID from './components/ReviewCommentID';



function App() {
  // States

  // Render
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="/:review_id" element={<Review />} />
        <Route path="/:review_id/comments" element={<ReviewCommID />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
