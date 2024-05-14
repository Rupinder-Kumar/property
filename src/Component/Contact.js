import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './Layout';
import './blog.css';

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [selectedVendors, setSelectedVendors] = useState({});

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:4300/contact');
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get('http://localhost:4300/propertyVendor');
        setVendors(response.data);
      } catch (error) {
        console.error('Error fetching vendors:', error);
      }
    };

    fetchVendors();
  }, []);

  useEffect(() => {
    const initialSelectedVendors = {};
    contacts.forEach(contact => {
      initialSelectedVendors[contact.id] = '';
    });
    setSelectedVendors(initialSelectedVendors);
  }, [contacts]);

  const handleSelectChange = async (event, contactId) => {
    const selectedValue = event.target.value;
    setSelectedVendors(prevState => ({
      ...prevState,
      [contactId]: selectedValue
    }));

    try {
      const response = await axios.put(`http://localhost:4300/contact/${contactId}`, { dealer_cracker: selectedValue });
      const result = response.data;
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  return (
    <>
      <Layout />
      <div className="contact-table">
        <div className="contact-inner">
          <h2>All Leads</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Buy Reason</th>
                <th>Plan</th>
                <th>Choice</th>
                <th>Type</th>
                <th>Dealer Name</th>
                <th>Dealer Email</th>
                <th>Dealer Phone</th>
                <th>Dealer Cracker</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.C_name}</td>
                  <td>{contact.C_email}</td>
                  <td>{contact.C_phone}</td>
                  <td>{contact.C_buyReason}</td>
                  <td>{contact.C_plan}</td>
                  <td>{contact.C_choice}</td>
                  <td>{contact.C_type}</td>
                  <td>{contact.dealer_name}</td>
                  <td>{contact.dealer_email}</td>
                  <td>{contact.dealer_phone}</td>
                  <td>
           <select value={selectedVendors[contact.id]} onChange={(e) => handleSelectChange(e, contact.id)}>
  {vendors.map((vendor) => (
    <option key={vendor.id} value={vendor.propertyVendor} selected={vendor.propertyVendor === contact.dealer_cracker}>
      {vendor.propertyVendor}
    </option>
  ))}
</select>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contact;
