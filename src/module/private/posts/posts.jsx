import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import './posts.css';
import {FaFacebookF,FaTwitter,FaLinkedinIn} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {IoIosArrowForward} from 'react-icons/io';
import { Pagination, PostItem } from "../../../components";


export const Posts=()=>{
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>setPosts(data));
    },[])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return(
        <div className="posts">
            <div className="sidebar">
                <h4 className="sidebar_heading">What I do!</h4>
                <p className="sidebar_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.
                </p>
                <Link className="sidebar_link" to='/'>Explore me <IoIosArrowForward className="arrow"/></Link>
                <div className="socials">
                    <Link className="socials_link" to='/fasebook'><FaFacebookF/></Link>
                    <Link className="socials_link" to='/github'><BsGithub/></Link>
                    <Link className="socials_link" to='/twitter'><FaTwitter/></Link>
                    <Link className="socials_link" to='/linkidin'><FaLinkedinIn/></Link>
                </div>

            </div>
            <div className="recent_posts">
                <h3 className="recent_post-heading">Recent Posts</h3>
                <PostItem posts={currentPosts}/>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                />
            </div>
        </div>
    )
}