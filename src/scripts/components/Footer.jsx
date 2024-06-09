import '../../stylesheets/css/main.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__block">
                    <div className="footer__social__box">
                        <div className="footer__social__top">
                            <a href="#" className="footer__logo">LOGO</a>
                            <p className="footer__text">Lorem ipsum dolor sit amet, cons ecte tur adipiscing elit. Sed ullam vitae</p>
                        </div>
                        <a href="#" className="footer__social__icons">
                            <img src="/src/assets/footer-social.svg" alt="icon" />
                        </a>
                    </div>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <ul className="footer__inner__list">
                                <li className="footer__title__item">
                                    <h3 className="footer__sub__title">Services</h3>
                                </li>
                                <li className="footer__inner__item">
                                    <a href="#" className="footer__link">Gift Card</a>
                                </li>
                                <li className="footer__inner__item">
                                    <a href="#" className="footer__link">Mobile App</a>
                                </li>
                                <li className="footer__inner__item">
                                    <a href="#" className="footer__link">Shipping & Delivery</a>
                                </li>
                                <li className="footer__inner__item">
                                    <a href="#" className="footer__link">Order Pickup</a>
                                </li>
                                <li className="footer__inner__item">
                                    <a href="#" className="footer__link">Account Signup</a>
                                </li>
                            </ul>
                        </li>
                        <li className="footer__item">
                            <ul className="footer__inner__list">
                                <li className="footer__title__item">
                                    <h3 className="footer__sub__title">Help</h3>
                                </li>
                                <li className="footer__inner__item">
                                    <a href="#" className="footer__link">ShopCart Help</a>
                                </li>
                                <li className="footer__inner__item">
                                    <a href="#" className="footer__link">Returns</a>
                                </li>
                                <li className="footer__inner__item">
                                    <a href="#" className="footer__link">Track Orders</a>
                                </li>
                                <li className="footer__inner__item">
                                    <a href="#" className="footer__link">Contact Us</a>
                                </li>
                                <li className="footer__inner__item">
                                    <a href="#" className="footer__link">Feedback</a>
                                </li>
                                <li className="footer__inner__item">
                                    <a href="#" className="footer__link">Security & Fraud</a>
                                </li>
                            </ul>
                        </li>
                        <li className="footer__item">
                            <ul className="footer__inner__list">
                                <li className="footer__title__item">
                                    <h3 className="footer__sub__title">About Us</h3>
                                </li>
                                <li className="footer__inner__item">
                                    <a href="#" className="footer__link">News & Blog</a>
                                </li>
                                <li className="footer__inner__item">
                                    <a href="#" className="footer__link">Help</a>
                                </li>
                                <li className="footer__inner__item">
                                    <a href="#" className="footer__link">Press Center</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="footer__cap">
                    <ul className="footer__cap__list">
                        <li className="footer__cap__item">
                            <a href="#" className="footer__cap__link">LOGO</a>
                        </li>
                        <li className="footer__cap__item">
                            <a href="#" className="footer__cap__link">Help Center</a>
                        </li>
                        <li className="footer__cap__item">
                            <a href="#" className="footer__cap__link">Privacy & Policy</a>
                        </li>
                        <li className="footer__cap__item">
                            <a href="#" className="footer__cap__link">Terms of Service</a>
                        </li>
                    </ul>
                    <span className="footer__cap_text">All right reserved by LOGO | 2023</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer