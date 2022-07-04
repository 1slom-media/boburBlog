import { Link } from 'react-router-dom';
import NotFound from '../images/err.png';
import {IoIosArrowForward} from 'react-icons/io';
import './error.css';

export const Error=()=>{
    return(
        <div className="error">
            <img src={NotFound} className='error_img' alt="status 404" />
            <h4 className="error_heading">Page not found - 404</h4>
            <p className="error_text">This page not found (deleted or never exists). <br /> Try a phrase in search box or back to home and start again.</p>
            <Link className='error_link' to='/'>TAKE ME HOME! <IoIosArrowForward/></Link>

        </div>
    )
}