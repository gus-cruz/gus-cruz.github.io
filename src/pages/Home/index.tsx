import React from 'react';

import Fire from '../../assets/delete-me.png';

import Cursor, { cursorCore } from '../../components/Cursor';

import {
  Container
} from './style';

const Home: React.FC = () => {
  const cursor = document.querySelector('.cursor');

  return (
    <Container onMouseMove={e => cursorCore(e)}>
      <Cursor className="cursor"/>
      {/* let's gooo! 🔥 */}
      <img className="fire" src={Fire} />
      <p>GUS TEMPLATE</p>
    </Container>
  );
}

export default Home;