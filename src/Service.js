import React, { useState, useEffect } from 'react';
import {Routes,Route,Link,BrowserRouter} from "react-router-dom";
import List from "./List";
import axios from 'axios';
function  Service()
{
  const [posts, setPosts] = useState([]);
   const [reviews, setReviews] = useState([]);

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
  
   useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const responseReviews = await axios.get('http://localhost:4300/get_reviews');
        setReviews(responseReviews.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchTestimonials();
  }, []); 
  
  return(
  
  <>
  
  <Routes>
	<Route path="/list" element={<List />} />
	
	</Routes>
	
   <main id="main">
    {/* ======= Services Section ======= */}
    <section className="section-services section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 align="center" className="title-a">Our Services</h2>
              </div>
            </div>
          </div>
        </div>
      <section className="section-agents section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Latest Projects in Mohali</h2>
              </div>
             
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img
                  src="r5.jpg"
                  alt=""
                  className="img-d img-fluid"
                /><br/>
				<a href="/list">View Detail</a>
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="agent-single.html" className="link-two">
                        Margaret Sotillo
                        <br /> Escala
                      </a>
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a">
                    Sed porttitor lectus nibh, Cras ultricies ligula sed magna
                    dictum porta two.
                  </p>
                  <div className="info-agents color-a">
                    <p>
                      <strong>Phone: </strong> +54 356 945234
                    </p>
                    <p>
                      <strong>Email: </strong> agents@example.com
                    </p>
                  </div>
                </div>
                <div className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-instagram" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img
                  src="r6.jpg"
                  alt=""
                  className="img-d img-fluid"
                />
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="agent-single.html" className="link-two">
                        View Details
                        <br /> Darw
                      </a>
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a">
                    Sed porttitor lectus nibh, Cras ultricies ligula sed magna
                    dictum porta two.
                  </p>
                  <div className="info-agents color-a">
                    <p>
                      <strong>Phone: </strong> +54 356 945234
                    </p>
                    <p>
                      <strong>Email: </strong> agents@example.com
                    </p>
                  </div>
                </div>
                <div className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-instagram" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img
                  src="r7.jpg"
                  alt=""
                  className="img-d img-fluid"
                />
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="agent-single.html" className="link-two">
                        Emma Toledo
                        <br /> Cascada
                      </a>
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a">
                    Sed porttitor lectus nibh, Cras ultricies ligula sed magna
                    dictum porta two.
                  </p>
                  <div className="info-agents color-a">
                    <p>
                      <strong>Phone: </strong> +54 356 945234
                    </p>
                    <p>
                      <strong>Email: </strong> agents@example.com
                    </p>
                  </div>
                </div>
                <div className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-instagram" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
	
       
            
          
          
     
      </div>
    </section>
    {/* End Services Section */}
	
	<section className="section-agents section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Featured Projects in Mohali</h2>
              </div>
              <div className="title-link">
                <a href="/list">
                  All Agents
                  <span className="bi bi-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img
                  src="r4.jpg"
                  alt=""
                  className="img-d img-fluid"
                />
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="/list" className="link-two">
                        Margaret Sotillo
                        <br /> Escala
                      </a>
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a">
                    Sed porttitor lectus nibh, Cras ultricies ligula sed magna
                    dictum porta two.
                  </p>
                  <div className="info-agents color-a">
                    <p>
                      <strong>Phone: </strong> +54 356 945234
                    </p>
                    <p>
                      <strong>Email: </strong> agents@example.com
                    </p>
                  </div>
                </div>
                <div className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-instagram" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img
                  src="r2.jpg"
                  alt=""
                  className="img-d img-fluid"
                />
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="agent-single.html" className="link-two">
                        Stiven Spilver
                        <br /> Darw
                      </a>
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a">
                    Sed porttitor lectus nibh, Cras ultricies ligula sed magna
                    dictum porta two.
                  </p>
                  <div className="info-agents color-a">
                    <p>
                      <strong>Phone: </strong> +54 356 945234
                    </p>
                    <p>
                      <strong>Email: </strong> agents@example.com
                    </p>
                  </div>
                </div>
                <div className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-instagram" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img
                  src="r3.jpg"
                  alt=""
                  className="img-d img-fluid"
                />
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="agent-single.html" className="link-two">
                        Emma Toledo
                        <br /> Cascada
                      </a>
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a">
                    Sed porttitor lectus nibh, Cras ultricies ligula sed magna
                    dictum porta two.
                  </p>
                  <div className="info-agents color-a">
                    <p>
                      <strong>Phone: </strong> +54 356 945234
                    </p>
                    <p>
                      <strong>Email: </strong> agents@example.com
                    </p>
                  </div>
                </div>
                <div className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-instagram" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="bi bi-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
	
	
	
	<section className="section-news section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Latest News</h2>
              </div>
              <div className="title-link">
                <a href="blog-grid.html">
                  All News
                  <span className="bi bi-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="news-carousel" className="swiper">
          <div className="swiper-wrapper">
    
     {/* End carousel item */}
	 
{posts.map((post) => {
    const dateComponents = post.created_date.split(' ');
    const formattedDate = new Date(dateComponents[0], dateComponents[1] - 1, dateComponents[2]);
    return (
        <div className="carousel-item-c swiper-slide">
            <div className="card-box-b card-shadow news-box">
                <div className="img-box-b">
                    <img
                        src="assets/img/post-5.jpg"
                        alt=""
                        className="img-b img-fluid"
                    />
                </div>
                <div className="card-overlay">
                    <div className="card-header-b">
                        <div className="card-category-b">
                            <a href="#" className="category-b">
                                {post.title}
                            </a>
                        </div>
                        <div className="card-title-b">
                            <h2 className="title-2">
                                <a href="blog-single.html">
                                    {post.title} is coming
                                    <br /> new
                                </a>
                            </h2>
                        </div>
                        <div className="card-date">
                            <span className="date-b">{dateComponents[0]}</span>
                        </div>
                        <div className="card-content">
                            <p className="content-b">{post.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
})}
{/* End carousel item */}


    
    
          </div>
        </div>
        <div className="news-carousel-pagination carousel-pagination" />
      </div>
    </section>
    {/* End Latest News Section */}
    {/* ======= Testimonials Section ======= */}
    <section className="section-testimonials section-t8 nav-arrow-a">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Testimonials</h2>
              </div>
            </div>
          </div>
        </div>
        <div id="testimonial-carousel" className="swiper">
          <div className="swiper-wrapper">
        
            {/* End carousel item */}
				 
{reviews.map((review) => {
    return (
        <div className="carousel-item-a swiper-slide">
            <div className="testimonials-box">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="testimonial-img">
                            <img
                                src="assets/img/testimonial-2.jpg"
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="testimonial-ico">
                            <i className="bi bi-chat-quote-fill" />
                        </div>
                        <div className="testimonials-content">
                            <p className="testimonial-text">
                                {review.review}
                            </p>
                        </div>
                        <div className="testimonial-author-box">
                            <img
                                src="assets/img/mini-testimonial-2.jpg"
                                alt=""
                                className="testimonial-avatar"
                            />
                            <h5 className="testimonial-author">{review.review_author}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
})}
            {/* End carousel item */}
          </div>
        </div>
        <div className="testimonial-carousel-pagination carousel-pagination" />
      </div>
    </section>
	
	  <section className="section-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <div className="widget-a">
            <div className="w-header-a">
              <h3 className="w-title-a text-brand">About us</h3>
            </div>
            <div className="w-body-a">
              <p className="w-text-a color-text-a">
                At Mohali Bullz.com, we understand that people everywhere are searching for a home to call their own. We want to make this search as joyful as finally finding the perfect home because we understand that finding a home is much more than an online search!
A home is a cherished memory that lasts forever, it is where the walls embrace memories, the ceilings shelter love and laughter, where the quiet corners offer a much-needed pause and life itself becomes a reason to celebrate.So to make this journey joyful, we begin by partnering with our customers from the start and being there when it matters the most - right from online search to brokers to home loans to paperwork to finally finding that perfect home.

              </p>
            </div>
            <div className="w-footer-a">
              <ul className="list-unstyled">
                <li className="color-a">
                  <span className="color-text-a">Phone .</span>{" "}
                  contact@example.com
                </li>
                <li className="color-a">
                  <span className="color-text-a">Email .</span> +54 356 945234
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 section-md-t3">
          <div className="widget-a">
            <div className="w-header-a">
              <h3 className="w-title-a text-brand">The Company</h3>
            </div>
            <div className="w-body-a">
              <div className="w-body-a">
                <ul className="list-unstyled">
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right" />{" "}
                    <a href="#">Site Map</a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right" /> <a href="#">Legal</a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right" />{" "}
                    <a href="#">Agent Admin</a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right" />{" "}
                    <a href="#">Careers</a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right" />{" "}
                    <a href="#">Affiliate</a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right" />{" "}
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 section-md-t3">
          <div className="widget-a">
            <div className="w-header-a">
              <h3 className="w-title-a text-brand">Network sites</h3>
            </div>
            <div className="w-body-a">
              <ul className="list-unstyled">
                <li className="item-list-a">
                  <i className="bi bi-chevron-right" />{" "}
                  <a href="#">Venezuela</a>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right" /> <a href="#">China</a>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right" />{" "}
                  <a href="#">Hong Kong</a>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right" />{" "}
                  <a href="#">Argentina</a>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right" />{" "}
                  <a href="#">Singapore</a>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right" />{" "}
                  <a href="#">Philippines</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <nav className="nav-footer">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">Home</a>
              </li>
              <li className="list-inline-item">
                <a href="#">About</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Property</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Blog</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="socials-a">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">
                  <i className="bi bi-facebook" aria-hidden="true" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="bi bi-twitter" aria-hidden="true" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="bi bi-instagram" aria-hidden="true" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="bi bi-linkedin" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
          <div className="copyright-footer">
            <p className="copyright color-text-a">
              © Copyright
              <span className="color-a">EstateAgency</span> All Rights Reserved.
            </p>
          </div>
          <div className="credits">
            {/*
      All the links in the footer should remain intact.
      You can delete the links only if you purchased the pro version.
      Licensing information: https://bootstrapmade.com/license/
      Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=EstateAgency
    */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </main>
  </>
  )




}
export  default Service;