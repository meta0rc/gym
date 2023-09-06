"use client";

import { useEffect, useState } from "react";
import { Container } from "./style";
export const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return (
      <Container>
        <div>
          <img src="/assets/images/logos/logo-rounded.png" alt="carregando" />
          <LoadingDots />
        </div>
      </Container>
    );
  }

  return null;
};

import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingDots = () => {
  return (
    <DotsWrapper>
      <Dot1 />
      <Dot2 />
      <Dot3 />
    </DotsWrapper>
  );
};

const dotAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
`;

const DotsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const DotTitle = styled.span`
  margin-right: 10px;
  color: ${(props) => props.theme.palette.green};
`;
const Dot = styled.span`
  background: ${(props) => props.theme.palette.green};
  height: 5px;
  width: 5px;
  border-radius: 100%;
  font-size: 24px;
  margin-right: 5px;
  animation: ${dotAnimation} 1s ease infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const Dot1 = styled(Dot)``;
const Dot2 = styled(Dot)``;
const Dot3 = styled(Dot)``;

export default LoadingDots;
