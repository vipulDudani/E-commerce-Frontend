import React from 'react';
import {useState,useEffect} from 'react';
import './App.css';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Food from './Food';


const NavBar = () => {
  

  return (

    <div style={{display:'flex',padding:'10px'}}>

      <NavLink to='/'>
      <p style={{cursor:'pointer',padding:'10px'}}>Home</p>
      </NavLink>

      <NavLink to='/cart'>
      <p style={{cursor:'pointer', padding:'10px'}}>Cart</p>
      </NavLink>

    </div>
    
    

  );
};

export default NavBar;
