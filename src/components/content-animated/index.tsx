"use client";

type Props = {
  flow?: "left" | "right";
};

type SliderProps = {
  children: React.ReactNode;
  flow?: "left" | "right";
  distance?: string;
};

import { useEffect, useState } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div<Props>`
  position: relative;
  transition: 1s;
  ${(props) =>
    props.flow && {
      [props.flow]: `${props["aria-checked"] ? "0" : "-120%"}`,
    }}
`;

const Content = styled.div``;

const ContentPosition = styled.div<Props & { distance?: string }>`
  position: relative;
  ${(props) =>
    props.flow && {
      [props.flow]: props.distance,
    }}
`;

export const ContentSlider = ({ children, flow = "right" }: SliderProps) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);
  return (
    <Wrapper aria-checked={active} flow={flow}>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export const ContentDistanced = ({
  children,
  distance = "-20%",
  flow = "left",
}: SliderProps) => {
  return (
    <Wrapper>
      <ContentPosition flow={flow} distance={distance}>
        {children}
      </ContentPosition>
    </Wrapper>
  );
};
