"use client";

import styled from "styled-components";

const banner = "/assets/images/home/background1.jpg";
const banner2 = "/assets/images/home/background2.jpg";
const banner3 = "/assets/images/home/background3.jpg";
const banner4 = "/assets/images/home/background4.jpg";
const banner5 = "/assets/images/home/background5.jpg";

export const Container = styled.div<{ background?: string }>`
  height: 100vh;
  background-image: url(${(props) =>
    props.background ? props.background : banner5});
  background-size: cover;
  @media (max-width: 768px) {
    background-position-x: -100px;
  }
`;

export const Wrapper = styled.div``;

export const Content = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  color: #fff;
  height: 100%;
  padding: 0 10%;
  width: 70%;
  b {
    color: ${(props) => props.theme.palette.green};
  }
  h1 {
    font-size: 4em;
  }
  @media (max-width: 768px) {
    width: 100%;
    h1 {
      font-size: 3rem;
    }
  }
`;

export const Middle = styled.div`
  padding: 4%;
  background: #000;
  text-align: center;
  color: #fff;
  h3,
  p {
    opacity: 0.7;
  }
  p {
    margin-top: 1%;
  }
`;
