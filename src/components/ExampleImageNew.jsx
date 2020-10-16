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
            if (cursorPosition < 1) {
                setInterfacePosition(0); 
            } else if (cursorPosition > width) {
                setInterfacePosition(`${width}`);
            } else {
                setInterfacePosition(cursorPosition);
            }
            console.log(cursorPosition);
            setClipWidth(cursorPosition);
            // console.log(`left pos: ${clipWidth}`);
        }
    }

    // const handleMove = (e) => {
    //     if(activeMoving) {
    //         e.preventDefault();
    //         const rect = componentRef.current.getBoundingClientRect();
    //         const cursorPosition = e.clientX - rect.left;
    //         // center = cursorPosition;
    //         setInterfacePosition(`${cursorPosition}`);
    //         setClipWidth(cursorPosition);
    //         // console.log(`left pos: ${clipWidth}`);
    //     }
    // }

    // const handleMouseDown = (e) => {
    //     e.preventDefault();
    //     setActiveMoving(true);
    // }

    // const handleMouseUp = (e) => {
    //     e.preventDefault();
    //     setActiveMoving(false);
    // }

        return (
            <div className="example_back" onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove} ref={componentRef}>
                <img src={example1a} className="example_img1 before_img" alt="Пример до" style={{width: `${width}px`}}/>
                <div className="example_front" style={clipWidth === false ? {width: `${width/2}px`} : {width: `${clipWidth}px`}}>
                <img src={example1b} className="example_img1 after_img" alt="Пример после" style={{width: `${width}px`}}/>
                </div>
                <div className="ex_show_interface" onTouchStart={handleTouchStart}  style={interfacePosition === false ? { left: `${width/2}px`} : { left: `${interfacePosition}px`}}>
                    <span className="left_arrow"></span>
                    <span className="right_arrow"></span>
                </div>
            </div>
        )

}
export default ExampleImage;