import {Link} from 'react-router-dom';
import {BsClock} from 'react-icons/bs';
import './post-item.css';
import { useFilter } from '../../hooks/useFilter';

export const PostItem=({posts})=>{
    const{search}=useFilter();
    const filtered= posts.filter((value) => {
        if (search === "") {
          return value;
        } else if (
          value.title.toLowerCase().includes(search.toLowerCase())
        ) {
          return value;
        }

        return false;
      });
    return(
        <ul className='post_list'>
            {filtered.map((post)=>(
                <li key={post.id} className='post_item'>
                    <div className="box">
                        <p className="post_item-text">September 24.2020</p>
                        <p className="post_item-text">Design theory</p>
                    </div>
                    <Link className='post_link' to={`/posts/${post.id}`}>
                    <h4 className='post_title'>{post.title}</h4>
                    </Link>
                    <p className="post_item-text"><BsClock style={{marginRight:'10px'}}/> 3 minutes read</p>
                </li>
            ))}
        </ul>
    )
}