import React from 'react';
import "./Base.css";
import Header from '../../components/Header/Header'

const BaseLayout = (props) => {
    return(
        <div>
            <Header />
            {props.children}
        </div>
    );
};

export default BaseLayout;