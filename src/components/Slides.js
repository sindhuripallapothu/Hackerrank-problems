import React, { useState } from "react";
import { DefaultButton, PrimaryButton } from "@fluentui/react";
function Slides({ slides }) {
  const [slide, setSlide] = useState(0);

  const onNext = () => {
    if (slide < slides.length - 1) {
      setSlide(slide + 1);
    } else setSlide(0);
  };

  const onPrev = () => {
    if (slide <= 0) {
      setSlide(0);
    } else setSlide(slide - 1);
  };

  const onRestart = () => {
    setSlide(0);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <DefaultButton
          data-testid="button-restart"
          className="small outlined"
          onClick={onRestart}
          disabled={slide === 0}
        >
          Restart
        </DefaultButton>
        <PrimaryButton
          data-testid="button-prev"
          className="small"
          onClick={onPrev}
          disabled={slide === 0}
        >
          Prev
        </PrimaryButton>
        <DefaultButton
          data-testid="button-next"
          className="small"
          onClick={onNext}
          disabled={slide === slides.length - 1}
        >
          Next
        </DefaultButton>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[slide].title}</h1>
        <p data-testid="text">{slides[slide].text}</p>
      </div>
    </div>
  );
}

export default Slides;
