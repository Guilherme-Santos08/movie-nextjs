import styled from "styled-components";

export const Container = styled.header`
  background-color: ${props => props.theme.colors.backgroundSecondary};
  width: 100%;

  padding: 1rem;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
    p {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 2rem;
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      li + li {
        margin-left: 1rem;
      }
    }
    a {
        position: relative;
        transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);

        &::after {
          content: "";

          position: absolute;
          bottom: 1px;
          left: 0;

          width: 100%;
          height: 3px;
          background-color: ${props => props.theme.colors.secondary};
          border-radius: 8px;

          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform .4s cubic-bezier(0.86, 0, 0.07, 1);
        }

        &:hover::after {
          transform: scale(1);
          transform-origin: bottom left;
        }
      }
  }
`;
