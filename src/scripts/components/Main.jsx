import '../../stylesheets/css/main.css';
import Products from './inner_components/Product.jsx';

const Main = () => {
    return (
        <main>
            <section className="hero">
                <div className="container">
                    <div className="hero__block">
                        <div className="hero__content">
                            <h2 className="hero__title">Lorem ipsum dolor sit amet, cons ecte tur adipiscing elit.</h2>
                            <button className="hero__btn">Shop Now</button>
                        </div>
                    </div>
                    <div className="hero__filters">
                        <ul className="hero__filters__list">
                            <li className="hero__filters__item">
                                <a href="#" className="hero__filters__link">Headphone Type</a>
                            </li>
                            <li className="hero__filters__item">
                                <a href="#" className="hero__filters__link">Price</a>
                            </li>
                            <li className="hero__filters__item">
                                <a href="#" className="hero__filters__link">Material</a>
                            </li>
                            <li className="hero__filters__item">
                                <a href="#" className="hero__filters__link">Color</a>
                            </li>
                            <li className="hero__filters__item">
                                <a href="#" className="hero__filters__link">All Filters</a>
                            </li>
                        </ul>
                        <button className="hero__filters__btn">Sort By</button>
                    </div>
                </div>
            </section>

            <Products />
        </main>
    )
}

export default Main