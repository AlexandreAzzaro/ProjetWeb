import { useState, useEffect } from 'react';
import PostThumbnail from './PostThumbnail';
import './css/PostList.css';

export default function PostList({type, title}) {
	const [posts, setPosts] = useState([]);
	const username = localStorage.getItem('username')

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

	return (
		<div className="postList">
			<h1>{title}</h1><br/><br/> 
            <div>
				{posts.map(post => (
					<PostThumbnail post={post} key={post._id} />
				))}
            </div>
		</div>
	);
}
