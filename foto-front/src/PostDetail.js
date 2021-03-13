import { useState, useRef, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Menu from "./Menu";
import back from "./img/back.svg"
import './css/PostDetail.css';
import data from './data'
import { Container, Row, Image, Col } from 'react-bootstrap';
import like from './img/like.svg';
import dislike from './img/dislike.svg';

export default function PostDetail() {

    const { id } = useParams();
    
    // const [posts, setPosts] = useState([]);

	// useEffect(() => {
	// 	setPosts(data);
	// }, []);

    const post = getPostById(data,id);
  

    function getPostById(tab,id) {
        return tab.find(el => el.id === id)
    }

    return(
        <div className='postDetail'>
            <Menu /><br/><br/><br/><br/>
            <Container className='container'>
                <Row>
                    <NavLink 
                        className='back-button'
                        to="/feed">
                        <Image 
                            src = {back}
                            width='35px'
                            height='35px'/>
                    </NavLink>
                </Row>
                <Row>
                    <Col>
                        <h4 className='title'>@{post.user} - {post.title}</h4>
                    </Col>
                </Row>
                <Row className='image' style={{marginLeft: '10%'}}>
                    
                    <Image 
                        src = {post.photo} 
                        width = "80%"/>
                </Row>
                <Row style={{marginBottom: '5%'}}>
                    <Col sm={2}></Col>
                    <Col>
                        <Image 
                            className='logo'
                            src = {like}
                            width='35px'
                            height='35px'/>
                        <b>{post.likes}</b>&nbsp;&nbsp;&nbsp;
                        <Image 
                            className='logo'
                            src = {dislike}
                            width='35px'
                            height='35px'/>
                        <b>{post.dislikes}</b>
                    </Col>
                    
                    <Col>
                        <b>{post.creation_date}</b>
                    </Col>
                </Row>
                <Row>
                    <h6>Tags :</h6> 
                </Row>
                <Row style={{marginBottom: '5%'}}>
                {post.tags.map(tag => (
                        <span>{tag}&nbsp;</span>
                    ))}
                </Row>
                <Row>
                    <h6>Description :</h6>
                </Row>
                <Row style={{textAlign:'justify'}}>
                    <p>{post.caption}</p>
                </Row>
            </Container>
        </div> 
    );
}
