import styled from "styled-components";

export const Container = styled.article`

  .card-content {
    max-width: 100%;
    cursor: pointer;
    transition: opacity .2s ease-in-out;

    &:hover {
      opacity: .8;
    }
    img {
      width: 100%;
      border-radius: 8px;

    }
  }
`;
