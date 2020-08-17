import React from 'react';

function Header() {
  return (
    <header className="main_header">
        <div className="visit_card front">
          <div className="logo"></div>
          <div className="card_title">Ретушь фотографий для гравировки на камне</div>
        </div>
        <div className="visit_card back">
          <div className="left">
            <div className="card_title">Суворкова Ольга</div>
            <div className="card_text">Профессиональный ретушер</div>
          </div>
          <div className="right">
            <div>(404) 456-1259</div>
            <div>apscience.com</div>
            <div>gfm@apscience.com</div>
            <div>Каменск-Уральский</div>
          </div>
        </div>
    </header>
  );
}

export default Header;