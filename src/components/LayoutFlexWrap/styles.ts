import styled from "styled-components";

export const Container = styled.div`
  margin: 7rem auto 3rem;
  max-width: 1200px;

  .input-search {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 8px;
    margin-bottom: 3.3rem;

    input {
      width: 310px;
      height: 36px;
      font-size: 0.85rem;
      border-radius: 8px;
      padding: 0 0.7rem;
      border: none;
    }
  }

  .filter {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  select {
    font-size: .9rem;
    font-weight: bold;
    display: inline-block;

    color: #000;
    margin-top: 0.4rem;

    padding: 10px 15px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.secondary};
    color: #fff;
    /* appearance: none; */

    border: 0;
    outline: 0;
    cursor: pointer;

    & option {
      cursor: pointer;
    }

    &::-ms-expand {
      /* display: none; */
    }

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }

  .movies {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;

    width: auto;
    margin-top: 2rem;
    gap: 20px;
    padding: 0 16px;
    position: relative;

    h3 {
      position: absolute;
      top: -2rem;
      left: 2rem;
    }
  }

  .btns {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.3rem;
    button + button {
      margin-left: 32px;
    }
    button {
      background-color: transparent;
      border: 0;
      cursor: pointer;
      svg {
        width: 0.9rem;
        color: #fff;
      }
    }
  }
`;
