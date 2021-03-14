import { NavLink } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import './css/PostThumbnail.css';

const PostThumbnail = ({post: {_id, username, title, imageUrl}}) => (
    <div className="thumbnail"> 
        <NavLink 
            to={`post/${_id}`}
            style={{
                textDecoration: 'none',
                color: '#3F3F3F'
            }}>
            <h5><b>@{username}</b> - {title}</h5>
            <Image 
                src = {imageUrl}
                width = '50%'
            />
        </NavLink>
    </div>
);

export default PostThumbnail;