import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

class ProductList extends React.Component{
    constructor() {
        super();
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/products').then(res => {
            console.log (res.data)
            this.setState({products:res.data})
        })
    }

    render() {
        console.log(this.state.products)
        if (this.state.products.length === 0) {
            return null
        }

        return (


            <div className="container">
                <div className="row">
                {this.state.products.map(product => (
                    <div className="col col-md-4" style={{ marginBottom: '30px' }}>
                        <div className="card">
                            <img src={`http://localhost:8000/img/products/${product.variants[0].images[0]}`} height = "200 px"  className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.variants[0].description}</p>
                                <p className="card-text">Rating score : {product.rating}</p>
                                <p className="card-text">Discount : {product.variants[0].discount} %</p>
                                {product.variants[0].discount !== 0 && <del className="card-text">Rp. {product.variants[0].price}</del>}
                                <p className="card-text">Rp. {product.variants[0].price-(product.variants[0].price * product.variants[0].discount/100)}</p>
                                <Link to={`product-detail/${product.slug}`}><button className="btn btn-primary">View Detail</button></Link>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        );
    }
}    
    

export default ProductList;