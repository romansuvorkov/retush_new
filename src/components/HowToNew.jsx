import React, { useState } from 'react';


function HowToNew() {

    const [activeHowToCard, setActiveSlide] = useState(1);

    const handleClick = (numb) => {
        const newActiveHowToCard = activeHowToCard + numb;
        if (newActiveHowToCard < 1) {
            setActiveSlide(1);
        } else if (newActiveHowToCard > 3) {
            setActiveSlide(3);
        } else {
            setActiveSlide(newActiveHowToCard);
        }
    }

    return (
        // <div className="how_to_page">
            <div className="how_to_wraper">
            <div className={activeHowToCard === 1 ? "how_to_card how_to_card_active" : `how_to_card ${activeHowToCard > 1 ? "how_to_move_left" : ""}`}>
                <div className="text">
                    <h3 className="instructions_card_header">Подготовить фотографию</h3>
                    <div className="instructions_card_text_wrapper">
                    <p className="instructions_card_text">Размер лица на фото и необходимое разрешение:</p>
                    <ul>
                        <li className="instructions_card_text">1см - 1200px/дюйм</li>
                        <li className="instructions_card_text">2см - 800px/дюйм</li>
                        <li className="instructions_card_text">3см-5см - 1200px/дюйм</li>
                        <li className="instructions_card_text">10см и более - 1200px/дюйм</li>
                    </ul>
                    <p className="instructions_card_text">Чем ниже качество фото, тем выше разрешение при сканировании</p>
                    <p className="instructions_card_text">Для фотографий с тиснением необходимо сделать 4 скана, каждый раз разворачивая фотографию на 90 градусов</p>
                    </div>
                </div>
            </div>
            <div className={activeHowToCard === 2 ? "how_to_card how_to_card_active" : `how_to_card ${activeHowToCard > 2 ? "how_to_move_left" : ""} ${activeHowToCard < 2 ? "how_to_move_right" : ""} `}>
                <div className="text">
                <h3 className="instructions_card_header">Подробно описать заказ</h3>
                <div className="instructions_card_text_wrapper">
                    <p className="instructions_card_text">Подготовить подробное описание заказа. Если необходимо сделать корректировку изображения - подробно расписать что нужно сделать.</p>
                    <p className="instructions_card_text">Для замены одежды приложить макет, либо прописать пожелания и мы используем свой макет</p>
                    <p className="instructions_card_text">Для срочного заказа сообщить желаемый срок изготовления и на номер +777777777777 отправить сообщение используя Viber или Whatsapp</p>
                </div>
                </div>
            </div>
            <div className={activeHowToCard === 3 ? "how_to_card how_to_card_active" : "how_to_card how_to_move_right"}>
                <div className="text">
                <h3 className="instructions_card_header">Отправить заявку</h3>
                <div className="instructions_card_text_wrapper">
                    <p className="instructions_card_text">Отправить заявку с описанием заказа на почту @yandex.ru</p>
                </div>
                </div>
            </div>
            <div className="how_to_interface">
                <div className="how_to_left" onClick={() => handleClick(-1)}>&#10094;</div>
                <div className="how_to_right" onClick={() => handleClick(1)}>&#10095;</div>
            </div>
        </div>
        // </div>
    );
}

export default HowToNew;