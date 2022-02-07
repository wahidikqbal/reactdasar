import React, {Component, Fragment} from "react";
import CardProduct from "../CardProduct/CardProduct";

class Product extends React.Component {

    state = {
        order: 4,
    }

    handleKirimNilai = (nilaiProduct) => {
        this.setState({
            order: nilaiProduct
        })
    }

    render(){
        return(
            <div>
                <Fragment>
                    <hr />
                    <div className="header">
                        <h4> BelanjaApa.com</h4>
                        <div className="count">
                            <p> keranjang : {this.state.order}</p>
                        </div>
                    </div>

                     {/* Child Component */}
                    <CardProduct iniPropsku={(nilaiProduct) => this.handleKirimNilai(nilaiProduct)}/>

                    <hr />
                </Fragment>
            </div>
        )
    }
}

export default Product;