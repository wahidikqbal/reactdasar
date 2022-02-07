import React, {useState} from "react";
import "./addpost.css"
import axios from "axios";

const AddPost = (props) => {
    // const [field, setfield] = useState({
    //     title: "",
    //     body: ""
    // });


    // const handlerChange = (e) => {
    //     const name = e.target.getAttribute('name')
    //     const value = e.target.value
    //     console.log('sedang diketik', name, value)
    //     setfield({
    //         ...field,
    //         [name]: value
    //     })
    // }

    // const handlerCreate = async (e) => {
        
    //     await axios.post("http://localhost:3004/posts", {
    //         title: field.title,
    //         body: field.body
    //     })
    //     .then(res => console.log('post created',res))
    // }

    return(
        <div className="from-add-post">
            
            <label htmlFor="title">Title</label>
            <input type="text" name="title" 
            id="" placeholder="Tulis Judul" 
            onChange={(e)=> props.addChange(e)}/>
            
            <label htmlFor="body"> Content </label>
            <textarea name="body" id="body-content" 
            cols="30" rows="10" placeholder="Tulis Content" 
            onChange={(e)=> props.addChange(e)}></textarea>
            <button className="btn-submit" onClick={()=> props.addPost()}>Simpan</button>
        </div>
    )
}

export default AddPost;