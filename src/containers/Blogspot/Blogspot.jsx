import React, { Component, Fragment, useState } from "react";
import "./Blogpost.css"
import Post from "../../components/Post/post"
import axios from "axios"
import AddPost from "../../components/Post/addpost";

class Blogspot extends React.Component {

    state = {
        posts: [],
        fromBlogPost: {
            title: '',
            body: ''
        }
    }

    getApi = async () => {
        await axios.get("http://localhost:3004/posts?_sort=id&_order=desc").then((res) => {
            //console.log(res)
            this.setState({
                posts: res.data
            })
        })
    }

    handlerRemove = async (id) => {
        const ask = window.confirm("yakin mau di delete?")
        if(ask){
            await axios.delete(`http://localhost:3004/posts/${id}`).then((res) => {
            console.log(res, 'post deleted')
            })
        }
        this.getApi();
    }

    componentDidMount() {
        this.getApi();
    }

    //-----------create

    handlerChange = (e) => {
        e.preventDefault();
        const fromBlogPostNew = {...this.state.fromBlogPost}
        // const name = e.target.getAttribute('name')
        const value = e.target.value
        fromBlogPostNew[e.target.name] = value
        console.log('sedang diketik', value)
        this.setState({
            fromBlogPost: fromBlogPostNew
        })
    }
    
    handlerCreate = async (e) => {
        const ask = window.confirm('Yakin mau di post?')
        if(ask){
            await axios.post("http://localhost:3004/posts", this.state.fromBlogPost)
            .then(res => console.log('post created',res))
        }
        console.log(this.state.fromBlogPost)
        this.getApi()
    }

    //--------update
    handlerUpdate = async (data) => {
        await axios.put(`http://localhost:3004/posts/${data.id}`, this.state.fromBlogPost)
        .then(res => {
            console.log('updated', res, data)
        })
    }

    render() {
        return (
            <Fragment>
                <p className="section-title" >Blogpost</p>
                <AddPost addPost={this.handlerCreate} addChange={this.handlerChange} defValue={this.state}/>
                {this.state.posts.map(post => {
                    return <Post key={post.id} data={post} remove={this.handlerRemove} update={this.handlerUpdate} />
                })}
            </Fragment>
        )
    }
};

export default Blogspot;