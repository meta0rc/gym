"use client";

import { useEffect, useState } from "react";
import { styled } from "styled-components";

const Mark = styled.div`
  transition: 1s;
  &:nth-child(1) {
    top: 10px;
    left: -100px;
  }
  top: 0;
  left: 0;
  position: absolute;
  z-index: 1;
  min-width: 200px;
  border-bottom: 2px solid ${(props) => props.theme.palette.green};
`;

const Wrapper = styled.div`
  height: 0px;
  position: absolute;
  left: ${(props) => (props["aria-checked"] ? "0" : "-100%")};
  margin-top: ${(props) =>
    props["aria-flowto"] === "top" ? "-17rem" : "17rem"};
  transition: 1s;
`;

export const Markup = ({ flow = "top" }: { flow?: string }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <Wrapper aria-checked={active} aria-flowto={flow}>
      <Mark />
      <Mark />
    </Wrapper>
  );
};
