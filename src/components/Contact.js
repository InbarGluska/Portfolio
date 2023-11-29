import React from 'react';

const Contact = () => {
  const email = 'mailto:inbargluska@gmail.com';
  const github = 'https://github.com/InbarGluska';
  const linkedin = 'https://www.linkedin.com/in/inbar-gluska-805501267/';

  return (
    <>
      <div style={{ display: 'flex', gap: '15px' }}>
        <a href={email}>
          <img
            src="https://img.shields.io/badge/Email-Contact_Me-D14836?style=for-the-badge&logo=gmail&logoColor=white"
            alt="Email"
            height="30"
          />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github&logoColor=white"
            alt="GitHub Profile"
            height="30"
          />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/badge/LinkedIn-Profile-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"
            alt="LinkedIn Profile"
            height="30"
          />
        </a>
      </div>
    </>
  );
};

export default Contact;
