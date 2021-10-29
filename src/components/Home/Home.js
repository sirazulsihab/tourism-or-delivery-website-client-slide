import React, { useEffect, useState } from 'react';
import './Home.css';
import { Carousel, Row } from 'react-bootstrap';
import Services from '../Services/Services';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
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
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/2e/10.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src="https://3.bp.blogspot.com/-BvOricPqO4Y/XLFulIL8b5I/AAAAAAAAAGQ/NbFTszZADm0YHGJblOJtKgCqdpRo55QygCLcBGAs/w1200-h630-p-k-no-nu/Kuakata%2Bsea%2Bbeach%2BKalapara.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            
            </Carousel>
            </div>
            <div className="services-wrapper">
                <div className="services-title">
                    <h1>Services</h1>
                </div>
                <div className="services">
                    {
                        <Row xs={1} md={2} className="g-4">
                        {services.map(service => (
                            <Services
                            key={service._id} 
                            service={service}
                            ></Services>
                        ))}
                        </Row>
                    
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;