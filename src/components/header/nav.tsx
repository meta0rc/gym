"use client";

import { Logo } from "../logo";
import * as S from "./style";

export const Nav = () => {
  return (
    <S.Wrapper>
      <Logo />
      <S.Nav>
        <S.MenuList>
          <S.MenuItem>Inicio</S.MenuItem>
          <S.MenuItem>Sobre a Full-life</S.MenuItem>
          <S.MenuItem>Contato</S.MenuItem>
        </S.MenuList>
      </S.Nav>
    </S.Wrapper>
  );
};
