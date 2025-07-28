import React from 'react';

const TechStack = () => {
  return (
    <>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
        <TechBadge badgeURL="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
        <TechBadge badgeURL="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
        <TechBadge badgeURL="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
        <TechBadge badgeURL="https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
        <TechBadge badgeURL="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
        <TechBadge badgeURL="https://img.shields.io/badge/REST_APIs-000000?style=for-the-badge&logo=rest&logoColor=white" />
        <TechBadge badgeURL="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
        <TechBadge badgeURL="https://img.shields.io/badge/Agile-00968F?style=for-the-badge&logo=agile&logoColor=white" />
        <TechBadge badgeURL="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white" />
        <TechBadge badgeURL="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
        <TechBadge badgeURL="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
        <TechBadge badgeURL="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
        <TechBadge badgeURL="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
        <TechBadge badgeURL="https://img.shields.io/badge/BigQuery-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white" />
        <TechBadge badgeURL="https://img.shields.io/badge/Bitbucket-0052CC?style=for-the-badge&logo=bitbucket&logoColor=white" />
        <TechBadge badgeURL="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
    </div>
    </>
  );
};

const TechBadge = ({ badgeURL }) => {
  return (
    <div style={{ margin: '5px', textAlign: 'center' }}>
      <img src={badgeURL} alt="Tech" height="40" style={{ marginRight: '5px' }} />
    </div>
  );
};

export default TechStack;
