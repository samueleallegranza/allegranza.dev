import React from 'react';
import './WritingPage.css';

import EventNoteIcon from '@material-ui/icons/EventNote';
import TimerIcon from '@material-ui/icons/Timer';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';

const WritingPage = () => {
    const props = {
        img: "esp32.jpeg",
        title: ""
    };
    
    return (
        <div>
            <div className="WritingHero">
                <div className="imgCover" />
                <div className="imgContainer">
                    <img src={require("../../images/" + props.img).default}></img>
                </div>
                <div className="titleContainer">
                    <h1>ESP32 Programming - How to start with Espressif IDF</h1>
                </div>
            </div>
            
            <div className="WritingIntro">
                Faucibus turpis in eu mi. Massa sapien faucibus et molestie ac feugiat. Arcu odio ut sem nulla pharetra diam.
            </div>

            <div className="WritingAuthor">
                <div className="photo">
                    <img src={require("../../images/" + "author.png").default} />
                </div>
                <div className="name">Samuele Allegranza</div>
                <div className="info">
                    <TimerIcon className="info-icon"/>
                    <div className="readtime">5 Min read</div>
                    <div className="divider">&nbsp;</div>
                    <EventNoteIcon className="info-icon"/>
                    <div className="date">Dec 05, 2020</div>
                </div>
                <div className="socials">
                    <a href="https://www.linkedin.com"><LinkedInIcon className="social" /></a>
                    <a href="https://www.twitter.com"><TwitterIcon className="social" /></a>
                    <a href="https://www.github.com"><GitHubIcon className="social" /></a>
                    <a href="https://www.telegram.org"><TelegramIcon className="social" /></a>
                </div>
            </div>

            <div className="WritingContent">
                <h1>What is an ESP32?</h1>
                <p>Faucibus turpis in eu mi. Massa sapien faucibus et molestie ac feugiat. Arcu odio ut sem nulla pharetra diam. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Leo urna molestie at elementum eu facilisis sed odio. Nisl nisi scelerisque eu ultrices vitae auctor eu augue.</p>
                <h1>Getting started</h1>
                <p>Faucibus turpis in eu mi. Massa sapien faucibus et molestie ac feugiat. Arcu odio ut sem nulla pharetra diam. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Leo urna molestie at elementum eu facilisis sed odio. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Faucibus turpis in eu mi. Massa sapien faucibus et molestie ac feugiat. Arcu odio ut sem nulla pharetra diam. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Leo urna molestie at elementum eu facilisis sed odio. Nisl nisi scelerisque eu ultrices vitae auctor eu augue.</p>
                <img src={require("../../images/" + props.img).default}></img>
                <h1>Your first hello-world on the ESP</h1>
                <p>Faucibus turpis in eu mi. Massa sapien faucibus et molestie ac feugiat. Arcu odio ut sem nulla pharetra diam. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Leo urna molestie at </p>
                <p>Faucibus turpis in eu mi. Massa sapien faucibus et molestie ac feugiat. Arcu odio ut sem nulla pharetra diam. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Leo urna molestie at </p>
            </div>
        </div>
    );
}

export default WritingPage;