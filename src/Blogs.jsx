import React from 'react';
import './Blogs.css';
import { Link } from 'react-router-dom';

function Blogs() {
  return (
    <>
      <div className="navbar">
        <div className='nav-logo'>
          <img src="/img/logo.png" alt="my logo" />
        </div>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Blogs">Blogs</Link></li>
            <li><Link to="/Create">Create</Link></li>
          </ul>
        </div>
      </div>
      <div className='Blogs-image'>
        <img src="./img/nirmal.jpg" alt="Blog image" />
        <h1>title</h1>
        <h2>Subtitle</h2>
        <h3>Description</h3>
      </div>
    </>
  );
}

export default Blogs;
