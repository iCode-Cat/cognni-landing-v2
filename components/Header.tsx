import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  max-width: 1240px;
  margin: 0 auto;
  padding: 4rem 2rem 0 2rem;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Image
        src='https://lps.cognni.ai/hs-fs/hubfs/Cognni-Logo-White.png?width=300&name=Cognni-Logo-White.pngz'
        width='200'
        height='46'
        alt='Cognni Logo'
      />
    </HeaderStyle>
  );
};

export default Header;
