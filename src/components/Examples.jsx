import React, { useState, useEffect } from 'react';
import example1b from '../img/example1b.jpg';
import example1a from '../img/example1a.jpg';
import ExampleImage from './ExampleImage';

function Examples() {

    return (
        <div className="examples_wraper">
            <h2>Примеры работ</h2>
            <div className="examples_container">
                <ExampleImage />
            </div>    
        </div>

    );
}

export default Examples;