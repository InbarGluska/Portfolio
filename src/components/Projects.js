import React from 'react';

const CoffeeSnobsProject = () => {
  const coffeeSnobsLink = 'https://coffee-snobs-coral.vercel.app/';

  return (
    <>
      <p style={{ fontSize: '20px', marginBottom: '10px' }}>
        Because I'm such a coffee snob, I've curated the ultimate guide to Berlin's top-notch coffee spots in my Coffee Snobs website.
      </p>
      <p style={{ fontSize: '20px', marginBottom: '10px' }}>
        Check it out if you want to indulge in some fine coffee.
      </p>
      <a href={coffeeSnobsLink} target="_blank" rel="noopener noreferrer">
        <img
          src="https://img.shields.io/badge/Coffee_Snobs-Visit_Website-7A4C31?style=for-the-badge&logo=coffee&logoColor=white"
          alt="Coffee Snobs Project"
          height="40"
          style={{ marginRight: '10px' }}
        />
      </a>
    </>
  );
};

export default CoffeeSnobsProject;


