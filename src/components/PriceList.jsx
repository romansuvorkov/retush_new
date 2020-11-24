import React, { useState } from 'react';


function PriceList() {

    return (
            <div className="price_list_wrapper">
                <h2>Прайс лист</h2>
                <div className="price_table">
                    <div className="price_string">
                        <span className="price_item">Фотография хорошего, "студийного" качества (изображение четкое, хорошо видны черты лица)</span>
                        <span className="price">200 руб.</span>
                    </div>
                    <div className="price_string">
                        <span className="price_item">Фотографии не студийного качества (изображение на фотографии размыто,черты лица не четкие)</span>
                        <span className="price">300 руб.</span>
                    </div>
                    <div className="price_string">
                        <span className="price_item">Тисненые и немного поврежденные фотографии</span>
                        <span className="price">500 руб.</span>                        
                    </div>
                    <div className="price_string">
                        <span className="price_item">Сильно поврежденные фотографии</span>
                        <span className="price">1000 руб.</span>
                    </div>
                    <div className="price_string">
                        <span className="price_item">Портрет по пояс или в полный рост</span>
                        <span className="price">+250 руб.</span>
                    </div>
                    <div className="price_string">
                        <span className="price_item">Наложение фонового изображения на портрет</span>
                        <span className="price">+100 руб.</span>
                    </div>
                    <div className="price_string">
                        <span className="price_item">Двойной портрет</span>
                        <span className="price">Цена х2</span>
                    </div>
                    <div className="price_string">
                        <span className="price_item">Портрет по пояс или в полный рост</span>
                        <span className="price">+250 руб.</span>
                    </div>
                    <div className="price_string">
                        <span className="price_item">Доплата за срочность. Готовность эскиза в течение 1 рабочего дня</span>
                        <span className="price">+500 руб.</span>
                    </div>
                    <div className="price_string">
                        <span className="price_item">Замена одежды</span>
                        <span className="price">+50 руб.</span>
                    </div>
                </div>
            </div>
    );
}

export default PriceList;