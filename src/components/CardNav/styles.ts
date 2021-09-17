import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  align-items: center;

  font-size: 1.8rem;
  font-weight: bold;

  padding: 1rem;
  position: relative;

  border-radius: 8px;
  cursor: pointer;
  transition: background .2s ease-in-out;
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
    width: 2rem;
    color: ${props => props.theme.colors.text};
    margin-right: 1rem;
    transition: all .2s ease-in-out;
  }

  .box-active {
    width: 4px;
    height: 2.031rem;
    background-color: transparent;

    position: absolute;
    right: -0.1rem;
    top: 25%;

    border-radius: 8px;
    transition: background .2s ease-in-out;
  }
`;
