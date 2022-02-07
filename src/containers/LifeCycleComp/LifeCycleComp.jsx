import React, {Component} from "react";
import "./LifeCycleComp.css"

class LifeCycleComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
        }
        console.log("constructor")
    }
    

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("componentDidMount")
        // setTimeout(()=> {
        //     this.setState({
        //         count: 3,
        //     })
        // }, 2000);
    }
    
    shouldComponentUpdate (nextProps, nextState) {
        console.group("shouldComponentUpdate")
        console.log("nextProps : ", nextProps)
        console.log("nextState : ", nextState)
        console.log("this.state : ", this.state)
        console.groupEnd()

        if(nextState.count <= 5) {
            return true;
        } else return false
    }

    getSnapshotBeforeUpdate(prevProps, prevstate){
        console.log("getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate (prevProps, PrevState, snapshot){
        console.log("componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }


    ubahNilai = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    tombolReset = () => {
        this.ubahNilai(0)
    }
    render() {
        return (
            <div>
                <h4> LifeCycle Componenet</h4>
                <hr />
                <p> ini adalah tombol penghitung 1-5</p>
                <button className="btn" onClick={this.ubahNilai}> Component Button {this.state.count} </button>
            </div>
        )
    }
}

export default LifeCycleComp;