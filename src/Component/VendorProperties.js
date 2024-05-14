import React, { useState, useEffect } from 'react';
import VendorLayout from './VendorLayout'
import axios from 'axios';

const VendorProperties = () => {
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStatus, setNewStatus] = useState('');
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4300/inactive_property')
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

  const handleSaveChanges = (id) => {
  if (id && newStatus !== '') {
    axios.put(`http://localhost:4300/update-status/${id}`, { status: newStatus })
      .then(response => {
        console.log(response.data.message);
        axios.get('http://localhost:4300/inactive_property')
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
  }
  setIsModalOpen(false);
  setEditItem(null);
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
      <VendorLayout />
      <div>
        <div className="tabellist">
          <div className="p-5">
            <h1>Vendor Property List</h1>
            <table id="example" className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>propertyType</th>
                  <th>propertyLocation</th>
                  <th>propertyName</th>
                  <th>propertyImage</th>
                  <th>status</th>
                  <th>propertyVendor</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.Id}> {/* Fix case sensitivity for 'id' */}
                    <td>{item.propertyType}</td> {/* Fix case sensitivity for 'propertyType' */}
                    <td>{item.propertyLocation}</td> {/* Fix case sensitivity for 'propertyLocation' */}
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
                    <td>{item.status}</td>
                    <td>{item.propertyVendor}</td>

                    <td className="btn-grp">
                      <button className="btn-success" onClick={() => handleEdit(item.Id)}>Edit</button> {/* Fix case sensitivity for 'id' */}
                      <button className="btn-success" onClick={() => handleDelete(item.Id)}>Delete</button> {/* Fix case sensitivity for 'id' */}
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
		<p name="PropertyId">Property id : {editData.Id} </p>
          <p>Property:  <select className="dropdown-select" value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
            <option value="">{editData.status}</option>
            {['Active', 'Inactive'].map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select></p>
          <p>Vendor: {editData.propertyVendor}</p>
         
        </div>
      )}
      <button className="btn-blue" onClick={() => handleSaveChanges(editData.Id)}>Save Changes</button>
      <button className="btn-blue" onClick={handleModalClose}>Cancel</button>
    </div>
  </div>
)}

      </div>
    </>
  );
};

export default VendorProperties;
