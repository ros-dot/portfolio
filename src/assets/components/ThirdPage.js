import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>My Services</h3>
      </header>
      <section className="services">
        <div className="service">
          <h2>UI/UX Design</h2>
          <p>Create a user-friendly and visually appealing interface for your product.</p>
        </div>
        <div className="service">
          <h2>Product Design</h2>
          <p>Design and develop your product from concept to launch.</p>
        </div>
        <div className="service">
          <h2>Branding Design</h2>
          <p>Develop a strong brand identity that resonates with your target audience.</p>
        </div>
        <div className="service">
          <h2>Front-End Development</h2>
          <p>Bring your designs to life with clean and efficient front-end code.</p>
        </div>
      </section>
      <button className="contact-button">Discuss Now</button>
    </div>
  );
}

export default App;
