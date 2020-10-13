import React, { useState, useEffect } from 'react';
import example1b from '../img/example1b.jpg';
import example1a from '../img/example1a.jpg';
import ExampleImage from './ExampleImage';

function Examples() {

    useEffect(() => {
        // window.onresize = function() {
        //    console.log('work'); 
        // };
    });

    const [activeMoving, setActiveMoving] = useState(false);
    const [interfacePosition, setInterfacePosition] = useState("50%");

    const testCoord = (e) => {
        // let testX = e.clientX;
        // console.log(testX);
        let x = e.target.getBoundingClientRect();
        console.log(x);
    }

    const handeMouseDown = (e) => {
        
        setActiveMoving(true);
    }

    const handeMouseUp = (e) => {
        setActiveMoving(false);
    }

    const handeMouseMove = (e) => {
        if(activeMoving) {
            let testX = e.clientX;
            let margin = testX + "px";
            console.log(margin);
            setInterfacePosition(margin);
        }
    }






  return (
    <div className="examples_wraper">
        <h2>Примеры работ</h2>
        <div className="examples_container">
            {/* <div className="example_show">
                <img src={example1b} className="example_img before_img" alt="Пример до"/>
                <img src={example1a} className="example_img after_img" alt="Пример после"/>
                <div className="ex_show_interface" style={{ left: interfacePosition }}>
                    <span className="left_arrow"></span>
                    <span className="right_arrow"></span>
                </div>
            </div> */}
            <ExampleImage />
        </div>    
    </div>

  );
}

export default Examples;