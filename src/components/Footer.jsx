import React from 'react';
import { SFooter, SFooterA } from 'src/styles/Footer.styled';

function Footer() {
  return (
    <SFooter>
      Copyright © 2023{' '}
      <SFooterA
        href="https://github.com/WeepingHeron/HangHae99_Bamboo"
        target="_blank"
        rel="noreferrer"
      >
        Hanghae99 Team Bamboo
      </SFooterA>{' '}
      All rights reserved.
    </SFooter>
  );
}

export default Footer;
