import '../../stylesheets/css/main.css';
import { useRef, useState, useEffect } from 'react';

const Header = () => {
    const arr = JSON.parse(localStorage.getItem('cart')) || [];
    const [cart, setCart] = useState(arr.length);
    const buttonRef = useRef(null);

    
    
    useEffect(() => {
        buttonRef.current.textContent = cart;
    }, [cart]);

    return (
        <header className="header">
            <div className="container">
                <div className="header__block">
                    <a href="#" className="header__logo">LOGO</a>
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__item">
                                <a href="#" className="header__link">Categories</a>
                            </li>
                            <li className="header__item">
                                <a href="#" className="header__link">What’s new</a>
                            </li>
                            <li className="header__item">
                                <a href="#" className="header__link">Sales</a>
                            </li>
                            <li className="header__item">
                                <a href="#" className="header__link">Help</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__social">
                        <form className="header__form">
                            <input type="text" className="header__input" placeholder='Search Products' />
                            <button type="submit"></button>
                        </form>
                        <div className="header__btn__box">
                            <button className="header__btn">Account</button>
                            <button className="header__btn">Cart<span className="header__btn__span" ref={buttonRef}></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header 