import { Link } from 'react-router-dom';

import './Navigation.css'

const Navigation = () => {
    return (
        <div className="centeredLinks">
            <Link to="/">Портфолио</Link>
            <Link to="/about">Обо мне</Link>
            <Link to="/contact">Связаться</Link>
        </div>
    );
};

export default Navigation;