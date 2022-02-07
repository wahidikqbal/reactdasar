import React from "react";

class CardProduct extends React.Component {

    state = {
        order: 4,
    }

    //kirim nilai ke product.jsx
    handleKirimNilai = (nilai) => {
        this.props.iniPropsku(nilai)
    }

    handleTambah = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleKirimNilai(this.state.order)
        })
    }

    handleKurangi = () => {
        if(this.state.order) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleKirimNilai(this.state.order)
            })
        }
    }

    render(){
        return(
            <div>
                    <div className="card">
                        <div className="desc">
                            <p> Maubeli daging ayam berapa?</p>
                            <p> Rp 5000/kg</p>
                        </div>
                        <div className="tombol">
                            <button onClick={this.handleKurangi}> kurangi </button>
                            <button onClick={this.handleTambah}> tambah</button>
                            <p>Kerjang Anda sekarang : {this.state.order} kg</p>
                            <p> Total harga = {this.state.order * 5000}</p>
                        </div>
                    </div>
            </div>
        )
    }
}

export default CardProduct;