import styled from "styled-components";

export const Container = styled.aside`
  background-color: ${props => props.theme.colors.backgroundSecondary};
  width: 353px;
  height: 100vh;
  padding: 1rem;

  .logo {
    font-size: 2.4rem;
    font-weight: bold;
    cursor: default;
    > div {
      background-color: ${props => props.theme.colors.secondary};
      width: 50%;
      height: 0.5rem;
      border-radius: 8px;
    }
  }

  nav {
    margin-top: 4rem;
    p {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 2rem;
    }
    ul {
      li + li {
        margin-top: 1rem;
      }
    }
  }
`;
