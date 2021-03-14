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
    const [post, setPost] = useState({
        username: "",
        caption: "",
        diffusion: [],
        tags: [],
        likes: 0,
        dislikes: 0,
        title: "",
        imageUrl: "",
        creation_date: ""
    });
    
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

    const date = post.creation_date.split('T')[0];
    const hour = post.creation_date.split('.')[0];

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
                        <b>{date + ' | ' + hour.substr(11,18) }</b>
                        {delButton}
                    </Col>
                </Row>
                <Row>
                    <span className='subTitle'>Tags :</span> 
                </Row>
                <Row style={{marginBottom: '5%'}}>
                {post.tags.map(tag => (
                    <b>#{tag}&nbsp;</b>
                ))}
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
