import React from 'react';
import './Services.css';
import { Card, Col } from 'react-bootstrap';


const Services = (props) => {
    const {service, addTocart} = props;
    return (
        <div>
            
                <Col>
                <Card>
                    <Card.Img className="service-img" variant="top" src={service.img} />
                    <Card.Body className="bg-warning">
                    <Card.Title> <span className="text-white font-weight-bold">Tour Package : {service.name}</span> </Card.Title>
                    <Card.Text>
                        {service.description}
                    </Card.Text>
                    <Card.Text>
                        <span className="text-danger">Vanue :{service.vanue}</span>
                    </Card.Text>

                    <Card.Text>
                        Price : $ {service.price}
                    </Card.Text>
                        <button onClick={() => addTocart(service)} className="btn btn-success">Buy now</button>
                    </Card.Body>
                </Card>
                </Col>
                </div>
    );
};

export default Services;