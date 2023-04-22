import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/authContext.js';
import "./single.css"

const Single = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingError, setBookingError] = useState("");

  const location = useLocation();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);

        setPost(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [postId]);

  const handleBooking = (postId) => {
    setBookingDate(new Date().toISOString().split('T')[0]);
    setBookingError("");
  };

  const handleSubmit = async (e, postId) => {
    e.preventDefault();
    try {
      const isoDate = new Date(bookingDate).toISOString().split('T')[0]; // convert to ISO format
      const res = await axios.post(`/posts/bookings`, {
        post_id: postId,
        user_id: currentUser.id,
        date: isoDate // use the converted date
      });
      alert("Property booked successfully!");
    } catch (err) {
      console.log(err);
      alert("An error occurred while booking the property.");
    }
  };

  return (
    <div className="single">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="content">
          <img src={post?.img} alt="House" />
          <div className="user">
            {post.userImg && <img src={post.userImg} />}
            <div className="info">
              <span>{post.username}</span>
              <p></p>
            </div>
          </div>
          <h1 className="title">{post?.title}</h1>
          <p className="desc">{post?.desc}</p>
          <p className="rooms">Number of Rooms: {post?.rooms}</p>
          <p className="rent">Rent: {post?.rent}</p>
          <p className="street">Street: {post?.street}</p>
          <p className="City">City: {post?.City}</p>
          <button className="book-now-btn" onClick={() => handleBooking(postId)}>Book Now</button>
          {bookingDate && (
            <form onSubmit={(e) => handleSubmit(e, postId)}>
              <label htmlFor="date">Booking Date:</label>
              <input type="date" id="date" name="date" value={bookingDate} disabled />
              <button className="book-now-btn" type="submit">Confirm Booking</button>
              {bookingError && <p className="error">{bookingError}</p>}
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Single;
