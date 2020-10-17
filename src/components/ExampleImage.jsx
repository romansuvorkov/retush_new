import React, { useRef, useState, useEffect } from 'react';
import example1b from '../img/example1b.jpg';
import example1a from '../img/example1a.jpg';
import useSizeFunction from '../functions/useSizeFunction';

function ExampleImage() {

    const componentRef = useRef();
    const { width, height, center } = useSizeFunction(componentRef);
    const [exampleWidth, setExampleWidth] = useState(false);

    const handleChange = (e) => {
        setExampleWidth(e.target.value);
    }

        return (
            <div className="example_back" ref={componentRef}>
                <img src={example1a} className="example_img1 before_img" alt="Пример до" style={{width: `${width}px`}}/>
                <div className="example_front" style={exampleWidth === false ? {width: `50%`} : {width: `${exampleWidth}%`}}>
                <img src={example1b} className="example_img1 after_img" alt="Пример после" style={{width: `${width}px`}}/>
                </div>
                <input type="range" onChange={handleChange} className="example_range" aria_label="Percent of revealed content" min="0" max="100"></input>
                <span className="ex_handle" style={exampleWidth === false ? {left: `50%`} : {left: `${exampleWidth}%`} }></span>
            </div>
        )

}
export default ExampleImage;