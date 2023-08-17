import { Logo } from "../logo";
import { MenuItem, MenuList, Nav, Wrapper } from "./style";

export const Header = () => {
  return (
    <header>
      <Wrapper>
        <Logo />
        <Nav>
          <MenuList>
            <MenuItem>Inicio</MenuItem>
            <MenuItem>Sobre a Full-life</MenuItem>
            <MenuItem>Contato</MenuItem>
          </MenuList>
        </Nav>
      </Wrapper>
    </header>
  );
};
