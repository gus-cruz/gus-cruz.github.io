import React from 'react';

import Cursor, { cursorCore } from '../../components/Cursor';

import Javascript from '../../assets/javascript.png';
import Me from '../../assets/me.jpg';

import {
  Container, Main
} from './style';

const Home: React.FC = () => {
  
  function avoidCursor(cursor: React.MouseEvent<HTMLDivElement>){
    let x = cursor.clientX * 90 / window.innerWidth + "%";
    let y = cursor.clientY * 90 / window.innerHeight + "%";

    const leftBall = document.querySelector(`.left-circle .circle .ball`);
    leftBall?.setAttribute("style", `top: ${y}; left: ${x}; transform: translate(-${x}, -${y})`);

    const rightBall = document.querySelector(`.right-circle .circle .ball`);
    rightBall?.setAttribute("style", `top: ${y}; left: ${x}; transform: translate(-${x}, -${y})`);
  }

  return (
    <Container onMouseMove={e => {
      cursorCore(e)
      avoidCursor(e)
    }}>
      <Main>
        <div className="glass">
          <div className="dashboard">
            <div className="me">
              <img src={Me} alt="Gus Cruz"/>
              <h3>Gustavo Cruz</h3>
              <p>Web & Mobile Developer</p>
            </div>
            <div className="pages">
              <div className="page">
                <h2>Skills</h2>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="status">
              <h1>My Skills</h1>
            </div>
            <div className="skills">
              <div className="skill">
                <img src={Javascript} alt="javascript"/>
                <div className="skill-info">
                  <h2>Javascript</h2>
                  <p>Advanced</p>
                  <div className="progress"></div>
                </div>
                <div className="percentage"></div>
              </div>
            </div>
          </div>
        </div>
      </Main>

      <div className="left-circle">
        <div className="circle">
          <div className="ball"></div>
        </div>
      </div>
      <div className="right-circle">
        <div className="circle">
          <div className="ball"></div>
        </div>
      </div>
      <Cursor className="cursor"/>
    </Container>
  );
}

export default Home;