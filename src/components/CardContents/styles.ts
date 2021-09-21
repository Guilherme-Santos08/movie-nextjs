import styled from "styled-components";

export const Container = styled.article`
  .card-content {
    width: 190px;
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