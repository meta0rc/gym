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
  padding-bottom: 10px;
  border-bottom: 2px solid ${(props) => props.theme.palette.green};
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

export const WrapperForm = styled.div`
  color: #fff;
  display: flex;
  width: 100%;
  background: #0f1623;
  padding: 5% 7%;
  gap: 10rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 5rem;
  }
`;

export const WrapperFormInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 0.5;
  b {
    color: ${(props) => props.theme.palette.green};
  }
  h2 {
    font-size: 2rem;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  svg {
    color: ${(props) => props.theme.palette.green};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 10px;
  background: #fff;
  padding: 3rem;
  box-sizing: border-box;
  flex: 1;
  h2 {
    color: #000;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    h2 {
      font-size: 1.5rem;
    }
  }
  button {
    height: 40px;
    font-size: 1rem;
    background: #67a55c;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    transition: 0.2s;
    &:hover {
      background: #0f1623;
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

export const WrapperInput = styled.div`
  position: relative;
  display: flex;
  input {
    height: 45px;
  }
  input,
  textarea {
    width: 100%;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 20px 30px;
    font-size: 1rem;
    color: #000;
  }

  textarea {
    padding-top: 10px;
    resize: none;
    min-height: 100px;
  }
  svg {
    position: absolute;
    color: #333;
    top: 15px;
    margin-left: 10px;
  }
`;

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
    margin-top: 20px;
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
