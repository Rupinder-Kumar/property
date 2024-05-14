import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import './vendor.css';
import axios from 'axios';
import TopLayout from './TopLayout';
import SidebarLayout from './SidebarLayout';

const AdsProperties = () => {
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStatus, setNewStatus] = useState('');
  const [propertyAds, setPropertyAds] = useState('false');
  const [propertyOrder, setPropertyOrder] = useState('');
  const [propertyAdsCost, setPropertyAdsCost] = useState('0');
  
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4300/all_property')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

 const handleEdit = async (id) => {
  try {
    const response = await fetch(`http://localhost:4300/inactive_property/${id}`); 
    const result = await response.json();
    setEditData(result); 
    setEditItem(id);
    setIsModalOpen(true);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditItem(null);
  };
/* ==================================== */
const handleSaveChanges = (id) => {
  if (!id || propertyAds === '' || propertyOrder === '' || propertyAdsCost === '') {
    console.error('Invalid input data.');
    return;
  }

  axios.put(`http://localhost:4300/update-ads/${id}`, {
      status: newStatus,
      propertyAds: propertyAds,
      propertyOrder: propertyOrder,
      propertyAdsCost: propertyAdsCost
    })
    .then(response => {
      console.log('Property updated successfully:', response.data.message);
      // Fetch updated data
      axios.get('http://localhost:4300/all_property')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    })
    .catch(error => {
      console.error('Error updating status:', error);
    });

  setIsModalOpen(false);
  setEditItem(null);
};


/* =================================================== */ 

const handleVendorChange = (value) => {
  // Implement logic to handle changes in the vendor input field
};


const handlePropertyAdsCostChange = (value) => {
  // Implement logic to handle changes in the propertyAdsCost input field
};

const handlePropertyAdsOrderChange = (value) => {
  // Implement logic to handle changes in the propertyAdsOrder input field
};
  const handleDelete = (id) => {
    axios.delete(`http://localhost:4300/delete-property/${id}`)
      .then(response => {
        console.log(response.data.message);
        // Refresh data after delete
        axios.get('http://localhost:4300/inactive_property')
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      })
      .catch(error => {
        console.error('Error deleting property:', error);
      });
  };

  return (
    <>
       <div className="wrapper-full row">
        <div className="wrapper-third col-md-2">
          <SidebarLayout />
        </div>
        <div class="wrapper-seven col-md-10">
          <TopLayout />
      <div>
        <div className="ads_prop">
          <div className="p-5">
            <h1 className="title-change">ADS Property List</h1>
            <table id="example" className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>propertyType</th>
                  <th>propertyName</th>
                  <th>propertyImage</th>
                  <th>Property Ads</th>
				  <th>Property Cost</th>
				  <th>Property Ads Order</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.Id}> {/* Fix case sensitivity for 'id' */}
                    <td>{item.propertyType}</td> 
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
                    <td>{item.propertyads}</td>
					<td>{item.propertyAdsCost}</td>
                    <td>{item.propertyAdsOrder}</td>

                    <td className="btn-grp">
                      <button className="btn-success width-full-btn" onClick={() => handleEdit(item.Id)}>Edit</button> {/* Fix case sensitivity for 'id' */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Modal for editing */}
{isModalOpen && (
  <div className="modal edit-popup">
    <div className="modal-content">
  <h4>Change Status of Property</h4>
  {editData && (
    <div>
      <input type="hidden" name="PropertyId" value={editData.Id} />
      <p className="hidden-field">
        Property:
        <select
          className="dropdown-select"
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
        >
          <option value="">{editData.status}</option>
          {['Active', 'In-active'].map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </p>
      <p className="hidden-field">
        Vendor: <input type="text" className="dropdown-select" value={editData.propertyVendor} onChange={(e) => handleVendorChange(e.target.value)} />
      </p>
  <p>
  Property Ads: 
<select className="dropdown-select" value={propertyAds} name="propertyAds" onChange={(e) => setPropertyAds(e.target.value)}>
  <option value={newStatus}>Select</option>
  {['false', 'true'].map((option) => (
    <option key={option} value={option}>
      {editData.propertyads === option ? editData.propertyads : option}
    </option>
  ))}
</select>

</p>
      <p>
        Property Ads Cost (In Rs/-): <input type="text" className="dropdown-select" name="propertyAdsCost" value={propertyAdsCost} onChange={(e) => setPropertyAdsCost(e.target.value)} />
      </p>
     <p>
  Property Ads Order: 
  <select className="dropdown-select" value={propertyOrder} name="propertyOrder" onChange={(e) => setPropertyOrder(e.target.value)}>
    <option value="">Select</option>
    {['0','1', '2','3','4', '5','6'].map((option) => (
      <option key={option} value={option}>{option}</option>
    ))}
  </select>
</p>
    </div>
  )}
  <button className="btn-blue" onClick={() => handleSaveChanges(editData.Id)}>Save Changes</button>
  <button className="btn-blue" onClick={handleModalClose}>Cancel</button>
</div>

  </div>
)}

      </div>
	   </div>
	   </div>
    </>
  );
};

export default AdsProperties;
