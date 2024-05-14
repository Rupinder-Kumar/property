import React, { useState } from 'react';
import Layout from './Layout';
import axios from 'axios'; 
import './blog.css';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);
    console.log(formData)
    try {
      const response = await axios.post('http://localhost:4300/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setSuccessMessage('Blog post added successfully!');
      setTitle('');
      setContent('');
      setImage(null);
    } catch (error) {
      console.error('Error uploading blog post:', error);
    }
  };

  return (
    <>
      <Layout/> 
      <div className="blog-form">
        <h2 className="blog-title">Blog Create</h2>
        {successMessage && <div className="success-message">{successMessage}</div>}
        <form onSubmit={handleSubmit} className="form-field-container">
          <div className="form-field">
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="form-field">
            <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
          </div>
          <div className="form-field">
            <input type="file" name="blogimage" accept="image/*" onChange={handleImageChange} />
          </div>
          <div className="form-field">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BlogForm;
