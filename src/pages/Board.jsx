import React from 'react';

import Boards from 'src/components/Boards';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

function Board() {
  return (
    <>
      <Header />
      <Boards />
      <Footer />
    </>
  );
}

export default Board;
