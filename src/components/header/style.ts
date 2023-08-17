"use client";

import { styled } from "styled-components";

export const Wrapper = styled.div<{active?: boolean}>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 30px 10%;
  color: #fff;
  z-index: 2;
  background: #161f3094;
`;

export const Nav = styled.nav``;

export const MenuList = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const MenuItem = styled.li``;
