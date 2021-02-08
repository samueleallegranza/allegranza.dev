import React from 'react';
import './GlowyBtn.css';

const GlowyBtn = (props) => {
    return (
        <div className="GlowyBtn">
            {/* <div className="GlowyBtn"></div> */}
            <a href={props.href}>{props.text}</a>
        </div>
    );
};

export default GlowyBtn;