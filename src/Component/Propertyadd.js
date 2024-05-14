import React,{useState} from 'react';
import Layout from './Layout';

export default function Propertyform() {
	
	const [showSuccess, setSuccess] = useState(false);
	 const [formData, setFormData] = useState({
    amenities: '',
	apartmentType: '',
	builderExperience: '',
	constructionStatus: '',
	description: '',
	discountPrice: '',
	loan: '',
	location: '',
	latitude: '',
	longitude: '',
	ongoingProjects: '',
	pastProjects: '',
	price: '',
	projectArea: '',
	propertyImage: '',
	propertyName: '',
	propertyType: '',
	totalArea: '',
	yearConstruction: '',
  });
	  const [file, setFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
    const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
   const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  console.log('FormData:', formData);
  console.log('File:', file);
  const combinedFormData = new FormData();

  for (const key in formData) {
    combinedFormData.append(key, formData[key]);
  }

  if (file) {
    combinedFormData.append('propertyImage', file);
  }

  console.log('Combined FormData:', combinedFormData);
    try {
      const response = await fetch('http://localhost:4300/submit-form', {
        method: 'POST',
        body: combinedFormData,
      });
      if (response.ok) {
		   setSuccess(true);
        console.log('Data submitted successfully');
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
	
  return (
    <>
    <Layout/> 
    <div className='customer-form'>
    {/*-form---*/}
    <div className="container">
    <div className="card o-hidden border-0 shadow-lg my-5">
      <form onSubmit={handleSubmit}> 
    <div className="row g-3">
      <div className="col-md-6">
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
             <input type="text" name="location" className="form-control" value={formData.location} onChange={handleInputChange} placeholder="Enter property location" />
        </div>
        <div className="mb-3">
          <label htmlFor="latitude" className="form-label">
            Latitude
          </label>
		  
          <input value={formData.latitude} onChange={handleInputChange}
            type="text" name="latitude"
            className="form-control"
            id="latitude"
            placeholder="Enter latitude"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="longitude" className="form-label">
            Longitude
          </label>
          <input value={formData.longitude} onChange={handleInputChange}
            type="text" name="longitude"
            className="form-control"
            id="longitude"
            placeholder="Enter longitude"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="year-of-construction" className="form-label">
            Year of Construction
          </label>
          <input value={formData.yearConstruction} onChange={handleInputChange}
            type="number" name="yearConstruction"
            className="form-control"
            id="year-of-construction"
            placeholder="Enter year of construction"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="construction-status" className="form-label">
            Construction Status
          </label>
          <select name="constructionStatus" className="form-select" id="construction-status" onChange={handleSelectChange}>
            <option selected="">Select construction status</option>
            <option>Under Construction</option>
            <option>Ready to Move</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="loan" className="form-label">
            Loan (up to 80%)
          </label>
          <select name="loan" className="form-select" id="loan" onChange={handleSelectChange}>
            <option selected="">Select loan option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>
      <div className="col-md-6">
        <div className="mb-3">
          <label htmlFor="property-name" className="form-label">
            Property Name
          </label>
          <input value={formData.propertyName} onChange={handleInputChange}
            type="text" name="propertyName"
            className="form-control"
            id="property-name"
            placeholder="Enter property name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input value={formData.price} onChange={handleInputChange}
            type="number" name="price"
            className="form-control"
            id="price"
            placeholder="Enter property price"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="discount-price" className="form-label">
            Discount Price
          </label>
          <input value={formData.discountPrice} onChange={handleInputChange}
            type="number" name="discountPrice"
            className="form-control"
            id="discount-price"
            placeholder="Enter discounted price"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="builder-experience" className="form-label">
            Builder Experience (in years)
          </label>
          <input value={formData.builderExperience} onChange={handleInputChange}
            type="number" name="builderExperience"
            className="form-control"
            id="builder-experience"
            placeholder="Enter builder's experience"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="project-area" className="form-label">
            Project Area (in acres)
          </label>
          <input value={formData.projectArea} onChange={handleInputChange}
            type="number" name="projectArea"
            className="form-control"
            id="project-area"
            placeholder="Enter project area"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ongoing-projects" label="form-label">
            Ongoing Projects
          </label>
          <input value={formData.ongoingProjects} onChange={handleInputChange}
            type="number" name="ongoingProjects"
            className="form-control"
            id="ongoing-projects"
            placeholder="Enter number of ongoing projects"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="past-projects" className="form-label">
            Past Projects
          </label>
          <select name="pastProjects" className="form-select" id="past-projects" onChange={handleSelectChange}>
            <option selected="">Select past project</option>
            <option>Project 1</option>
            <option>Project 2</option>
            <option>Project 3</option>
          </select>
        </div>
      </div>
    </div>
    <div className="row g-3">
      <div className="col-md-6">
        <div className="mb-3">
          <label htmlFor="total-area" className="form-label">
            Total Area (in square feet/yards)
          </label>
          <input value={formData.totalArea} onChange={handleInputChange}
            type="number" name="totalArea"
            className="form-control"
            id="total-area"
            placeholder="Enter total area"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="property-type" className="form-label">
            Property Type
          </label>
          <select name="propertyType" className="form-select" id="property-type" onChange={handleSelectChange}>
            <option selected="">Select property type</option>
            <option>Plot</option>
            <option>Apartment</option>
            <option>Commercial</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="apartment-type" className="form-label">
            Apartment Type (BHK)
          </label>
          <select name="apartmentType" className="form-select" id="apartment-type" onChange={handleSelectChange}>
            <option selected="">Select BHK</option>
            <option>1 BHK</option>
            <option>2 BHK</option>
            <option>3 BHK</option>
          </select>
        </div>
      </div>
      <div className="col-md-6">
        <div className="mb-3">
          <label htmlFor="property-image" className="form-label">
            Property Image
          </label>
          <input onChange={handleFileChange}
            type="file" name="propertyImage"
            className="form-control"
            id="property-image"
            accept="image/*"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea name="description" value={formData.description} onChange={handleInputChange}
            className="form-control"
            id="description"
            rows={3}
            defaultValue={""}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amenities" className="form-label">
            Amenities
          </label>
          <div className="form-check">
            <input name="amenities"  onChange={handleCheckboxChange}
              className="form-check-input"
              type="checkbox"
              defaultValue="gym"
              id="gym"
            />
            <label className="form-check-label" htmlFor="gym">
              Gym
            </label>
          </div>
          <div className="form-check">
            <input name="amenities" onChange={handleCheckboxChange}
              className="form-check-input"
              type="checkbox"
              defaultValue="Swimming Pool"
              id="swimming-pool"
            />
            <label className="form-check-label" htmlFor="swimming-pool">
              Swimming Pool
            </label>
          </div>
          <div className="form-check">
            <input name="amenities" onChange={handleCheckboxChange}
              className="form-check-input"
              type="checkbox"
              defaultValue="park"
              id="park"
            />
            <label className="form-check-label" htmlFor="park">
              Park
            </label>
          </div>
        </div>
      </div>
    </div>
		{showSuccess && (
		<div className="text-danger mt-2">
		Property added successfully
		</div>
		)}
	<button className="button-submit">Submit</button>
  </form>
                  </div>
                  </div>
                  </div>
    </>
      
    
  )
}
