import React, { useState } from 'react';


function HowTo() {

  return (
    <div className="how_to_wraper">
        <div class="how_to_card">
            <div class="text">
                <h3 class="instructions_card_header">Подготовить фотографию</h3>
                <div class="instructions_card_text_wrapper">
                <p class="instructions_card_text">Размер лица на фото и необходимое разрешение:</p>
                <ul>
                    <li class="instructions_card_text">1см - 1200px/дюйм</li>
                    <li class="instructions_card_text">2см - 800px/дюйм</li>
                    <li class="instructions_card_text">3см-5см - 1200px/дюйм</li>
                    <li class="instructions_card_text">10см и более - 1200px/дюйм</li>
                </ul>
                <p class="instructions_card_text">Чем ниже качество фото, тем выше разрешение при сканировании</p>
                <p class="instructions_card_text">Для фотографий с тиснением необходимо сделать 4 скана, каждый раз разворачивая фотографию на 90 градусов</p>
                </div>
            </div>
        </div>
        <div class="how_to_card">
            <div class="text">
            <h3 class="instructions_card_header">Подробно описать заказ</h3>
            <div class="instructions_card_text_wrapper">
                <p class="instructions_card_text">Подготовить подробное описание заказа. Если необходимо сделать корректировку изображения - подробно расписать что нужно сделать.</p>
                <p class="instructions_card_text">Для замены одежды приложить макет, либо прописать пожелания и мы используем свой макет</p>
                <p class="instructions_card_text">Для срочного заказа сообщить желаемый срок изготовления и на номер +777777777777 отправить сообщение используя Viber или Whatsapp</p>
            </div>
            </div>
        </div>
        <div class="how_to_card">
            <div class="text">
            <h3 class="instructions_card_header">Отправить заявку</h3>
            <div class="instructions_card_text_wrapper">
                <p class="instructions_card_text">Отправить заявку с описанием заказа на почту @yandex.ru</p>
            </div>
            </div>
        </div>  
    </div>

  );
}

export default HowTo;