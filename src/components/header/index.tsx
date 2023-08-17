import { Logo } from "../logo";
import { Menu } from "./menu-list";
import { MenuItem, MenuList, Nav, Wrapper } from "./style";
import { BiLogoTelegram, BiSolidHome, BiSolidInfoCircle } from "react-icons/bi";

export const Header = () => {
  return (
    <header>
      <Wrapper>
        <Logo />
        <Nav>
          <Menu />
        </Nav>
      </Wrapper>
    </header>
  );
};
