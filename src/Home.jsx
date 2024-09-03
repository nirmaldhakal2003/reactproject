import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
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
      <h1>Home</h1>
      <div className="cards">
        <div className='card1'>
          <img src="/img/nirmal.jpg" alt="" />
          <Link to="/Blogs"><h1>Nirmal Dhakal</h1></Link>
        </div>
        <div className='card2'>
          <img src="/img/nirmal.jpg" alt="" />
          <Link to="/Blogs"><h1>Nirmal Dhakal</h1></Link>
        </div>
        <div className='card3'>
          <img src="/img/nirmal.jpg" alt="" />  
          <Link to="/Blogs"><h1>Nirmal Dhakal</h1></Link>
        </div>
      </div>
      </>
  );
}

export default Home;
