import React, { useRef, useState, useEffect } from 'react';
import example1b from '../img/example1b.jpg';
import example1a from '../img/example1a.jpg';
import useSizeFunction from '../functions/useSizeFunction';

function ExampleImage() {

    // useEffect(() => {
        // const componentRef = useRef();
        // const { width, height } = useSizeFunction(componentRef);
        // const [clipset, setClip] = useState(width);
        // const [interfacePosition, setInterfacePosition] = useState("50%");
    // })

    const componentRef = useRef();
    const { width, height, center } = useSizeFunction(componentRef);
    const [interfacePosition, setInterfacePosition] = useState(false);
    const [activeMoving, setActiveMoving] = useState(false);
    const [clipWidth, setClipWidth] = useState(false);

    const handleTouchStart = (e) => {
        console.log(e.touches[0].clientX);
        // e.preventDefault();
        setActiveMoving(true);
    }

    
    const handleTouchEnd = (e) => {
        // e.preventDefault();
        setActiveMoving(false);
    }

    const handleTouchMove = (e) => {
        if(activeMoving) {
            // e.preventDefault();
            const rect = componentRef.current.getBoundingClientRect();
            const cursorPosition = e.touches[0].clientX - rect.left;
            // center = cursorPosition;
            setInterfacePosition(`${cursorPosition}`);
            console.log(cursorPosition);
            setClipWidth(cursorPosition);
            // console.log(`left pos: ${clipWidth}`);
        }
    }

    const handleMove = (e) => {
        if(activeMoving) {
            e.preventDefault();
            const rect = componentRef.current.getBoundingClientRect();
            const cursorPosition = e.clientX - rect.left;
            // center = cursorPosition;
            setInterfacePosition(`${cursorPosition}`);
            setClipWidth(cursorPosition);
            // console.log(`left pos: ${clipWidth}`);
        }
    }

    const handleMouseDown = (e) => {
        e.preventDefault();
        setActiveMoving(true);
    }

    const handleMouseUp = (e) => {
        e.preventDefault();
        setActiveMoving(false);
    }

        return (
            <div className="example_show" onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} onMouseMove={handleMove} ref={componentRef}>
                <img src={example1b} className="example_img before_img" alt="Пример до" style={clipWidth === false ? { clip: `rect(0px, ${width/2}px, ${height}px, 0px)` } : { clip: `rect(0px, ${clipWidth}px, ${height}px, 0px)` }}/>
                <img src={example1a} className="example_img after_img" alt="Пример после" style={clipWidth === false ? { clip: `rect(0px, ${width}px, ${height}px, ${width/2}px)` } : { clip: `rect(0px, ${width}px, ${height}px, ${clipWidth}px)` }}/>
                <div className="ex_show_interface"  style={interfacePosition === false ? { left: `${width/2}px` } : { left: `${interfacePosition}px` } }>
                    <span className="left_arrow"></span>
                    <span className="right_arrow"></span>
                </div>
            </div>
        )

}
export default ExampleImage;