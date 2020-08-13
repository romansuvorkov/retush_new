import React, { useState } from 'react';
import example1b from '../img/example1b.jpg';
import example1a from '../img/example1a.jpg';

function Slider() {

    const [activeSlide, setActiveSlide] = useState('');

    const handleClick = (numb) => {
        setActiveSlide(numb);
    }

  return (
    <div className="slider_container">
        <div className={activeSlide === 1 ? "slider_card slider_card_active" : "slider_card"}>
            <img src={activeSlide === 1 ? example1a : example1b} className="slider_img" alt="Пример 1" onClick={() => handleClick(1)}/>
        </div>
        <div className={activeSlide === 2 ? "slider_card slider_card_active" : "slider_card"}>
            <img src={activeSlide === 2 ? example1a : example1b} className="slider_img" alt="Пример 1" onClick={() => handleClick(2)}/>
        </div>
        <div className={activeSlide === 3 ? "slider_card slider_card_active" : "slider_card"}>
            <img src={activeSlide === 3 ? example1a : example1b} className="slider_img" alt="Пример 1" onClick={() => handleClick(3)}/>
        </div>
        <div className={activeSlide === 4 ? "slider_card slider_card_active" : "slider_card"}>
            <img src={activeSlide === 4 ? example1a : example1b} className="slider_img" alt="Пример 1" onClick={() => handleClick(4)}/>
        </div>
    </div>
  );
}

export default Slider;