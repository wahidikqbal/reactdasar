import React from "react";

const Post = (props) => {

    return(
        <div className="post">
            <div className="image-thumb">
                <img src="https://dummyimage.com/200x150/000/fff.png&text=hello" alt="" />
            </div>
            <div className="content">
                <p className="title">{props.data.title}</p>
                <p className="desc">{props.data.body}</p>
            </div>
            <div>
                <button className="update" onClick={()=> props.update(props.data)}> Update </button>
            </div>
            <div>
                <button className="remove" onClick={()=> props.remove(props.data.id)}> Delete </button>
            </div>
        </div>
    )
}

export default Post;