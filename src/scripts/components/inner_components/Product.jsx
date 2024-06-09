import '../../../stylesheets/css/main.css'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { ProgressBar } from 'react-loader-spinner'

const Products = () => {
    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setLoader(true)
        try {
            const fetchData = async () => {
                const response = await fetch('https://fakestoreapi.com/products')
                const json = await response.json()

                setProducts(json)
            }
            fetchData()
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false)
        }

    }, [])

    const addStar = (rate) => {
        let star = '★'.repeat(Math.round(rate))
        for (let i = 0; i < 5 - Math.round(rate); i++) {
            star += `☆`
        }

        return star;
    }

    const btnClick = (data) => {
        Swal.fire({
            title: 'Add to cart?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, add it!'
        }).then((result) => {
            if (result.isConfirmed) {

                const arr = JSON.parse(localStorage.getItem('cart')) || []
                arr.push(data)
                localStorage.setItem('cart', JSON.stringify(arr))
                window.location.reload()
            }
        })
    }

    return (
        <section className="products">
            <div className="container">
                <div className="products__block">
                    <h2 className="products__title">Headphones For You!</h2>
                    <ul className="products__content">
                        {loader ? <ProgressBar
                            visible={true}
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="progress-bar-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        /> : null}
                        {products.map((item) => {
                            return (
                                <li className="products__item" key={item.id}>
                                    <div className="products__img_block">
                                        <img src={item.image} alt="img" />
                                    </div>
                                    <div className="products__info">
                                        <h3 className="products__item__title">{item.title}</h3>
                                        <p className="products__item__price">${item.price}</p>
                                    </div>
                                    <p className="products__item__text">{item.description}</p>
                                    <div className="products__rating">
                                        <div className="products__rate">{addStar(item.rating.rate)}</div>
                                        <span className="products__item__count">({item.rating.count})</span>
                                    </div>
                                    <button onClick={() => btnClick(item)} className="products__item__btn" >Add To Cart</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Products