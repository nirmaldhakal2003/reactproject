import React from 'react';
import './Create.css';
import { Link } from 'react-router-dom';

function Create(){
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
      <div><h1>Create Blog</h1></div>
      <div className='form'>
       <form action="">
        <label htmlFor="Title">Title :</label>
        <input type="text" placeholder='Enter Title'/><br />
        <label htmlFor="Subtitle">Subtitle :</label>
        <input type="text" placeholder='Enter Subtitle'/><br />
        <label htmlFor="Description">Description :</label>
        <input type="text" placeholder='Enter Subtitle'/><br />
        <label htmlFor="Image">Image :</label>
        <input type="file"/><br />

        <button>Submit</button>

       </form>
      </div>
    </>
  );
}

export default Create;
