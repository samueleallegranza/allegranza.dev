import React from 'react';
import './ArticleCard.css';

const ArticleCard = (props) => {
    return (
        <div className="ArticleCard">
            <div className="img">
                <img src={require("../../images/esp32.jpeg").default} width="350"></img>
            </div>
            <div className="content">
                <div className="tags">
                    {props.tags.map(tag => <div className="tag">{tag}</div>)}
                </div>
                <div className="title">{props.title}</div>
                <div className="desc">{props.desc}</div>
                <div className="btn">> Read more</div>
            </div>
        </div>
    );
}

export default ArticleCard;