import { useState, useEffect, useRef } from 'react';
import PostThumbnail from './PostThumbnail';
import './css/PostList.css';
import { Form, Button, InputGroup, Image } from "react-bootstrap";
import reload from './img/reload.svg'

export default function PostList({type, title}) {
	const [posts, setPosts] = useState([]);
	const username = localStorage.getItem('username');
	const searchInput = useRef(null);

	useEffect(() => {
		if(type === 'feed') {
			fetch('http://localhost:5000/api/postImg/getAllImg')
			.then(response => response.json())
			.then(setPosts);
		}
		if(type === 'yourImages') {
			fetch(`http://localhost:5000/api/postImg/getAllImgByUser/${username}`)
			.then(response => response.json())
			.then(setPosts);
		} 
	}, []);

	function searchByTag() {
		fetch(`http://localhost:5000/api/postImg/getAllImgByTag/${searchInput.current.value}`)
			.then(response => response.json())
			.then(setPosts);
	}

	function onClickReload() {
		fetch('http://localhost:5000/api/postImg/getAllImg')
		.then(response => response.json())
		.then(setPosts);
	} 

	let searchBar = "";

	if(type === 'feed') {
		searchBar = 
		<InputGroup className="searchBar">
			<Form.Control
			type="text"
			className='text'
			placeholder="Rechercher avec un tag"
			ref={searchInput}
			/>

			<InputGroup.Append>
				<Button className="button" onClick={searchByTag}>
					Rechercher
				</Button>
				<Image
                    className="reload" 
					onClick={onClickReload}
                    src={reload} 
                    width='40px'
                    height='40px'/>
			</InputGroup.Append>
	  	</InputGroup>;
	}


	return (
		<div className="postList">
			<h1>{title}</h1><br/><br/> 
			{searchBar}
			<br/><br/> 
            <div>
				{posts.map(post => (
					<PostThumbnail post={post} key={post._id} />
				))}
            </div>
		</div>
	);
}
