import styled from "styled-components";

export const Container = styled.li`
  a {
    &.active {
      background-color: rgba(255, 255, 255, 6%);

      svg {
        color: ${props => props.theme.colors.secondary};
      }
      .box-active {
        background-color: ${props => props.theme.colors.secondary};
      }
    }
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.text};
    font-size: 1.5rem;
    font-weight: bold;

    padding: 1rem;
    position: relative;

    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    &:hover {
      background-color: rgba(255, 255, 255, 6%);
      svg {
        color: ${props => props.theme.colors.secondary};
      }
      .box-active {
        background-color: ${props => props.theme.colors.secondary};
      }
    }

    svg {
      width: 1.6rem;
      color: ${props => props.theme.colors.text};
      margin-right: 1rem;
      transition: all 0.2s ease-in-out;
    }

    .box-active {
      width: 4px;
      height: 2.031rem;
      background-color: transparent;

      position: absolute;
      right: -0.1rem;
      top: 25%;

      border-radius: 8px;
      transition: background 0.2s ease-in-out;
    }
  }
`;
