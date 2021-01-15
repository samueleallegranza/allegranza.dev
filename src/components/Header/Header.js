import React from 'react'
import './Header.css'

const Logo = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="95.728" height="56.944" viewBox="0 0 95.728 56.944">
            <defs>
                <linearGradient id="linear-gradient" x1="0.196" y1="1" x2="0.896" y2="-0.703" gradientUnits="objectBoundingBox">
                    <stop offset="0" stop-color="#e32235" />
                    <stop offset="1" stop-color="#ec7e10" />
                </linearGradient>
            </defs>
            <path id="Path_4" data-name="Path 4" d="M6.144-20.188a6.968,6.968,0,0,0,6.87,7.012,6.983,6.983,0,0,0,6.946-7.012A6.983,6.983,0,0,0,13.014-27.2,6.968,6.968,0,0,0,6.144-20.188ZM60.652-69.042H51.517L24.791-13.022h9.059Zm40.465,13.716C99.909-61.49,94.926-69.5,81.941-69.5c-10.116,0-18.647,7.4-18.647,17.106,0,8.245,5.511,13.87,14.042,15.642l7.474,1.541c4.152.848,6.493,3.313,6.493,6.473,0,3.853-3.1,6.7-8.682,6.7-7.55,0-11.249-4.854-11.7-10.248l-9.663,2.62c.83,7.783,7.1,17.106,21.29,17.106,12.457,0,19.327-8.476,19.327-16.875,0-7.706-5.209-14.178-14.948-16.1L79.45-47c-3.926-.771-5.813-3.159-5.813-6.164,0-3.622,3.322-6.935,8.38-6.935,6.795,0,9.21,4.7,9.739,7.706Z" transform="translate(-6.144 69.504)" fill="url(#linear-gradient)" />
        </svg>
    );
}

const Header = () => {
    return (
        <div className="Header">
            <div className="HeaderGroup">
                <a><Logo></Logo></a>
                <a>Writings</a>
                <a>Projects</a>
                <a>Contact</a>
            </div>
        </div>
    );
}

export default Header