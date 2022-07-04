import { Link } from 'react-router-dom';
import RightArr from '../images/rightarr.svg';
import LeftArr from '../images/leftarr.svg';
import './pagination.css';

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    const Incr=pageNumbers.forEach(number=>number++);
  
    return (
      <nav>
        <ul className='pagination'>
            <li className="page-item"><img src={RightArr} alt="right arrow" /></li>
            {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                <Link onClick={() => paginate(number)} to='/' className='page-link'>
                    {number}
                </Link>
                </li>
            ))}
          <li className="page-item" onClick={Incr}><img src={LeftArr} alt="left arrow" /></li>
        </ul>
      </nav>
    );
  };