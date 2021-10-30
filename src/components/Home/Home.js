import React, { useEffect, useState } from 'react';
import './Home.css';
import { Carousel, Row } from 'react-bootstrap';
import Services from '../Services/Services';
import { addToDb } from '../../utilitis/localStorage';
import Cart from '../Cart/Cart';
import useCart from '../../hooks/useCart';

const Home = () => {
    const [services, setServices] = useState([])
    const [cart, setCart] = useCart()

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);

    const addToCart = service => {
        const newCart = [...cart, service];
        setCart(newCart);
        addToDb(service.key);
    }
    return (
        <div className="container">
            <div className="carousel-wrapper">
            <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src="https://ddnews.gov.in/sites/default/files/cox%20baazar.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h5>Kuakata sea beach</h5>
                <p>Best place for tour. don't mistake to enjoy</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/2e/10.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5>Kuakata sea beach</h5>
                <p>Best place for tour. don't mistake to enjoy</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src="https://3.bp.blogspot.com/-BvOricPqO4Y/XLFulIL8b5I/AAAAAAAAAGQ/NbFTszZADm0YHGJblOJtKgCqdpRo55QygCLcBGAs/w1200-h630-p-k-no-nu/Kuakata%2Bsea%2Bbeach%2BKalapara.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5>Kuakata sea beach</h5>
                <p>Best place for tour. don't mistake to enjoy</p>
                </Carousel.Caption>
            </Carousel.Item>
            
            </Carousel>
            </div>
            <div className="services-wrapper">
                <div className="services-title">
                    <h1>Services</h1>
                </div>
                <div className="service-section">
                <div className="services">
                    {
                        <Row xs={1} md={2} className="g-4">
                        {services.map(service => (
                            <Services
                            addTocart={addToCart}
                            key={service._id} 
                            service={service}
                            ></Services>
                        ))}
                        </Row>
                    }
                </div>
                <div className="cart">
                    <Cart cart={cart}></Cart>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;