import  React  from "react"

import 'bootstrap/dist/css/bootstrap.min.css';  
import {Carousel } from 'react-bootstrap';  
import img1 from '../src/t1.jpg' 
import img2 from '../src/t2.jpg' 
import img3 from '../src/t3.jpg'  
function App() {  
  
  return (  
    <>  
    <div className='p-5'>  
    <Carousel>  
  <Carousel.Item>  
  <img style={{maxHeight:"100vh"}}  
      className="d-block w-100"  
      src={img1}  
      alt="First slide"  
    />  
    <Carousel.Caption>  
      <h3>First Slider Image Title</h3>  
      <p>First Slide decription.</p>  
    </Carousel.Caption>  
  </Carousel.Item>  
  <Carousel.Item>  
    <img  
      className="d-block w-100"  
      src={img2}  
      alt="Second slide"  
    />  
  
    <Carousel.Caption>  
      <h3>Second slide Image </h3>  
      <p>Second slide description</p>  
    </Carousel.Caption>  
  </Carousel.Item>  
  <Carousel.Item>  
    <img  
      className="d-block w-100"  
      src={img3}  
      alt="Third slide"  
    />  
  
    <Carousel.Caption>  
      <h3>Third Slide Image</h3>  
      <p>Third Slide Description.</p>  
    </Carousel.Caption>  
  </Carousel.Item>  
</Carousel>  
</div>  
    </>  
  );  
}  
export default App;  