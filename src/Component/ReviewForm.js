import React, { useState } from 'react';
import Layout from './Layout';
import axios from 'axios'; 
import './blog.css';

const ReviewForm = () => {
  const [author, setAuthor] = useState('');
  const [review, setReview] = useState('');
  const [reviewimage, setReviewimage] = useState(null);
  const [review_property_id, setReviewpropertyid] = useState(null);
  
  const [successMessage, setSuccessMessage] = useState('');

  const handleImageChange = (e) => {
    setReviewimage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('author', author);
    formData.append('review', review);
    formData.append('reviewimage', reviewimage);
	formData.append('review_property_id', review_property_id);
	
    console.log(formData)
    try {
      const response = await axios.post('http://localhost:4300/reviews', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setSuccessMessage('Review added successfully!');
      setAuthor('');
      setReview('');
	  setReviewpropertyid('');
      setReviewimage(null);
    } catch (error) {
      console.error('Error uploading blog post:', error);
    }
  };

  return (
    <>
      <Layout/> 
      <div className="blog-form">
        <h2 className="blog-title">Review Form</h2>
        {successMessage && <div className="success-message">{successMessage}</div>}
        <form onSubmit={handleSubmit} className="form-field-container">
		  <div className="form-field">
            <input type="file" name="reviewimage" accept="image/*" onChange={handleImageChange} />
          </div>
		   <div className="form-field">
            <textarea placeholder="Review" value={review} onChange={(e) => setReview(e.target.value)}></textarea>
          </div>
          <div className="form-field">
            <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>
		   <div className="form-field">
            <input type="text" placeholder="Property[optional]" value={review_property_id} onChange={(e) => setReviewpropertyid(e.target.value)} />
          </div>
       
        
          <div className="form-field">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;
