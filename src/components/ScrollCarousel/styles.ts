import styled from "styled-components";

export const Container = styled.div`
  margin: 7rem auto;
  max-width: 1200px;
  height: 250px;
  position: relative;
  .switchleft,
  .switchRight {
    color: white;
    font-weight: bold;
    height: 100%;
    width: 45px;
    line-height: 250px;
    font-size: 25px;
    text-align: center;
    background-color: lightgreen;
    font-family: sans-serif;
    top: 0;
    z-index: 3;
  }
  .switchleft {
    position: absolute;
    left: 0px;
  }
  .switchRight {
    position: absolute;
    right: -50px;
  }

  .carouselbox {
    display: flex;
    align-items: center;
    text-align: center;

    width: auto;
    height: 290px;
    gap: 20px;
    padding: 0 16px;

    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
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
