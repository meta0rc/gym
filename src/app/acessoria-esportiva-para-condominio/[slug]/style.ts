"use client";

import { Content } from "@/app/style";
import { styled } from "styled-components";

type Description = {
  reverse?: boolean;
};

export const WrapperMain = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 10%;
  gap: 3rem;
`;

export const Main = styled.div`
  width: 100%;
`;

export const Paragraph = styled.p`
  line-height: 1.5;
  border-bottom: 4px solid ${(props) => props.theme.palette.green};
`;

export const WrapperContent = styled(Content)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-conent: center;
  padding: 0 !important;
  line-height: 1;
  h1 {
    margin-top: -10px;
    b {
      color: ${(props) => props.theme.palette.green};
    }
  }
  > div {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    p { 
      line-height: 1.5;
    }
    h2 {
      line-height: 1.2;
    }
    background: #161f30ad;
    line-height: 1.5;
    padding: 5rem;
    border-radius: 1rem;
    @media(max-width: 768px) {
      p {
        text-align: justify;
        padding-bottom: 10px;
      }
      padding: 2rem;
    }
      }
    }
  }
`;

export const WrapperForm = styled(WrapperContent)`
  width: 40%;
  height: max-content:
  div {
    height: 100%;
    button {
      font-size: 1rem;
    }
  }
`;

export const Mark = styled.div`
  position: absolute;
  border-bottom: 2px solid ${(props) => props.theme.palette.green};
  width: 200px;
  top: 4rem;
  left: 0;
`;

export const ContentImage = styled.div``;

export const ContentDescription = styled.div<Description>`
  position: relative;
  display: flex;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
  align-items: center;
  gap: 50px;
  line-height: 1.5;
  padding: 5rem 5rem 2rem;

  b {
    color: ${(props) => props.theme.palette.green1};
  }
  p {
    width: 100%;
  }
  img {
    @media (max-width: 350px) {
      width: 250px;
      height: 250px;
    }
    border-radius: 100%;
    width: 300px;
    height: 300px;
    object-fit: cover;
    padding: 3px;
    border: 0.5rem solid ${(props) => props.theme.palette.green};
  }
  ${Mark} {
    &:nth-child(1) {
      top: 3.5rem;
      width: 300px;
    }
  }
  ${(props) =>
    props.reverse &&
    `
    flex-direction: row-reverse;
    ${Mark} {
      left: auto;
      right: 0;
    }
  `};
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 5rem 30px;
    p {
      text-align: justify;
    }
    img {
      border: none;
    }
    ${Mark} {
      margin-top: -2rem;
    }
  }
`;
