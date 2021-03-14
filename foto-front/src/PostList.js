import { useState, useEffect } from 'react';
import PostThumbnail from './PostThumbnail';
import data from './data';
import './css/PostList.css';

export default function PostList() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/api/postImg/getAllImg')
			.then(response => response.json())
			.then(setPosts);

	}, []);

	return (
		<div className="postList">
			<h1>Feed</h1><br/><br/> 
            <div>
				{posts.map(post => (
					<PostThumbnail post={post} key={post._id} />
				))}
            </div>
		</div>
	);
}
