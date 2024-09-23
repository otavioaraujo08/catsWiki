import styled from 'styled-components';

export const RouterDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: auto;
  max-width: 100vw;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 4rem;
  padding-right: 4rem;
  background: #000000;
  color: #ffffff;
  height: 6rem;
  border-bottom: 0.3rem solid #ffb703;

  @media (max-width: 500px) {
    padding-left: 1rem;
    padding-right: 0;
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  max-height: 10rem;

  @media (max-width: 500px) {
    gap: 2rem;
  }
`;

export const Image = styled.img`
  width: fit-content;
  height: 6rem;

  @media (max-width: 500px) {
    height: 5rem;
  }
`;

export const Title = styled.h1`
  font-family: 'Protest Guerrilla', sans-serif;
  font-size: 1.6rem;
  color: #ffffff;
  letter-spacing: 0.4rem;
  font-weight: 400;
  font-style: normal;
  @media (max-width: 900px) {
    font-size: 1.4rem;
  }
  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const ItemsDiv = styled.ul`
  display: flex;
  gap: 3rem;
`;

export const ItemsTitle = styled.h4`
  font-family: 'Noto Serif JP', serif;
  font-size: 1.2rem;
  color: #ffffff;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #c4c4c4;
    text-decoration: underline solid #ffb703;
    text-underline-offset: 0.5rem;
  }

  @media (max-width: 1000px) {
    font-size: 1rem;
  }
  @media (max-width: 800px) {
    font-size: 0.7rem;
  }
  @media (max-width: 600px) {
    content-visibility: hidden;
  }
`;
