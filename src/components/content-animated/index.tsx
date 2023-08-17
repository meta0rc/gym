"use client";

import { useEffect, useState } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  left: ${(props) => (props["aria-checked"] ? "0" : "-120%")};
  transition: 1s;
`;

const Content = styled.div``;

export const ContentSlider = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);
  return (
    <Wrapper aria-checked={active}>
      <Content>{children} </Content>
    </Wrapper>
  );
};
