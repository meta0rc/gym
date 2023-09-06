import { styled } from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.palette.blue};

  span {
    color: #fff;
  }

  img {
    width: 100px;
    -webkit-animation: spin 1.5s linear infinite;
    -moz-animation: spin 1.5s linear infinite;
    animation: spin 1.5s linear infinite;
    perspective: 100px;
  }

  @-webkit-keyframes spinner {
    from {
      -webkit-transform: rotateY(0deg);
    }
    to {
      -webkit-transform: rotateY(-360deg);
    }
  }

  @keyframes spin {
    from {
      -moz-transform: rotateY(0deg);
      -ms-transform: rotateY(0deg);
      transform: rotateY(0deg);
    }
    to {
      -moz-transform: rotateY(-360deg);
      -ms-transform: rotateY(-360deg);
      transform: rotateY(-360deg);
    }
  }
`;
