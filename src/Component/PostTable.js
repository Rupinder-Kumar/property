import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './Layout';
import './blog.css';
const PostTable = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:4300/get_post');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []); 

  return (
  <>
	
	 <Layout/>
	   <div className="post-table">
	   <div className="post-table-inner">
      <h2>Posts Table</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
  <tr key={post.id}>
    <td>{post.title}</td>
    <td>{post.content}</td>
    <td>
      {post.imagePath && typeof post.imagePath === 'object' ? (
        <img src={post.imagePath.path} alt={post.title} style={{ width: '100px', height: 'auto' }} />
      ) : (
        <img src={post.imagePath} alt={post.title} style={{ width: '100px', height: 'auto' }} />
      )}
    </td>
  </tr>
))}
        </tbody>
      </table>
    </div>
	</div>
  </>
    
  );
};

export default PostTable;
