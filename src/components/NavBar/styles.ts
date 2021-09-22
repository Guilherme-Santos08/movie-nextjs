import styled from "styled-components";

export const Container = styled.header`
  background-color: ${props => props.theme.colors.backgroundSecondary};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1410px;
    margin: 0 auto;
    padding: 1rem;

    .logo {
      font-size: 2rem;
      font-weight: bold;
      cursor: default;
      > div {
        background-color: ${props => props.theme.colors.secondary};
        width: 50%;
        height: 0.5rem;
        border-radius: 8px;
      }
    }

    .btn-mobile {
      opacity: 0;
      visibility: hidden;
      display: none;
      cursor: pointer;
      background-color: transparent;
      border: none;
      svg {
        color: white;
      }
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      li + li {
        margin-left: 1rem;
      }
      .btn-mobile {
        position: absolute;
        top: 5%;
        left: 0.3rem;
        svg {
          width: 1.7rem;
          height: 1.7rem;
        }
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
        transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
      }

      &:hover::after {
        transform: scale(1);
        transform-origin: bottom left;
      }
    }

    @media (max-width: 760px) {
      ul {
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;

        flex-direction: column;
        justify-content: flex-start;
        padding: 4.8rem 1rem 0;

        background-color: ${props => props.theme.colors.backgroundSecondary};
        li + li {
          margin-top: 3rem;
          margin-left: 0;
        }

        &.visible {
          transform: translateX(0);
        }
        .btn-mobile {
          opacity: 1;
          visibility: visible;
          display: inline-block;
        }
      }

      .btn-mobile {
        opacity: 1;
        visibility: visible;
        display: inline-block;
        svg {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
`;
