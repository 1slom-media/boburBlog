import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from '../../images/Subtract.svg';
import {AiOutlineSearch,AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import './header.css';
import { useAuth } from "../../../../hooks/useAuth";
import { useFilter } from "../../../../hooks/useFilter";

export const Header=()=>{
    const [click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);
    const {token}=useAuth();
    const{setSearch}=useFilter();

    return(
        <header className="header">
            <div className="header_wrapper">
                <div className="logo">
                    <Link to='/' ><img src={Logo} alt="bobur blog saytining yuzi bo`lgan uning logosi" /></Link>
                    <h4 className="logo_heading">BoburBlog</h4>
                </div>
                {token && (
                    <>
                        <div className={click ?'nav nav_active': 'nav'}>
                            <Link className="nav_link nav_link-active" to='/'>All</Link>
                            <Link className="nav_link" to='/designtheory'>Design Theory</Link>
                            <Link className="nav_link" to='/ux'>UX</Link>
                            <Link className="nav_link" to='/ui'>UI</Link>
                            <Link className="nav_link" to='/typography'>Typography</Link>
                        </div>
                        <div className="hamburger" onClick={handleClick}>
                            {click ? <AiOutlineClose size={32} style={{color:'#000'}}/> : <AiOutlineMenu size={32} style={{color:'#000'}}/>}
                        </div>
                    </>
                )}
            </div>
            {token &&(
            <div className="search_form">
                <input className="search_input" type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                <button className="search_btn"><AiOutlineSearch size={20}/></button>
            </div>
            )}
        </header>
    )
}