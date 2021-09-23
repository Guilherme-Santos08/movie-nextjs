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
