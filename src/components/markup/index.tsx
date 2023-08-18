"use client";

import { useEffect, useState } from "react";
import { styled } from "styled-components";

const Mark = styled.div`
  min-width: 200px;
  border-bottom: 2px solid ${(props) => props.theme.palette.green};
`;

const Wrapper = styled.div`
  height: 0px;
  transition: 1s;
`;

export const Markup = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <Wrapper aria-checked={active}>
      <Mark />
    </Wrapper>
  );
};
