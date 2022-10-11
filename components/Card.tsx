import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.section`
  padding: 2rem 2rem 5.5rem 2rem;
  background: linear-gradient(
    to bottom,
    rgba(9, 37, 67, 1),
    rgba(0, 150, 245, 1)
  ) !important;
  iframe {
    width: 100%;
    height: 800px;
    max-width: 586px;
    max-height: 331px;
    border: none;
  }
`;

const Container = styled.div`
  display: grid;
  justify-items: center;
  gap: 6rem;
  font-size: 3.6rem;
  max-width: 1240px;
  margin: 0 auto;
  .card {
    &_title {
      overflow-wrap: break-word;
      text-align: center;
      color: #f2f2f2;
      line-height: 39.6px;
      font-weight: 700;
    }

    &_media {
      display: grid;
      gap: 6rem;
      justify-items: center;
      @media (min-width: 50em) {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
`;

export const ButtonStyle = styled.button`
  /* background-color: #092543; */
  background: #092543;
  color: #f2f2f2;
  border-radius: 50px;
  font-size: 1.8rem;
  padding: 1.3rem 4.8rem;
  border: none;
  font-weight: 600;
  height: 60px;
`;

const Card = () => {
  return (
    <CardStyle>
      <Container>
        <p className='card_title'>
          Autonomous assessment, recommendations, and mitigation. Cognni saves
          you 100s of hours of work every month.
        </p>

        <div className='card_media'>
          <iframe
            src='https://www.youtube.com/embed/NswTFrGI7ak?feature=oembed'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title="What Cognni does - InfoSec's Only Information Intelligence Platform"
            className='oembed_container_iframe'
          ></iframe>
          <Image
            src='https://lps.cognni.ai/hs-fs/hubfs/Microsoft-Badge-1.png?width=762&name=Microsoft-Badge-1.png'
            width={830}
            height={540}
            alt='Microsoft Badge'
            objectFit='contain'
          />
        </div>
        <ButtonStyle className='card_cta'>Schedule a Demo</ButtonStyle>
      </Container>
    </CardStyle>
  );
};

export default Card;
