import {
  BoxOne,
  HeroDiv,
  HeroImages,
  HeroTitle,
  Image,
  Subtitle,
  Title,
  BoxTwo,
  BoxThree,
  BoxFour,
} from './styles';

export const Hero = () => {
  return (
    <HeroDiv>
      <HeroTitle>
        <Title>
          O Mundo Fascinante dos Gatos: Descubra Tudo Sobre Nossos Amigos
          Felinos
        </Title>
        <Subtitle>
          Explore curiosidades, raças, cuidados e histórias incríveis de gatos
          ao redor do mundo. Sua nova fonte de conhecimento felino está aqui!
        </Subtitle>
      </HeroTitle>

      <HeroImages>
        <BoxOne>
          <Image alt="gato" src="/public/catOne.png" />
        </BoxOne>
        <BoxTwo>
          <Image alt="gato" src="/public/catTwo.png" />
        </BoxTwo>
        <BoxThree>
          <Image alt="gato" src="/public/catThree.png" />
        </BoxThree>
        <BoxFour>
          <Image alt="gato" src="/public/catFour.png" />
        </BoxFour>
      </HeroImages>
    </HeroDiv>
  );
};
