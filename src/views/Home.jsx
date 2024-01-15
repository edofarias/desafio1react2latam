// Home.jsx
import React from 'react';
import happyImage from '../assets/happy.jpg';
import '../App.css';  // Archivo CSS para estilos específicos de Home

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenidos a Happy Cake</h1>
      <h4>El lugar de los pasteles felices</h4>
      <img src={happyImage} alt="Pastel Feliz" />
    </div>
  );
};

export default Home;
