import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import axios from 'axios'; 
import { useForm } from "react-hook-form";
const App = () => {
  const [data, setData] = useState([]);
    const [editItem, setEditItem] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm({
    mode: "onSubmit",
  });
   const [formData, setFormData] = useState({
    C_name: '',
    C_email: '',
    C_phone: '',
    C_buyReason: '',
    C_plan: '',
    C_type: '',
    C_choice: [],
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked ? [...formData[name], e.target.value] : formData[name].filter(item => item !== e.target.value),
    });
  };
  
  const onSubmit = (formData) => {
    console.log(formData);
    axios.post('http://localhost:4300/contact_submit', formData)
      .then(response => {
        console.log('Form submitted successfully!', response.data);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  };
  
  
	 
	
	  const handleConnectNowClick = () => {
    setIsModalOpen(true);
	document.getElementById("contact-modal").showModal();
  };

	const focusPlaceholder = (e) => {
		document.getElementById(e.target.name).className = "input-label focused";
	};

	const blurPlaceholder = (e) => {
		if (e.target.value !== "") return;
		document.getElementById(e.target.name).className = "input-label";
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


  return (
      <>
    <Layout/> 
    <div className="set-form-block">
	    {data.map(item => ( 
  <div className="property-list">
    <div className="property-inner">
      <div className="row-property">
        <div className="property-image">
          <img src="https://static.makaan.com/1/1948029/297/images-for-project-154355646.jpeg?width=1024&height=576" />
        </div>
        <div className="property-data">
          <div className="property-info">
            <div className="property--info">
              <span className="property-name">
               {item.propertyName}
              </span>
              <span className="bottomd-detail">Sector 66 Mohali</span>
            </div>
       
          </div>
          <div className="property-table">
            <table className="listing-highlights">
              <thead>
                <tr>
                  <td colSpan={2}>Specifications</td>
                </tr>
              </thead>
              <tbody>
                <tr className="hcol">
                  <td className="price">
                    <div data-type="price-link">
                      <sup className="rupee currency"> </sup>
                      <span
                        className="val"
                        itemProp="offers"
                        itemScope=""
                        itemType="http://schema.org/Offer"
                      >
                        <meta
                          itemProp="url"
                          content="https://www.makaan.com/mohali/ambika-realcon-la-parisian-in-sector-66-20376158/4bhk-4t-2890-sqft-apartment"
                        />
                        <meta itemProp="price" content={20000000} />
                        <meta itemProp="priceCurrency" content="INR" />{item.propertyPrice}
                      </span>
                      <span className="unit"> Lakh</span>
                    </div>
                  </td>
                  <td className="lbl rate">{item.saleableArea} / sq ft</td>
                </tr>
                <tr className="hcol">
                  <td className="size">
                    <span className="val">{item.saleableArea} </span>
                  </td>
                  <td className="lbl">Area in sq ft</td>
                </tr>
                <tr className="hcol w44">
                  <td className="val">{item.propertyStatus}</td>
                  <td className="lbl">Construction Status</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="property-listing">
            <ul className="listing-details">
              <li className="keypoint" title="Possession by">
                <span>
                  <strong>
                    <span>Possession by Dec {item.yearConstruction}</span>
                  </strong>
                </span>
              </li>
              <li className="keypoint" title="Bathrooms">
                <span>{item.bathrooms}	 Bathrooms</span>
              </li>
              <li className="keypoint">
                <span>{item.transactionType} </span>
              </li>
            </ul>
          </div>
          <div className="property-description">
            <p>4 BHK Apartment for sale in Sector 66, Mohali - contact now,</p>
          </div>
          <div className="btn-wrap">
            <div className="btn-icons">
              <span
                data-lazymodule="shortlist"
                data-type="fav-btn"
                data-id={20376158}
                id="shortlist-20376158"
                className="favbtn serpfavd"
                title="shortlist this property"
                data-module="shortlist"
              >
                <i className="icon-makaan" />
                <i className="icon-makaanfill" />
              </span>
              <span
                className="serpShare shareitem"
                data-url="https://www.makaan.com/mohali/ambika-realcon-la-parisian-in-sector-66-20376158/4bhk-4t-2890-sqft-apartment"
                data-type="social-share"
                title="share"
              >
                <i className="icon-share" />
              </span>
            </div>
            <div className="callwrap">
            
                <a
        className="cbtn cbtn-p"
        data-call-now=""
        data-type="openLeadForm"
        onClick={handleConnectNowClick} // Add this line to handle click event
      >
        Connect Now
      </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
))}
	</div>
		<dialog id="contact-modal">
				<div className="contact-label">
					Advertiser Details
					<button
						className="close-btn"
						onClick={() => document.getElementById("contact-modal").close()}
					>
						×
					</button>
				</div>

				<div className="advertiser-details">
					<div>
						POSTED BY DEALER:
						<br />
						<br />
						{/*prop mobile & email*/} +91 1234567890 | example@gmail.com
						<br />
						{/*prop advertiser name*/} Krishna
					</div>
					<div>
						POSTED ON {/* prop date */} 8TH FEB,2024
						<br />
						<br />
						{/*prop property details*/}₹1CR | sector 3, noida
						<br />
						2000 sq.ft | 3BHK APARTMENT
					</div>
				</div>
				<div className="contact-label">
					Please fill in your details to be shared with the advertiser only.
				</div>

				  <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
					<div>
						BASIC INFORMATION <br />
						<br />
						Your reason to buy is
						<input
							{...register("reason")}
							className="button-input"
							type="radio"
							value="investment"
							name="C_buyReason"
							onChange={handleRadioChange}
							required
						/>
						Investment
						<input
							{...register("reason")}
							className="button-input"
							type="radio"
							value="selfUse"
							name="C_buyReason"
							onChange={handleRadioChange}
							required
						/>
						Self use
						<br />
						Are you a property dealer
						<input
							{...register("isDealer")}
							className="button-input"
							type="radio"
							value="yes"
							name="C_type"
							onChange={handleRadioChange}
							required
						/>
						Yes
						<input
							{...register("isDealer")}
							className="button-input"
							type="radio"
							value="no"
							name="C_type"
							onChange={handleRadioChange}
							required
						/>
						No
						<br />
						<br />
						<label id="C_name" style={{ color: `${errors.name ? "red" : ""}` }}>
							{errors.name ? errors.name.message : "Name"}
						</label>
						<input
							{...register("name", {
								required: "Enter name",
								minLength: {
									value: 8,
									message: "name must be 8-character long",
								},
							})}
							type="text"
							name="C_name"
							onChange={handleInputChange}
							className="content-input"
							style={errors.name ? { borderBottomColor: "red", color: "red" } : {}}
							onFocus={focusPlaceholder}
							id="C_name"
							onBlur={blurPlaceholder}
							
						/>
						<label id="C_phone" style={{ color: `${errors.phone ? "red" : ""}` }}>
							{errors.phone ? errors.phone.message : "Phone"}
						</label>
						<input
							{...register("phone", {
								required: "Enter phone number",
								pattern: {
									value: /^\d{10}$/,
									message: "10-digits with no character",
								},
							})}
							style={
								errors.phone
									? { marginBottom: 0, borderBottomColor: "red", color: "red" }
									: { marginBottom: 0 }
							}
							type="tel"
							name="C_phone"
							id="C_phone"
							onChange={handleInputChange}
							className="content-input"
							onFocus={focusPlaceholder}
							onBlur={blurPlaceholder}
						/>
						<div style={{ fontSize: "0.75rem", marginBottom: "2em" }}>
							this number would be verified
						</div>
						<label id="C_email" style={{ color: `${errors.email ? "red" : ""}` }}>
							{errors.email ? errors.email.message : "Email"}
						</label>
						<input
							{...register("email", {
								required: "Enter email",
								pattern: {
									value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]{2,}$/,
									message: "Invalid email address",
								},
							})}
							name="C_email"
							id="C_email"
							type="email"
							onChange={handleInputChange}
							className="content-input"
							style={errors.email ? { borderBottomColor: "red", color: "red" } : {}}
							onFocus={focusPlaceholder}
							onBlur={blurPlaceholder}
						/>
					</div>
					<div style={{ color: "rgba(0,0,0,0.6)" }}>
						OPTIONAL INFORMATION
						<br />
						<br />
						By when are you planning to buy the property
						<br />
						<input {...register("buyIn")} name="C_plan" className="button-input" onChange={handleRadioChange} type="radio" value="3" />
						3 months
						<input {...register("buyIn")} name="C_plan" className="button-input" onChange={handleRadioChange} type="radio" value="6" />
						6 months
						<input {...register("buyIn")} name="C_plan" className="button-input" onChange={handleRadioChange} type="radio" value="6+" />
						More than 6 months
						<br />
						<br />
						<input {...register("homeLoan")} onChange={handleCheckboxChange} name="C_choice" className="button-input" type="checkbox" />
						I am interested in home loan
						<br />
						<input {...register("siteVisit")} onChange={handleCheckboxChange} name="C_choice" className="button-input" type="checkbox" />
						I am interested in site visits
						<br />
						<input {...register("beContacted")} onChange={handleCheckboxChange} name="C_choice" className="button-input" type="checkbox" />
						I agree to be contacted...
						<br />
						<br />
						<button  type="submit">
							{isSubmitting ? "Gathering Details" : "View Advertiser Details"}
						</button>
						<br />
						<span style={{ fontSize: "0.75rem" }}>
							By submitting I accept the terms & conditions and privacy policy
						</span>
					</div>
				</form>
			</dialog>
	</>
  );
};

export default App;
