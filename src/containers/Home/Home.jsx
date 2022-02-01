import React, {Component} from "react";
import YoutubeComp from "../../components/YoutubeComp/YoutubeComp";

class Home extends React.Component{
    render(){
        return (

            <div>
                <p> Youtube Component</p>
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

                <YoutubeComp />
            </div>
        )
    }
}

YoutubeComp.defaultProps = {
    time: "00.00",
    title: "Title",
    desc: "xx ditonton, x hari yang lalu"
}

export default Home;