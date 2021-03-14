import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Menu from "./Menu";
import back from "./img/back.svg"
import './css/PostDetail.css';
import { Container, Row, Image, Col } from 'react-bootstrap';
import like from './img/like.svg';
import dislike from './img/dislike.svg';
import trash from './img/trash.svg';

export default function PostDetail({previous}) {

    const { id } = useParams();
    const [post, setPost] = useState({});
    
    useEffect(() => {
		fetch(`http://localhost:5000/api/postImg/getOneImg/${id}`)
			.then(response => response.json())
			.then(setPost);
	}, []);

    let delButton = "";

    function onClickDeletePost() {
        fetch(`http://localhost:5000/api/postImg/deleteImg/${id}`, {
            method: 'DELETE',
        })
    }

    if(previous === "profile/yourImages") {
        delButton = 
            <NavLink 
                className='logo'
                style={{marginLeft:'5%'}}
                onClick={onClickDeletePost}
                to={"/" + previous}>
                <Image 
                    src = {trash}
                    width='40px'
                    height='40px'/>
            </NavLink>;
    }

    return (
        <div className='postDetail'>
            <Menu /><br/><br/><br/><br/>
            <Container className='container'>
                <Row>
                    <NavLink 
                        className='back-button'
                        to={"/" + previous}>
                        <Image 
                            src = {back}
                            width='40px'
                            height='40px'/>
                    </NavLink>
                </Row>
                <Row>
                    <Col>
                        <h4 className='title'><b>@{post.username}</b> - {post.title}</h4>
                    </Col>
                </Row>
                <Row className='image' >
                    
                    <Image 
                        src = {post.imageUrl} 
                        width = "80%"
                        style={{marginLeft: "10%"}}/>
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
                        {delButton}
                    </Col>
                </Row>
                <Row>
                    <span className='subTitle'>Tags :</span> 
                </Row>
                <Row style={{marginBottom: '5%'}}>
                {post.tags}
                {/* { post.tags.forEach(element => {
                    <span>element</span>
                }) } */}
                </Row>
                <Row>
                    <span className="subTitle">Description :</span>
                </Row>
                <Row style={{textAlign:'justify', marginBottom: '3%'}}>
                    <p>{post.caption}</p>
                </Row>
            </Container>
        </div> 
    );
}
