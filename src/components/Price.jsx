import React, { useState } from 'react';


function Price() {

    const [orderSum, setOrderSum] = useState(0);


    const prices = {
        highQuality: 200,
        middleQuality: 300,
        badQuality: 500,
        awfulQuality: 1000,
        tall: 250,
        background: 100,
        clothes: 50,
        emergency: 500
    }



  return (
    <div className="price_list_wrapper">
        <h2 className="price_list_header">Цены на услуги</h2>
        <div className="price_constructor">
            <div className="quality_wrapper">
                <span className="quality_item">Фото студийного качества</span>
                <span className="quality_item">Фото низкого качества</span>
                <span className="quality_item">Тисненые и поврежденные фотографии</span>
                <span className="quality_item">Сильно поврежденные фотографии</span>
            </div>
        </div>
    </div>

  );
}

export default Price;