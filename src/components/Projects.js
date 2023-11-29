import React from 'react';

const CoffeeSnobsProject = () => {
  const coffeeSnobsLink = 'https://coffee-snobs-coral.vercel.app/';

  return (
    <>
      <p>
        I've curated the ultimate guide to Berlin's top-notch coffee spots in my Coffee Snobs website.
        Explore and discover the best places to indulge in exquisite coffee flavors.
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
