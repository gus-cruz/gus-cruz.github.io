import React from 'react';

import { ItSelf } from './style';

interface CursorProps {
  className: string
}

const Cursor: React.FC<CursorProps> = ({className}) => {
  return (
    <ItSelf className={className}/>
  );
}

export function cursorCore(e: React.MouseEvent<HTMLDivElement>){
  const cursor = document.querySelector('.cursor');

  cursor?.setAttribute("style", `top: ${e.pageY - 3.5}px; left: ${e.pageX - 3.5}px`)
}

export default Cursor;