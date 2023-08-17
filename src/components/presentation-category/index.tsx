'use client'
import { useRef, useState } from "react";
import { List, Topic, Wrapper } from "./style";

type Props = {
  options: string[];
};

export const PresentationCategory = ({ options }: Props) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const childRef = useRef<HTMLLIElement | null>(null)
  const [active, setActive] = useState(false);

  const handleScroll = () => {
    if(!wrapperRef.current) return;
    setActive(true);
  };

  return (
    <Wrapper ref={wrapperRef} onScroll={handleScroll}>
      <List>
        {options.map((option, index) => (
          <Topic key={option} id={option} ref={childRef} active={active}>
            <div></div>
            <h3>{option}</h3>
          </Topic>
        ))}
      </List>
    </Wrapper>
  );
};
