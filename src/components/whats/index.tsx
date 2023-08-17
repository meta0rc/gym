"use client";

import { styled } from "styled-components";

const url =
  "https://wa.me/5511987613063?text=Ol%C3%A1+vim+pelo+site+e+gostaria+de+saber+mais+sobre+os+servi%C3%A7os";

const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1;
  cursor: pointer;
  img {
    width: 60px;
  }
`;
export const Whatsapp = () => {
  const onClickWhats = () => {
    if (window.innerWidth < 768) return (location.href = url);
    window.open(url);
  };

  return (
    <Wrapper onClick={onClickWhats}>
      <img src="/whatsapp.png" />
    </Wrapper>
  );
};
