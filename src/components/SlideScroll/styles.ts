import styled from "styled-components";

export const Container = styled.section`
  margin-top: 4rem;
  width: 100%;
  .scroll {
    display: flex;
    margin-top: 1.6rem;

    gap: 10px;
    overflow-x: scroll;

    ::-webkit-scrollbar {
      width: 2px; /* Remove scrollbar space */
      height: 7px;
      background: transparent; /* Optional: just make scrollbar invisible */
    }
    /* Optional: show position indicator in red */
    ::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.colors.secondary};
      border-radius: 8px;
      height: 20%;
    }
  }
`;
