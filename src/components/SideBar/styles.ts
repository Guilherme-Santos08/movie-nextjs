import styled from "styled-components";

export const Container = styled.aside`
  background-color: ${props => props.theme.colors.backgroundSecondary};
  width: 353px;
  min-height: 100%;
  max-height: 100%;
  padding: 1rem;
  position: fixed; 
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  
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
