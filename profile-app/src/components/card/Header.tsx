import {Link} from "react-router-dom";



const Header = () => {
    return (
        <header>
            <div className="wrapper wrapper--header">
                <h1 className='header__h1'>krzysztof król </h1>
                <Link to = "/form">
                    <button className='header__button'>formularz <br/>rejestracyjny</button>
                </Link>
            </div>
        </header>
    );
};

export default Header;