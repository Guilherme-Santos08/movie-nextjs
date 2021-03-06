import styled from "styled-components";

export const Container = styled.article`
  .card {
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;

    a {
      width: 100%;
      height: 100%;
    }

    &:hover {
      opacity: 0.8;
    }
    img {
      min-width: 147px;
      max-width: 147px;
      background-size: cover;
      cursor: pointer;
      transition: 0.5s ease;
      z-index: 9999;
      border-radius: 8px;

      &:hover {
        transform: scale(1.2);
        z-index: 2;
      }
    }
  }
`;
