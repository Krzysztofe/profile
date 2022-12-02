import React from 'react';
import {Link} from "react-router-dom";



const Header = () => {
    return (
        <>
            <h1>krzysztof król </h1>
            <Link to = "/form">Formularz rehestracyjny </Link>
        </>
    );
};

export default Header;