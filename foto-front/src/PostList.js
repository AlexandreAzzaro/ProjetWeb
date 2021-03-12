import { useState, useEffect } from 'react';
import PostThumbnail from './PostThumbnail';
import data from './data';
import './css/PostList.css';

export default function PostList() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		setPosts(data);
	}, []);

	return (
		<div className="postList">
			<h1>Feed</h1><br/><br/> 
            <div>
				{posts.map(post => (
					<PostThumbnail post={post} key={post.id} />
				))}
            </div>
		</div>
	);
}
