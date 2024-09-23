import { Outlet } from 'react-router-dom';
import {
  HeaderDiv,
  Image,
  ItemsDiv,
  ItemsTitle,
  LogoDiv,
  RouterDiv,
  Title,
} from './styles';

export const Header = () => {
  return (
    <RouterDiv>
      <HeaderDiv>
        <LogoDiv>
          <Image src="/catWikiLogo.webp" alt="Cat Logo" />
          <Title className="headerTitle">Cats Wiki</Title>
        </LogoDiv>

        <ItemsDiv>
          <ItemsTitle>Curiosidades</ItemsTitle>
          <ItemsTitle>Dicas</ItemsTitle>
          <ItemsTitle>Raças</ItemsTitle>
        </ItemsDiv>
      </HeaderDiv>

      <Outlet />
    </RouterDiv>
  );
};
