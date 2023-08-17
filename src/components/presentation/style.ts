"use client";

import { styled } from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
`;

export const Wrapper = styled.section`
  width: 25%;
  text-align: center;
  display: flex;
  justify-content: center;
  color: #fff;
  a {
    color: #fff;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 80%;
  padding: 0 10%;
  h2,
  p {
    opcity: 0.5;
  }
  p {
    line-height: 2;
  }
`;
const BACKDROP_COLORS = {
  low: "#070c15b3",
  medium: "#070c15d1",
  hight: "#070c15f0",
};

export const Backdrop = styled.div<{
  variant?: "low" | "medium" | "hight";
}>`
  background: ${(props) =>
    props.variant ? BACKDROP_COLORS[props.variant] : BACKDROP_COLORS.low};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: 0.5s;

  ${(props) =>
    !props["aria-readonly"] &&
    `
        &:hover {
            cursor: pointer;
            background: transparent;
            h2, p {
                opacity: 1;
            }
        }
    `}

  h2, p {
    opacity: 0.5;
    padding: 0 20px;
  }
`;

export const ContentImage = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    min-height: 400px;
    object-fit: cover;
  }
`;