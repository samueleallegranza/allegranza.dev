import React from 'react';
import './ArticleCard.css';
import './MobileArticleCard.css';

import { Breakpoint, BreakpointProvider } from "react-socks";

const ArticleCard = (props) => {
    return (
        <div>
            <BreakpointProvider>
                <Breakpoint customQuery="(min-width: 641px)">
                    <div className="ArticleCard">
                        <div className="img">
                            <div className="cover">
                                <img src={require(`../../images/${props.img}`).default}></img>
                            </div>
                        </div>
                        <div className="content">
                            <div className="tags">
                                {props.tags.map(tag => <div className="tag">{tag}</div>)}
                            </div>
                            <div className="title">{props.title}</div>
                            <div className="desc">{props.desc}</div>
                            <div className="btn">
                                <a href="https://google.it">Read more</a>
                            </div>
                        </div>
                    </div>
                </Breakpoint>

                <Breakpoint customQuery="(max-width: 640px)">
                    <div className="MobileArticleCard">
                        <div className="img">
                            <div className="cover"></div>
                            <div className="img-container">
                                <img src={require(`../../images/${props.img}`).default}></img>
                            </div>
                        </div>
                        <div className="content">
                            <div className="title">{props.title}</div>
                            <div className="tags">
                                {props.tags.map(tag => <div className="tag">{tag}</div>)}
                            </div>
                        </div>
                    </div>
                </Breakpoint>
            </BreakpointProvider>
        </div>
    );
}

export default ArticleCard;