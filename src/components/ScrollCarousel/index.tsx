import { useRef, useState } from "react";

import { Container } from "./styles";

interface ScrollCarouselProps {
  children: React.ReactNode;
  name: string;
}

function ScrollCarousel({ children, name }: ScrollCarouselProps) {
  return (
    <>
      <Container>
        <h3>{name}</h3>
        <div className="carouselbox">{children}</div>
      </Container>
    </>
  );
}

export default ScrollCarousel;

// const slidersEl = useRef();

//   let scrollAmount = 0;
//   let scrollPerClick;

//   const sliderScrollLeft = () => {
//     window.scrollTo({
//       top: 0,
//       left: (scrollAmount -= scrollPerClick),
//       behavior: "smooth",
//     });
//     if (scrollAmount < 0) {
//       scrollAmount = 0;
//     }
//   };

//   const sliderScrollRight = () => {
//     if (scrollAmount <= slidersEl.scrollWidth - slidersEl.clientWidth) {
//       slidersEl.scrollTo({
//         top: 0,
//         left: (scrollAmount += scrollPerClick),
//         behavior: "smooth",
//       });
//     }
//   };
