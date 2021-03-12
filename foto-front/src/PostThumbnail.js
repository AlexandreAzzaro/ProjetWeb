import { NavLink } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import './css/PostThumbnail.css';

const PostThumbnail = ({post: {id, user, title, photo}}) => (
    <div className="thumbnail"> 
        <NavLink 
            to={`post/${id}`}
            style={{
                textDecoration: 'none',
                color: '#3F3F3F'
            }}>
            <h6>@{user} - {title}</h6>
            <Image 
                src = {photo}
                width = '50%'
            />
        </NavLink>
    </div>
);

export default PostThumbnail;