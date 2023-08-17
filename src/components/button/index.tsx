"use client";
import styled from "styled-components";

const Btn = styled.button`
  color: ${(props) => props.theme.palette.blue};
  background: ${(props) => props.theme.palette.green};
  padding: 10px;
  display: flex;
  width: max-content;
  border: none;
  border-radius: 5px;
`;

export const Button = ({ children }: any) => {
  return <Btn>{children} </Btn>;
};
