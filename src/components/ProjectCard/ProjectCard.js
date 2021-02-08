import React from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => {
    return (
        <div className="Card">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    );
}

export default ProjectCard;