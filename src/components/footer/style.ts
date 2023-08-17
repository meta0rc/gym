"use client";

import { styled } from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.palette.blue};
  padding: 5rem 10%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  color: #fff;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    gap: 20px;
    padding: 3rem;
    background: #131a28;
    color: #ccc;
    border-radius: 1rem;
    input {
      padding: 1rem;
      font-size: 18px;
      color: #fff;
      height: 50px;
      background: ${(props) => props.theme.palette.blue};
      border: none;
      border-radius: 10px;
      color: #fff;
    }
    button {
      height: 50px;
      background: ${(props) => props.theme.palette.green1};
      border: none;
      font-weight: bold;
      border-radius: 10px;
      color: #fff;
    }
  }
`;
export const Copy = styled.div`
  display: flex;
  justify-content: center;
  background: #000;
  padding: 0.5rem;
  color: #fff;
  font-size: 12px;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 10px;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  li {
    font-weight: bold;
    a {
      color: ${(props) => props.theme.palette.green};
    }
  }
`;
