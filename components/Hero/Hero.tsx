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
    }
    &_subtitle {
      color: #00c0ec;
      font-size: 2.4rem;
      line-height: 1.25;
    }
    &_list {
      display: grid;
      gap: 1.6rem;
      color: #f2f2f2;
      line-height: 2;
      font-size: 1.8rem;
    }
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <Image
        src='https://lps.cognni.ai/hs-fs/hubfs/Walkthrough-Demo-1.png?width=144&height=135&name=Walkthrough-Demo-1.png'
        width={144}
        height={135}
        className='hero_logo'
        alt='LOGO'
      />
      <h1 className='hero_title'>
        See and understand how to autonomously mitigate information risks.
      </h1>
      <p className='hero_subtitle'>
        Schedule a walkthrough demo of our award-winning platform. In this
        30-minute demo we will cover:
      </p>
      <ul className='hero_list'>
        <li className='hero_list_item'>Our platform's zero-touch approach</li>
        <li className='hero_list_item'>
          Autonomously classify your information
        </li>
        <li className='hero_list_item'>
          Executive dashboards for your stakeholders
        </li>
        <li className='hero_list_item'>
          How to be in complete control of the MIP automation
        </li>
      </ul>
    </Wrapper>
  );
};

export default Hero;
