import styled from "styled-components";

export const Container = styled.div`
  max-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 16px;
  color: #fff;
  line-height: 24px;

  margin-top: 6rem;

  .poster {
    display: block;
    min-width: 300px;
    width: 200px;
    height: 400px;
    img {
      display: block;
      width: 100%;
      min-width: 100%;
      height: 100%;
      min-height: 100%;
      border-width: 0px;
      border-radius: 8px;
      outline: none;
    }
  }

  .content {
    display: flex;
    max-width: 1300px;
  }
  .info {
    margin-top: 2.8rem;
    padding-left: 2rem;
    .title-type {
      h2 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
        span {
          font-weight: normal;
        }
      }
      p {
        span {
          color: gray;
        }
      }
    }

    .vote_average {
      margin-top: 1.6rem;
      p {
        font-weight: bold;
      }
    }

    .synopsis {
      margin-top: 1.3rem;

      .synopsis__tagline {
        font-size: 1.2rem;
        font-family: italic;
        font-weight: normal;
      }

      .Sinopse__h3 {
        margin: 8px 0;
        font-size: 1.4rem;
      }

      .creator {
        margin-top: 1.3rem;
        .create__name {
          font-weight: bold;
          font-size: 1rem;
        }
      }
    }
  }
`;
