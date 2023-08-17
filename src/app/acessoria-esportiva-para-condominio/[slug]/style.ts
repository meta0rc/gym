"use client";

import { Content } from "@/app/style";
import { styled } from "styled-components";

export const WrapperMain = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 10%;
  gap: 3rem;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const WrapperContent = styled(Content)`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 !important;
  line-height: 1;
  h1 {
    margin-top: -10px;
    b {
      color: ${(props) => props.theme.palette.green};
    }
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    p { 
      line-height: 1.5;
    }
    h2 {
      line-height: 1.2;
    }
    background: #161f30ad;
    line-height: 1.5;
    padding: 5rem;
    border-radius: 1rem;
      }
    }
  }
`;

export const WrapperForm = styled(WrapperContent)`
  width: 40%;
  height: max-content:
  div {
    height: 100%;
    button {
      font-size: 1rem;
    }
  }
`;
