import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import axios from 'axios'; 

const App = () => {
  const [data, setData] = useState([]);
    const [editItem, setEditItem] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenVendor, setIsOpenVendor] = useState(false); 
const [selectedVendor, setSelectedVendor] = useState('All');
const [selectedPrice, setSelectedPrice] = useState('Any Price');
const [selectedbhk, setSelectedbhk] = useState('Any BHK');
const [selectedproperty, setselectedproperty] = useState('Any Property');

  const toggleDropdownVendor = () => {
    setIsOpenVendor(!isOpenVendor);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
    const [isOpenTwo, setIsOpenTwo] = useState(false);

  const toggleDropdownTwo = () => {
    setIsOpenTwo(!isOpenTwo);
  };
const [isOpenThree, setIsOpenThree] = useState(false);

  const toggleDropdownThree = () => {
    setIsOpenThree(!isOpenThree);
  };
  useEffect(() => {
    axios.get('http://localhost:4300/all_property')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleEdit = (id) => {
	  setEditItem(id);
   setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditItem(null); 
  };
 const handleSaveChanges = () => {
    setIsModalOpen(false);
    setEditItem(null);
  };
  const handleDelete = (id) => {
    axios.delete(`http://localhost:4300/delete-property/${id}`)
      .then(response => {
        console.log(response.data.message);
      })
      .catch(error => {
        console.error('Error deleting property:', error);
      });
  };
 const handleFilterByVendor = (vendor) => {
    axios.get(`http://localhost:4300/properties-by-vendor/${vendor}`)
      .then(response => {
        setData(response.data);
		setSelectedVendor(vendor);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  
  
    const handleFilterByPrice = (minPrice, maxPrice) => {
    axios.get(`http://localhost:4300/properties-by-price/${minPrice}/${maxPrice}`)
      .then(response => {
        setData(response.data);
		   setSelectedPrice(`${minPrice / 100000}L-${maxPrice / 100000}L`);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleFilterByBHK = (bhk) => {
    axios.get(`http://localhost:4300/properties-by-bhk/${bhk}`)
      .then(response => {
        setData(response.data);
		setSelectedbhk(bhk);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
   const handleFilterByProperty = (property) => {
    axios.get(`http://localhost:4300/properties-by-property/${property}`)
      .then(response => {
        setData(response.data);
		setselectedproperty(property);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  
  
  
  return (
      <>
    <Layout/> 
    <div>
      
        <div className="tabellist">
		<div className="search-filter-nav">
		 <div className="anyPrice-div box-size-nav-u custom-test dropdown">
        <div className="dropdown">
          <button onClick={toggleDropdownVendor} className="dropbutton">
           By Vendor: {selectedVendor} 
            <i className="fas fa-caret-down" style={{ margin: '0px 4px' }} />
          </button>
          {isOpenVendor && (
            <div className="dropdown-content btn-list">
              <button onClick={() => handleFilterByVendor('All')}>All </button>
			  <button onClick={() => handleFilterByVendor('N.J Buildres')}>N.J Buildres </button>
              <button onClick={() => handleFilterByVendor('Rohit Properties')}>Rohit Properties</button>
			  <button onClick={() => handleFilterByVendor('SBP dream')}>SBP dream</button>
              <button onClick={() => handleFilterByVendor('RVH')}>RVH</button>
			  
			  
            </div>
          )}
        </div>
      </div>
  <form className="search-container" style={{ flex: 1 }}>
    <input type="text" id="search-bar" placeholder="Search Cities.." />
    <div className="search-icon-div">
      <i className="fas fa-search" />
    </div>
  </form>
  
  <div
    onclick="myFunction()"
    className="anyPrice-div box-size-nav-u custom-test dropdown"
  >
   <div className="dropdown">
      <button onClick={toggleDropdown} className="dropbutton">
        Price : {selectedPrice} 
        <i className="fas fa-caret-down" style={{ margin: '0px 4px' }} />
      </button>
      {isOpen && (
        <div id="myDropdown" className="dropdown-content">
          <button onClick={() => handleFilterByPrice(0, Infinity)}>Any Price</button>
      <button onClick={() => handleFilterByPrice(1000000, 2500000)}>10L-25L</button>
       <button onClick={() => handleFilterByPrice(3000000, 5000000)}>30L-50L</button>
	   <button onClick={() => handleFilterByPrice(5000000, 9000000)}>50L-90L</button>
        </div>
      )}
    </div>
  </div>
   <div
    onclick="myFunction()"
    className="anyPrice-div box-size-nav-u custom-test dropdown"
  >
   <div className="dropdown">
      <button onClick={toggleDropdownTwo} className="dropbutton">
		BHK : {selectedbhk} 
        <i className="fas fa-caret-down" style={{ margin: '0px 4px' }} />
      </button>
      {isOpenTwo && (
        <div id="myDropdown" className="dropdown-content">
          <button onClick={() => handleFilterByBHK('Any')}>Any BHK</button>
      <button onClick={() => handleFilterByBHK('1')}>1 BHK</button>
      <button onClick={() => handleFilterByBHK('2')}>2 BHK</button>
	  <button onClick={() => handleFilterByBHK('3')}>3 BHK</button>
        </div>
      )}
    </div>
  </div>
   <div
    onclick="myFunction()"
    className="anyPrice-div box-size-nav-u custom-test dropdown"
  >
   <div className="dropdown">
      <button onClick={toggleDropdownThree} className="dropbutton">
        Property: {selectedproperty}
        <i className="fas fa-caret-down" style={{ margin: '0px 4px' }} />
      </button>
      {isOpenThree && (
        <div id="myDropdown" className="dropdown-content">
		<button onClick={() => handleFilterByProperty('Any')}>Any Property</button>
      <button onClick={() => handleFilterByProperty('Apartment')}>Apartment</button>
      <button onClick={() => handleFilterByProperty('Villa')}>Villa</button>
	  <button onClick={() => handleFilterByProperty('Plot')}>Plot</button>
	  <button onClick={() => handleFilterByProperty('Showroom')}>Showroom</button>
  
        </div>
      )}
    </div>
	</div>
	<div
    onclick="myFunction()"
    className="anyPrice-div box-size-nav-u custom-test dropdown"
  >
   <div className="saveSearch-div box-size-nav-uon ">
    <button>Filter</button>
	</div>
     
	
  </div>
</div>

			<div className="p-5 grid-table">
			
			<table id="example" className="table table-striped table-bordered">
        <thead>
          <tr>
		  
            <th>Property Type</th>
        <th>Property Location</th>
        <th>Property Name</th>
		<th>Property Image</th>
        <th>Bedroom</th>
        <th>Saleable Area</th>
        <th>Bathrooms</th>
        <th>Balconies</th>
        <th>Additional Rooms</th>
        <th>Property Price</th>
        <th>Booking Amount</th>
        <th>Property Status</th>
        <th>Possession Date</th>
        <th>Transaction Type</th>
        <th>Description</th>
        <th>Furnishing Status</th>
        <th>furnishing Options</th>
        <th>Amenities</th>
        <th>Status</th>
        <th>Property Vendor</th>
		<th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.propertyType}</td>
              <td>{item.propertyLocation}</td>
              <td>{item.propertyName}</td>
			  <td>
				{item.propertyImage ? (
				<img
				src={URL.createObjectURL(new Blob([item.propertyImage]))}
				alt="Property Image"
				style={{ maxWidth: '100px', maxHeight: '100px' }}
				onError={(e) => {
				e.target.src = 'https://static.makaan.com/1/1948029/297/images-for-project-154355646.jpeg?width=1024&height=576'; // Provide the path to your default image
				}}
				/>
				) : (
				<span>Error loading image</span>
				)}
			 </td>
			<td>{item.bedroom}</td>
			<td>{item.saleableArea}</td>
			<td>{item.bathrooms}</td>
			<td>{item.balconies}</td>
			<td>{item.additionalRooms}</td>
			<td>{item.propertyPrice}</td>
			<td>{item.bookingAmount}</td>
			<td>{item.propertyStatus}</td>
			<td>{item.possessionDate}</td>
			<td>{item.transactionType}</td>
			<td>{item.description}</td>
			<td>{item.furnishingStatus}</td>
			<td>{item.furnishingOptions}</td>
			<td>{item.amenities}</td>
			 <th>{item.status}</th>
        <th>{item.propertyVendor}</th>

              <td className="btn-grp">
                <button className="btn-success" onClick={() => handleEdit(item.id)}>Edit</button>
                <button className="btn-success" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
	</div>
	 {/* Modal for editing */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Item</h2>
            <button onClick={handleSaveChanges}>Save Changes</button>
            <button onClick={handleModalClose}>Cancel</button>
          </div>
        </div>
      )}
	</div>
	</>
  );
};

export default App;
