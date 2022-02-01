import React from "react";
import "./YoutubeComp.css"

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/t7Um0AOyTEA/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAiuVqdPuQ7-zITEojVcVoW8fZS2w" alt="" />
                <p className="time"> {props.time} </p>
            </div>
            <p className="title"> {props.title} </p>
            <p className="desc"> {props.desc} </p>
        </div>
    )
}

export default YoutubeComp;