import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <div className="card">
        <h2>What is a URL Shortener?</h2>
        <p>
          A URL shortener is a tool that takes a long URL and converts it into a shorter, more manageable link. This shorter link can be easily shared and tracked. 
          URL shorteners are widely used in social media, marketing campaigns, and other platforms where space is limited.
        </p>
      </div>

      <div className="card">
        <h2>Performance</h2>
        <p>
          Our URL shortener service ensures quick and reliable redirection to the original URL. 
          We use advanced algorithms to ensure that the shortened URLs are unique and cannot be guessed, providing a secure and efficient way to manage your links.
        </p>
      </div>

      <div className="card">
        <h2>Credentials</h2>
        <p>
          We prioritize the security and privacy of our users. Our service is built with robust security measures to protect your data. 
          Only authorized users can create, view, and manage their shortened URLs. We also provide detailed analytics for each shortened URL to help you track its performance.
        </p>
      </div>
    </div>
  );
};

export default Home;
