import { NavLink } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import './css/PostThumbnail.css';

const PostThumbnail = ({post: {id, username, title, photo}}) => (
    <div className="thumbnail"> 
        <NavLink 
            to={`post/${id}`}
            style={{
                textDecoration: 'none',
                color: '#3F3F3F'
            }}>
            <h5>@{username} - {title}</h5>
            <Image 
                src = {photo}
                width = '50%'
            />
        </NavLink>
    </div>
);

export default PostThumbnail;