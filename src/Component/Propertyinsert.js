import React, { useState } from 'react';
import Layout from './Layout';
import { Routes, Route } from 'react-router-dom';
import Rentpropertyadd from './Rentpropertyadd';
import TopLayout from './TopLayout';
import SidebarLayout from './SidebarLayout';


export default function PropertyInsert() {
	
	const [showSuccess, setSuccess] = useState(false);
	const [showError, setError] = useState(false);
	 const [formData, setFormData] = useState({
    propertyType: '',
	location: '',
	propertyName: '',
	bedroom: '',
	saleableArea: '',
	unit:'',
	Negotiable:'',
	bathrooms: '',
	balconies: '',
	propertyLocality:'',
	additionalRooms: '',
	propertyPrice: '',
	bookingAmount: '',
	propertyStatus: '',
	possessionDate: '',
	transactionType: '',
	description: '',
	propertyImage: '',
	furnishingStatus: ''
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
   /* const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }; */
  const handleCheckboxChange = (e) => {
  const { name, value, checked } = e.target;
  const updatedFormData = { ...formData };
  updatedFormData[name] = checked
    ? [...(updatedFormData[name] || []), value]
    : (updatedFormData[name] || []).filter((item) => item !== value);
  setFormData(updatedFormData);
};

   const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
const handleDateChange = (e) => {
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
	  if (!formData.propertyType || !formData.location || !formData.propertyName || !formData.propertyLocality || !formData.saleableArea || !formData.propertyPrice || !formData.propertyStatus || !formData.possessionDate || !formData.transactionType || !formData.description || !file) {
    console.error('Please fill in all required fields');
	 setError(true);
    return;
  }
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
      const response = await fetch('http://localhost:4300/add_property', {
        method: 'POST',
        body: combinedFormData,
      });
	  console.log(response)
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
     <div className="wrapper-full row">
        <div className="wrapper-third col-md-2">
          <SidebarLayout />
        </div>
        <div class="wrapper-seven col-md-10">
          <TopLayout />
    <div className='insert-add'>
    <div className="container">
    <div className="card o-hidden border-0 shadow-lg my-5">
      <form onSubmit={handleSubmit}> 
  <h3>ADMIN PROPERTY DASHBARD</h3>
  <div className="row">
    <div className="col-sm-12">
      <div className="btn-container">
        <button type="button" className="btn btn-danger">
          Sell
        </button>
		<Routes>
		<Route path="/Rentpropertyadd" element={<Rentpropertyadd />} />
		</Routes>
	  <a href="/Rentpropertyadd">
              <button type="button" className="btn btn-default">
                Rent
              </button>
            </a>
      </div>
    </div>
  </div>
  <div className="btn2-container form-container">
    <h3>Your Property type</h3>
    <div className="radio-group">
      <input
        type="radio"
        id="apartment"
		onChange={handleRadioChange}
        name="propertyType"
        defaultValue="Apartment"
      />
      <label htmlFor="apartment"><i class='fas fa-building'></i> Apartment</label>
      <input
        type="radio"
        id="house"
		onChange={handleRadioChange}
        name="propertyType"
        defaultValue="House"
      />
      <label htmlFor="house"><i class='fas fa-home'></i> House</label>
      <input
        type="radio"
        id="commercial"
		onChange={handleRadioChange}
        name="propertyType"
        defaultValue="Commercial"
      />
      <label htmlFor="commercial"><i class='fas fa-industry'></i>Commercial</label>
      <input type="radio" onChange={handleRadioChange} id="plot" name="propertyType" defaultValue="Plot" />
      <label htmlFor="plot"><i class='far fa-building'></i>Plot</label>
    </div>	
  </div>
  <div className="btn2-container form-container">
    <div className="container-form">
      <h3>Where is Property the Located?</h3>
      <input
        type="location"
        className="form-control"
		onChange={handleInputChange}
		value={formData.location}
        name="location"
        placeholder="Location/Property"
      />
    </div>
    <div className="container-form">
      <h3>Property Locality</h3>
      <input
        type="text"
		onChange={handleInputChange}
		value={formData.propertyLocality}
        className="form-control"
        name="propertyLocality"
        placeholder="property Locality"
      />
    </div>
	  <div className="container-form">
      <h3>Property Name</h3>
      <input
        type="text"
		onChange={handleInputChange}
		value={formData.propertyName}
        className="form-control"
        name="propertyName"
        placeholder="Property Name"
      />
    </div>
    <div className="container-form">
      <h3>Select Bedrooms</h3>
      <select className="form-control" name="bedroom" onChange={handleSelectChange}>
        <option value={1}>1</option>
        <option value={2} selected="">
          2
        </option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
      </select>
    </div>
  </div>
  <div className="form-container">
    <h3>Tell us your property area ?</h3>
    <div className="row">
      <div className="col-md-4">
        <input
          type="number"
          className="form-control"
		  onChange={handleInputChange}
		value={formData.saleableArea}
          name="saleableArea"
          placeholder="Saleable area*"
        />
      </div>
      <div className="col-md-2">
        <select className="form-control" name="unit" onChange={handleSelectChange}>
          <option value="Sq. feet">Sq. feet</option>
          <option value="sq_feet">Sq. feet</option>
          <option value="sq_meter">Sq. meter</option>
          <option value="sq_yards">Sq. yards</option>
        </select>
      </div>
    </div>
  </div>
  <div className="form--container">
    <div className="form-container">
      <div className="row">
        <h3>Tell us more about the configuration</h3>
        <div className="col-md-2">
          <select className="form-control" name="bathrooms" onChange={handleSelectChange}>
            <option value="">Bathrooms</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </div>
        <div className="col-md-2">
          <div className="dropdown">
            <select
              className="form-control"
              name="balconies"
              onchange="window.location.href=this.value;" onChange={handleSelectChange}
            >
              <option value="#" selected="" disabled="">
                Balconies
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="form--container">
    <div className="form-container">
	 <h4>Additional Rooms</h4>
      <div className="checkbox-group">
       
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="type1"
			onChange={handleCheckboxChange}
            name="additionalRooms"
            defaultValue="Prayer Room"
          />
          <label htmlFor="type1">Prayer Room</label>
        </div>
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="type2"
			onChange={handleCheckboxChange}
            name="additionalRooms"
            defaultValue="Study Room"
          />
          <label htmlFor="type2">Study Room</label>
        </div>
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="type3"
			onChange={handleCheckboxChange}
            name="additionalRooms"
            defaultValue="Store Room"
          />
          <label htmlFor="type3">Store Room</label>
        </div>
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="type4"
			onChange={handleCheckboxChange}
            name="additionalRooms"
            defaultValue="Servant Room"
          />
          <label htmlFor="type4">Servant Room</label>
        </div>
      </div>
    </div>
  </div>
  <div className="form-container">
    <hr className="solid" />
    <div className="row">
      <div className="col-md-4">
        <div className="space-container">
          <h3>What is the expected price</h3>
          <div className="space-container">
            <input
              type="price"
              name="propertyPrice"
			   onChange={handleInputChange}
		value={formData.propertyPrice}
              className="form-control"
              placeholder="Price /sq.feet"
            />
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
				name="Negotiable"
				onChange={handleCheckboxChange}
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Negotiable
              </label>
            </div>
            <button type="button" className="btn btn-link">
              +add price details
            </button>
          </div>
		  <div class="extra_price_group">
		  <div class="extra_price_details">
		  <input type="checkbox" name="extra_price" id="PLC" name="extra_price" value="PLC"/>
		  <label for="PLC">PLC</label>
		  </div>
		  
		    <div class="extra_price_details">
		  <input type="checkbox" name="extra_price" id="car_parking" name="extra_price" value="car parking"/>
		  <label for="car_parking">Car Parking</label>
		  </div>
		  
		  <div class="extra_price_details">
		  <input type="checkbox" name="extra_price" id="EDC" name="extra_price" value="EDC"/>
		  <label for="EDC">EDC</label>
		  </div>
		  </div>
		  
          <div className="space-container">
            <input
              type="price"
			  onChange={handleInputChange}
		value={formData.bookingAmount}
              name="bookingAmount"
              className="form-control"
              placeholder="Booking Amount"
            />
          </div>
        </div>
      </div>
    </div>
	<h3>Property Status</h3>
    <div className="radio-group">
      
      <input
        type="radio"
        id="ready"
        name="propertyStatus"
		onChange={handleRadioChange}
        defaultValue="Ready To Move In"
      />
      <label htmlFor="ready">Ready To Move In</label>
      <input
        type="radio"
        id="construction"
        name="propertyStatus"
		onChange={handleRadioChange}
        defaultValue="Under Construction"
      />
      <label htmlFor="construction">Under Construction</label>
    </div>
    <div className="space-container">
      <h4>Possession Date</h4>
      <input type="date" name="possessionDate" onChange={handleDateChange} className="form-control" />
    </div>
    <div className="space-container">
	   <h3>Transaction type</h3>
      <div className="radio-group">
     
        <input
          type="radio"
          id="New"
          name="transactionType"
		  onChange={handleRadioChange}
          defaultValue="New"
        />
        <label htmlFor="New">New</label>
        <input
          type="radio"
          id="Resale"
          name="transactionType"
		  onChange={handleRadioChange}
          defaultValue="Resale"
        />
        <label htmlFor="Resale">Resale</label>
      </div>
    </div>
    <div className="space-container">
      <div className="form-group">
        <label htmlFor="comment">Description</label>
        <textarea
          className="form-control"
          rows={5}
          id="comment"
          name="description"
		  onChange={handleInputChange}
		value={formData.description}
          placeholder="tell us more about property..."
          defaultValue={""}
        />
      </div>
      <div className="form-group file_upload_images">
        <label htmlFor="propertyImage">Property Image</label>
        <input
          type="file"
          className="form-control-file"
          name="propertyImage"
		  onChange={handleFileChange}
          id="propertyImage"
          accept="image/*"
        />
        <small className="form-text text-muted">
          Upload an image of the property.
        </small>
      </div>
    </div>
    <h4>Property Features</h4>
    <h3>Choose furnishing status</h3>
    <div className="row">
      <div className="col-sm-12">
        <div className="btn-container">
          <div className="radio-group">
            <input
              type="radio"
              name="furnishingStatus"
			  onChange={handleRadioChange}
              defaultValue="Unfurnished"
              id="Unfurnished"
            />{" "}
            <label htmlFor="Unfurnished">Unfurnished</label>
            <input
              type="radio"
              name="furnishingStatus"
			  onChange={handleRadioChange}
              defaultValue="Semi Furnished"
              id="semiFurnished"
            />{" "}
            <label htmlFor="semiFurnished">Semi Furnished</label>
            <input
              type="radio"
              name="furnishingStatus"
			  onChange={handleRadioChange}
              defaultValue="Fully Furnished"
              id="Fully_Furnished"
            />
            <label htmlFor="Fully_Furnished">Fully Furnished</label>
          </div>
        </div>
      </div>
    </div>
  <div className="row">
  <h3>Additional furnishing</h3>
  <div className="checkbox-group">
    <div className="checkbox-item">
      <input
        type="checkbox"
		onChange={handleCheckboxChange}
        name="furnishingOptions[]"
        defaultValue="furnishing_icon_sofa"
        id="Sofa"
      />{" "}
      <label htmlFor="Sofa"><i class='fas fa-couch'></i> Sofa</label>
    </div>
    <div className="checkbox-item">
      <input
        type="checkbox"
		onChange={handleCheckboxChange}
        name="furnishingOptions[]"
        defaultValue="furnishing_icon_fridge"
        id="Refrigerator"
      />{" "}
      <label htmlFor="Refrigerator"><i class='fas fa-couch'></i>  Refrigerator</label>
    </div>
    <div className="checkbox-item">
      <input
        type="checkbox"
		onChange={handleCheckboxChange}
        name="furnishingOptions[]"
        defaultValue="furnishing_icon_dining-table"
        id="Dining_Table"
      />{" "}
      <label htmlFor="Dining_Table"><i class='fas fa-couch'></i>  Dining Table</label>
    </div>
    <div className="checkbox-item">
      <input
        type="checkbox"
		onChange={handleCheckboxChange}
        name="furnishingOptions[]"
        defaultValue="furnishing_icon_gas"
        id="Gas_Connection"
      />{" "}
      <label htmlFor="Gas_Connection"><i class='fas fa-couch'></i> Gas Connection</label>
    </div>
    <div className="checkbox-item">
      <input
        type="checkbox"
		onChange={handleCheckboxChange}
        name="furnishingOptions[]"
        defaultValue="furnishing_icon_washing"
        id="Washing_Machine"
      />{" "}
      <label htmlFor="Washing_Machine"><i class='fas fa-couch'></i> Washing Machine</label>
    </div>
    <div className="checkbox-item">
      <input
        type="checkbox"
		onChange={handleCheckboxChange}
        name="furnishingOptions[]"
        defaultValue="furnishing_icon_wifi-connection"
        id="Wifi_Connection"
      />{" "}
      <label htmlFor="Wifi_Connection"><i class='fas fa-couch'></i> Wifi Connection</label>
    </div>
    <div className="checkbox-item">
      <input
        type="checkbox"
		onChange={handleCheckboxChange}
        name="furnishingOptions[]"
        defaultValue="furnishing_icon_microwave"
        id="Microwave"
      />
      <label htmlFor="Microwave"> <i class='fas fa-couch'></i> Microwave</label>
    </div>
    <div className="checkbox-item">
      <input
        type="checkbox"
		onChange={handleCheckboxChange}
        name="furnishingOptions[]"
        defaultValue="furnishing_icon_modular-kitchen"
        id="Modular_Kitchen"
      />{" "}
      <label htmlFor="Modular_Kitchen"><i class='fas fa-couch'></i> Modular Kitchen</label>
    </div>
  </div>
</div>

    <div className="row">
  <h4>Choose Amenities</h4>
  <div className="checkbox-group">
    <div className="checkbox-item">
      <input
        type="checkbox"
		onChange={handleCheckboxChange}
        name="Amenities[]"
        defaultValue="car_parking"
        id="Parking"
      />{" "}
      <label htmlFor="Parking"><i class='fas fa-car'></i>	 Car Parking</label>
    </div>
    <div className="checkbox-item">
      <input
        type="checkbox"
		onChange={handleCheckboxChange}
        name="Amenities[]"
        defaultValue="power_backup"
        id="Backup"
      />{" "}
      <label htmlFor="Backup"><i class='fas fa-charging-station'></i>	 Power Backup</label>
    </div>
    <div className="checkbox-item">
      <input
        type="checkbox"
		onChange={handleCheckboxChange}
        name="Amenities[]"
        defaultValue="24x7_security"
        id="Security"
      />{" "}
      <label htmlFor="Security"><i class='fas fa-charging-station'></i>24 x 7 Security</label>
    </div>
    <div className="checkbox-item">
      <input type="checkbox" name="Amenities[]" defaultValue="lift" id="Lift" />{" "}
      <label htmlFor="Lift"><i class='fas fa-charging-station'></i>  Lift</label>
    </div>
    <div className="checkbox-item">
      <input
        type="checkbox"
		onChange={handleCheckboxChange}
        name="Amenities[]"
        defaultValue="swimming_pool"
        id="Swimming"
      />{" "}
      <label htmlFor="Swimming"> <i class='fas fa-charging-station'></i> Swimming Pool</label>
    </div>
    <div className="checkbox-item">
      <input
        type="checkbox"
		onChange={handleCheckboxChange}
        name="Amenities[]"
        defaultValue="landscaped_gardens"
        id="Landscaped_Gardens"
      />{" "}
      <label htmlFor="Landscaped_Gardens"><i class='fas fa-charging-station'></i> Landscaped Gardens</label>
    </div>
    <div className="checkbox-item">
      <input type="checkbox" onChange={handleCheckboxChange} name="Amenities[]" id="Gym" defaultValue="gym" />{" "}
      <label htmlFor="Gym"><i class='fas fa-walking'></i> Gym</label>
    </div>
  </div>
</div>
{showSuccess && (
		<div className="text-danger mt-2">
		Property added successfully
		</div>
		)}
		{showError && (
		<div className="text-danger mt-2">
		Please fill in all required fields
		</div>
		)}
<div className="border--bottom">
    <input type="submit" className="button-submit" name="property_add" defaultValue="Submit" />
	</div>
  </div>
</form>

                  </div>
                  </div>
                  </div>
				  </div>
                  </div>
    </>
      
    
  )
}
