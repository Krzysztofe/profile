import React from 'react';
import Header from "./Header";
import Main from "./Main";

const CardMainComponent = () => {
    return (
        <div style={{minHeight: '120rem'}}>
            <Header/>
            <Main/>
        </div>
    );
};

export default CardMainComponent;