import { Children, Key, useEffect, useState } from "react";
import { cardContextProps } from "../../interfaces/interfaces";

import { apiMain } from "../../pages/api/api";
import CardContents from "../CardContents";

import { Container } from "./styles";

interface LayoutChildren {
  children: React.ReactNode;
  handlePrevClick: () => void;
  handleNextClick: () => void;
  pages: Number;
}

export default function LayoutFlexWrap({
  children,
  handlePrevClick,
  handleNextClick,
  pages,
}: LayoutChildren) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [handlePrevClick, handleNextClick]);

  return (
    <>
      <Container>
        <div className="input-search">
          {/* Usar onChange e value */}
          <input type="text" placeholder="O que procura ?" />
        </div>

        <div className="movies">
          <h3>Página {pages}</h3>
          {children}
        </div>
        <div className="btns">
          <button className="btn_prev" onClick={handlePrevClick}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-left"
              className="svg-inline--fa fa-angle-left fa-w-8"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
            >
              <path
                fill="currentColor"
                d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
              ></path>
            </svg>
          </button>
          <button className="btn_next" onClick={handleNextClick}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-right"
              className="svg-inline--fa fa-angle-right fa-w-8"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
            >
              <path
                fill="currentColor"
                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
              ></path>
            </svg>
          </button>
        </div>
      </Container>
    </>
  );
}
