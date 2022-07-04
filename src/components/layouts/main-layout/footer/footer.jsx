import Logo from '../../images/flogo.svg';
import './footer.css';
import {Link} from 'react-router-dom';

export const Footer=()=>{
    return(
        <footer className="footer">
            <div className="footer_container">
                <div className="footer_logo">
                    <Link to='/'><img src={Logo} alt="Abror blog saytining logosi" /></Link>
                    <h4 className="footer_heading">Bobur</h4>
                </div>
                <div className="footer_navs">
                    <div className="footer_nav">
                        <h3 className="nav_heading">FIGHT WITH ME ON:</h3>
                        <Link className="footer_link" to='https://twitter.com'>Twitter</Link>
                        <Link className="footer_link footer_link-active" to='https://instagram.com'>Instagram</Link>
                        <Link className="footer_link" to='https://web.telegram.org'>Telegram</Link>
                        <Link className="footer_link" to='https://youtube.com'>YouTube</Link>
                        <Link className="footer_link" to='https://figma.com'>Figma</Link>
                    </div>
                    <div className="footer_nav">
                        <h3 className="nav_heading">WHAT I HAVE DONE:</h3>
                            <Link className="footer_link" to='https://xalqkutubxonasi.uz'>Xalq Kutibxonasi</Link>
                            <Link className="footer_link footer_link-active" to='/'>Websitee</Link>
                            <Link className="footer_link" to='/'>Website</Link>
                            <Link className="footer_link" to='https://play.google.com'>Play Market</Link>
                            <Link className="footer_link" to='https://www.apple.com'>App Store</Link>
                    </div>
                    <div className="footer_nav">
                        <Link className="footer_link" to='/'>Contact</Link>
                        <Link className="footer_link footer_link-active" to='/'>Blog</Link>
                        <Link className="footer_link" to='/'>Dribbble</Link>
                        <Link className="footer_link" to='/'>Behance</Link>
                    </div>
                </div>

            </div>
        </footer>
    )
}