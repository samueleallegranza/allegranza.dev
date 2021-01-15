import React from 'react';
import './Homepage.css';

const GlowyBtn = (props) => {
    return(
        <div>
            <div className="BtnGlow"></div>
            <a href={props.href}>{props.text}</a>
        </div>
    );
};

const Homepage = () => {
    return (
        <div>
            <div className="Hero">
                <div className="HeroGroup">
                    <h1>Samuele Allegranza</h1>
                    <p>SW developer // Perpetual learner</p>
                    {/* <a href="https://google.it/">About me</a> */}
                    <GlowyBtn href="https://google.it/" text="About me" />
                </div>
            </div>
        </div>
    );
};

export default Homepage;