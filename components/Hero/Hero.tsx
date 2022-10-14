import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  justify-content: flex-start;
  justify-items: flex-start;
  gap: 4rem;
  max-width: 565px;
  .hero {
    &_title {
      color: #f2f2f2;
      font-size: 3.2rem;
      line-height: 1.25;
      font-weight: 700;
    }
    &_subtitle {
      color: #00c0ec;
      font-size: 2.4rem;
      line-height: 1.25;
    }
    &_list {
      display: grid;
      gap: 0.7rem;
      color: #f2f2f2;
      line-height: 2;
      font-size: 1.8rem;
      padding-left: 4rem;
    }
  }
`;

const Hero = ({ heroComponent }: any) => {
  return (
    <Wrapper>
      <Image
        src={heroComponent.image.asset.url}
        width={96}
        height={90}
        className='hero_logo'
        alt='LOGO'
        objectFit='contain'
      />
      <h1 className='hero_title'>{heroComponent.title}</h1>
      <p className='hero_subtitle'>{heroComponent.paragraph}</p>
      <ul className='hero_list'>
        {heroComponent.list.map((item: any, index: number) => (
          <li key={index} className='hero_list_item'>
            {item.children[0].text}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Hero;
