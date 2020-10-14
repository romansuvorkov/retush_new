import React, { Component, useRef, useState } from 'react';
import example1b from '../img/example1b.jpg';
import example1a from '../img/example1a.jpg';
import useSizeFunction from '../functions/useSizeFunction';

function ExampleImage() {

    const componentRef = useRef();
    const { width, height } = useSizeFunction(componentRef);

    // const divStyle = {
    //     clip: `rect(${width/2}'px', 0px, auto, 0px)`,
    //     backgroundImage: 'url(' + imgUrl + ')',
    // };

        return (
            <div className="example_show" ref={componentRef}>
                <img src={example1b} className="example_img before_img" alt="Пример до" style={{ clip: `rect(0px, ${width/2}px, ${height}px, 0px)` }}/>
                <img src={example1a} className="example_img after_img" alt="Пример после" style={{ clip: `rect(0px, ${width}px, ${height}px, ${width/2}px)` }}/>
                <div className="ex_show_interface" style={{ left: `${width/2}px` }}>
                    <span className="left_arrow"></span>
                    <span className="right_arrow"></span>
                </div>
            </div>
        )

}

export default ExampleImage;