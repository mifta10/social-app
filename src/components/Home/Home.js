import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css'
import home from '../../assets/img-home.jpg'

const Home = () => {
  return (
    <div className="bg">
      <Navbar></Navbar>
      <img src={home} alt=""/>
    </div>
  );
};

export default Home;