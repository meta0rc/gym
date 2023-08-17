"use client";

import styled from "styled-components";

export const Container = styled.div<{ background?: string }>`
  height: 100vh;
  background-image: url(${(props) =>
    props.background
      ? props.background
      : "/assets/images/home/background-home.jpg"});
  background-size: cover;
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
  h1 {
    font-size: 4em;
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
