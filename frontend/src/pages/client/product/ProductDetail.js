import React, { Component } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

class ProductDetail extends React.Component{
    constructor() {
        super();
        this.state = {
            product: null
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/products/${this.props.match.params.slug}`).then(res => {
            console.log (res.data)
            this.setState({product:res.data})
        })
    }

    render() {
        if (!this.state.product) {
            return null;
        }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                        <Carousel>

                        {this.state.product.variants[0].images && this.state.product.variants[0].images.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img
                                                className="d-block w-100"
                                                src={`http://localhost:8000/img/products/${image}`}
                                                alt={image}
                                                height="300"
                                            />
                        </Carousel.Item>))}
                        </Carousel>
                           
                        </div>
                        <div className="col-lg">
                            <h3>Product</h3>
                            <button>Alternatif 1</button>
                            <button>Alternatif 1</button>
                            <button>Alternatif 1</button>
                            <p>Harga</p>
                        </div>
                     </div>
                     <p>Deskripsi</p>
                </div>
            </div>
        )
    }
}

export default ProductDetail;