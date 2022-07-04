import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {BsClock} from 'react-icons/bs';
import Img from '../images/single.png';
import Clap from '../images/clap.svg';
import Share from '../images/share.svg';
import './post-single.css';

export const PostSingle=()=>{
    const {postId}=useParams();
    const [user,setUser]=useState({});
    const [post,setPost]=useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then (res=>res.json())
        .then (data=>setPost(data))
        .catch (err=>console.log(err));

    },[postId]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then (res=>res.json())
        .then(data=>setUser(data))
        .catch (err=>console.log(err));
    },[post]);

    return(
        <div className="post_single">
            <div className="reaction">
                <div className="reaction_box">
                    <img src={Clap} alt="clap icon" />
                    <p className="reaction_text">125</p>
                </div>
                <div className="reaction_box">
                    <img src={Share} alt="share icon" />
                    <p className="reaction_text">70</p>
                </div>
            </div>
            <div className="post_about">
                <p className="about_text">User interface</p>
                <h3 className="about_heading">{user.name}</h3>
                <h4 className="about_heading">@{user.username}</h4>
                <p className="post_text">October 24, 2020  | <BsClock style={{marginRight:'10px', marginLeft:"5px"}}/> 3 minutes read </p>  
                <img className="post_img" src={Img} alt="post single img" />
                <h4 className="post_heading">{post.title}</h4>
                <p className="post_body">{post.body}</p>
            </div>
        </div>
    )
}