import React, {Component} from "react";
import YoutubeComp from "../../components/YoutubeComp/YoutubeComp";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";

class YouTube extends React.Component{
    state = {
        showComponent: true
    }
    componentDidMount(){
        setTimeout(()=> {
            this.setState({
                showComponent: false
            })
        }, 3000)
    }
    render(){
        return (
            <div>
                <h4> Youtube Component</h4>
                <hr />
                <YoutubeComp 
                time="7.12" 
                title="Turorial React JS-Bagian 1" 
                desc="1x ditonton. 2 hari yang lalu"/>

                <YoutubeComp 
                time="5.14" 
                title="Turorial React JS-Bagian 2" 
                desc="230x ditonton. 10 hari yang lalu"/>

                <YoutubeComp 
                time="3.12" 
                title="Turorial React JS-Bagian 3" 
                desc="500x ditonton. 22 hari yang lalu"/>

                <YoutubeComp/>
                {
                    this.state.showComponent ?
                    <LifeCycleComp/>
                    : null
                }
            </div>
        )
    }
}

YoutubeComp.defaultProps = {
    time: "00.00",
    title: "Title",
    desc: "xx ditonton, x hari yang lalu"
}

export default YouTube;