import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './Layout';
import './blog.css';
const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:4300/get_reviews');
        setTestimonials(response.data);
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
	   <div className="post-table-inner review-tables">
      <h2>Reviews</h2>
      <table>
        <thead>
          <tr>

 <th>id</th>
            <th>review</th>
            <th>review author</th>
            <th>Media</th>
			       <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {testimonials.map((testimonials) => (
			<tr key={testimonials.id}>
			     <td>Featured Reviews</td>
			<td>{testimonials.review}</td>
			<td>{testimonials.review_author}</td>
			<td>
			{testimonials.review_media && typeof testimonials.review_media === 'object' ? (
			<img src={testimonials.review_media.path} alt={testimonials.title} style={{ width: '100px', height: 'auto' }} />
			) : (
			<img src={testimonials.review_media} alt={testimonials.title} style={{ width: '100px', height: 'auto' }} />
			)}
			</td>
			<td>{testimonials.created_date}</td>

			</tr>
))}
        </tbody>
      </table>
    </div>
	</div>
  </>
    
  );
};

export default Testimonial;
