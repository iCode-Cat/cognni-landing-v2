import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Card from '../components/Card';
import Header from '../components/Header';
import Hero from '../components/Hero/Hero';
import Submit from '../components/Submit/Submit';
import FooterComp from '../components/Footer';
import client from '../lib/client';
import { CARD_QUERY, HERO_QUERY, PAGE_QUERY } from '../lib/queries';

const Wrapper = styled.section`
  position: relative;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: url('https://lps.cognni.ai/hubfs/Gradient-Background-JUL14-1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  top: -600px;
  z-index: -1;
`;

const Container = styled.section`
  padding: 2rem 2rem 5.5rem 2rem;
  /* min-height: 100vh; */
  max-width: 1240px;
  margin-bottom: 15rem;
  margin: 0 auto;
  @media (min-width: 50em) {
    margin-bottom: 25rem;
  }
`;

const HeroWrapper = styled.section`
  display: grid;
  align-items: center;
  gap: 4rem;
  margin-top: 116px;
  @media (min-width: 56em) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Home: NextPage = ({ sanity, heroComponent, cardComponent }: any) => {
  console.log(sanity);

  return (
    <>
      <Header />
      <main>
        <Wrapper>
          <Head>
            <title>Create Next App</title>
            <meta name='description' content='Generated by create next app' />
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <Background />
          <Container>
            <HeroWrapper>
              <Hero heroComponent={heroComponent} />
              <Submit />
            </HeroWrapper>
          </Container>
          <Card />
        </Wrapper>
        <FooterComp />
      </main>
    </>
  );
};

export async function getServerSideProps() {
  const sanity = (await client.fetch(PAGE_QUERY, { uuid: '1' }))[0];
  const heroComponent = await client.fetch(HERO_QUERY);
  const cardComponent = await client.fetch(CARD_QUERY);

  return {
    props: {
      sanity,
      heroComponent: sanity.heroComponent || heroComponent[0],
      cardComponent: sanity.cardComponent || cardComponent[0],
    },
  };
}

export default Home;
