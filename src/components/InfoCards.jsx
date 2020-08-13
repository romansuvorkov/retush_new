import React from 'react';

function infoCards() {
  return (
    <div className="info_cards">
      <div className="info_cards_wrapper">
        <div className="info_card">
          <div className="right">
            <span className="info_card_text">Готовность в течение 5 рабочих дней</span>
          </div>
        </div>
        <div className="info_card">
          <div className="right">
            <span className="info_card_text">Оплата по факту готовности</span>
          </div>
        </div>
        <div className="info_card">
          <div className="right">
              <span className="info_card_text">Опыт работы более 8 лет</span> 
          </div>
        </div>
      </div>

        
    </div>
  );
}

export default infoCards;