import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import * as THREE from 'three';
import Navbar from '@/components/Navbar';
import TechStack from '@/components/Techstack';
import CoffeeSnobsProject from '@/components/Projects';
import Contact from '@/components/Contact';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Montserrat", sans-serif;
    position: absolute;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Use vh for full viewport height */
  position: relative;
  width: 80%;
  margin: 0 auto; /* Center the section horizontally */
  padding: 70px; /* Add padding */
  margin-top: -55px;
  margin-bottom: -100px;
  margin-left: -10px;
`;

const Content = styled.div`
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  text-align: center; /* Center text inside Content */
  max-width: 600px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9); /* Adjust the alpha value (0 to 1) for desired transparency */
  z-index: 1;
  margin-top: 0px;
`;


const Welcome = styled.h1`
  font-size: 40px;
  color: black;
  margin-bottom: 10px;
`;

const Name = styled.h1`
  font-size: 40px;
  color: black;
  margin-bottom: 10px;
`;

const Header = styled.h1`
  font-size: 40px;
  color: black;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 22px;
  line-height: 1.6;
  margin-bottom: 0px;
  display: block;
`;

const ContactInfo = styled.div`
  font-size: 16px;
  margin-top: 20px;
  color: #333;
`;

const ProjectLink = styled.a`
  color: #f95d9b;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ThreeCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

const ThreeAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.TorusGeometry(8, 2, 16, 100);
    const material = new THREE.MeshStandardMaterial({ color: 0x203f5f });
    const torus = new THREE.Mesh(geometry, material);

    scene.add(torus);

    camera.position.setZ(30);

    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(5, 5, 5);
    pointLight.distance = 50; 
    pointLight.castShadow = true; 

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    const addStar = () => {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100)); 

      star.position.set(x, y, z);
      scene.add(star);
    };

    Array(200).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('stars2.jpg');
scene.background = spaceTexture;

const inbarTexture = new THREE.TextureLoader().load('inbar1.jpg');

const inbar = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: inbarTexture }));

scene.add(inbar);

inbar.position.z = -5;
inbar.position.x = 2;


    function moveCamera() {
      const t = document.body.getBoundingClientRect().top;
      torus.rotation.x += 0.05;
      torus.rotation.y += 0.075;
      torus.rotation.z += 0.05;
    
      inbar.rotation.y += 0.01;
      inbar.rotation.z += 0.01;
    
      camera.position.z = t * -0.01;
      camera.position.x = t * -0.0002;
      camera.rotation.y = t * -0.0002;
    }
    
    document.body.onscroll = moveCamera;
    moveCamera();

    const animate = () => {
      requestAnimationFrame(animate);

      torus.rotation.x += 0.001;
      torus.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      scene.remove(torus);
      geometry.dispose();
      material.dispose();
      renderer.dispose();

      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default function Home() {
  return (
    <main>
      <GlobalStyle />
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/i.ico" />
      </Head>
      <Navbar />
      <ThreeAnimation />
      <Container id="home">
        <Content> 
          <Welcome>WELCOME</Welcome>
          <Name> I'm Inbar Gluska </Name>
          <Header> a Full-Stack Web Developer</Header>
       </Content>
      </Container> 
      <Container id="about">
        <Content>
          <Header>About Me</Header>
          <Paragraph>
          I'm a dedicated Full Stack Web Developer with a foundation in React.js that I use as a base to learn new technologies and approaches.
          </Paragraph>
          <Paragraph>
          🎓 I graduated from a comprehensive web development bootcamp at Spiced Academy in Berlin, August 2023. Before that I finished a Bachelor's Degree in Political Science from Tel Aviv University (2021) and a Yoga Teacher course.
          </Paragraph>
          <Paragraph>
          💼 Currently, I work as a freelance Full Stack Web Developer at MieterEngel, building production-ready features with React, TypeScript, SCSS and PostgreSQL. In addition, I completed a data engineering internship focused on SQL-based data pipelines and analytics. With hands-on experience across both frontend development and data infrastructure, I'm eager to keep growing and contributing to meaningful tech projects.
          </Paragraph>
          <Paragraph>
          ☕ I love coffee. A lot.
          </Paragraph>
        </Content>
      </Container>
      <Container id="tech-stack">
        <Content>
          <Header>Tech Stack</Header>
<TechStack />
        </Content>
      </Container>
       <Container id="projects">
        <Content>
          <Header>
          Check out my recent project
          </Header>
          <CoffeeSnobsProject/>
        </Content>
      </Container>
      <Container id="contact">
        <Content>
          <Header>Contact Me</Header>
         <Contact />
        </Content>
      </Container>
    </main>
  );
};