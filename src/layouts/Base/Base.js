import React from 'react';
import "./Base.css";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const BaseLayout = (props) => {
    return(
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default BaseLayout;