import styled from 'styled-components';

export const HeroDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
  width: 100%;
  max-width: 100vw;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

export const HeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  width: 30%;

  @media (max-width: 880px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  color: #000000;
  font-size: 2rem;
  font-weight: 500;
  font-family: 'Noto Serif JP', serif;
  text-align: left;

  @media (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
`;

export const Subtitle = styled.h1`
  color: #4b4b4b;
  font-size: 1.4rem;
  font-weight: 400;
  font-family: 'Noto Serif JP', serif;
  text-align: left;

  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }

  @media (max-width: 900px) {
    font-size: 1.1rem;
  }
`;

export const HeroImages = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BoxImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22rem;
  height: 15rem;
  border-radius: 7%;

  @media (max-width: 1200px) {
    width: 17rem;
    height: 12rem;
  }
`;

export const BoxOne = styled(BoxImages)`
  background: #eecdc6;
`;

export const BoxTwo = styled(BoxImages)`
  background: #cae8f5;
`;

export const BoxThree = styled(BoxImages)`
  background: #9fc8bc;
`;

export const BoxFour = styled(BoxImages)`
  background: #b5b1d7;
`;

export const Image = styled.img`
  width: fit-content;
  height: 15rem;
  max-width: 15rem;

  @media (max-width: 1200px) {
    height: 11rem;
  }
`;
