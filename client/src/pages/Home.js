import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { search } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/posts${search}`);
        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [search]);
  

  return (
    <div className='home'>
      <center><h1 style={{ color: 'rgb(125, 243, 125)'}}>Unlock your Dream Home with US</h1></center>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='posts'>
          {posts.map((post) => (
            <div className='post' key={post.id}>
              <div className='img'>
                <img src={post.img} alt={post.title} />
              </div>
              <div className='content'>
                <Link className='link' to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                  <p>{post.desc}</p>
                  <button>View Property</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
