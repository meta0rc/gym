"use client";

import { styled } from "styled-components";

type WrapperProps = {
  active?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 30px 10%;
  color: #fff;
  z-index: 2;
  background: #161f30e0;
`;

export const Nav = styled.nav`
  .open {
    right: 0;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  @media (max-width: 768px) {
    background: ${(props) => props.theme.palette.blue};
    top: 0;
    bottom: 0;
    flex-direction: column;
    position: fixed;
    transition: 0.5s;
    right: -100%;
    width: 200px;
    padding: 5rem 20px;
    align-items: start;
  }
`;

export const MenuItem = styled.li`
  color: ${(props) =>
    props["aria-checked"] ? props.theme.palette.green : "#fff"};
  font-size: 12px;
  text-transform: uppercase;
  font-weight: ${(props) => (props["aria-checked"] ? "bold" : "400")};
  a {
    display: flex;
    gap: 5px;

    color: currentColor;
  }
`;

export const Close = styled.span`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    right: 30px;
    top: 37px;
    color: ${(props) => props.theme.palette.green};
  }
`;
