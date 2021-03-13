import { useState, useRef, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Menu from "./Menu";
import back from "./img/back.svg"
import './css/PostDetail.css';
import data from './data'
import { Container, Row, Image } from 'react-bootstrap';

export default function PostDetail() {

    const { id } = useParams();
    
    const [posts, setPosts] = useState([]);

	useEffect(() => {
		setPosts(data);
	}, []);

  

    function getPostById(tab,id) {
        return tab.find(el => el.id === id)
    }

    return(
        <div className='postDetail'>
            {/* <Menu /> */}
            <Container>
                <Row>
                    <NavLink to="/feed">
                        <Image 
                            src = {back}/>
                    </NavLink>
                </Row>
            </Container>
        </div> 
    );
}
