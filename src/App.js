import React from 'react';
import './VideoBackground.css'; 
import './video.mp4';
import './App.css';
import Service  from "./Service"
import List  from "./List";
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import FullWidthSlider from './FullWidthSlider';
import Modals from './Component/Modals';
import Dashboard from './Component/Dashboard';
import Home from './Home';
import Customerform from './Component/Customerform';
import Propertyadd from './Component/Propertyadd';
import Propertyinsert from './Component/Propertyinsert';
import Propertycard from './Component/Propertycard';
import VendorPropertyadd from './Component/VendorPropertyadd';
import Listproperties from './Component/list_properties';
import Customerlist from './Component/Customerlist';
import Manufacture from './Component/Manufacture';
import Manufacturerlist from './Component/Manufacturerlist';
import Products from './Component/Productslist';
import VDashboard from './Component/vendorDashboard';
import CustomerDashboard from './Component/CustomerDashboard';
import Rentpropertyadd from './Component/Rentpropertyadd';
import VendorProperties from './Component/VendorProperties';
import Wallet from './Component/Wallet';
import UserSignup from './Component/User';
import Profile from './Component/Profile';
import Frontenduser from './Component/Frontenduser';
import  PropertiesFilter  from "./PropertiesFilter";
import  BlogForm  from "./Component/BlogForm";
import  PostTable  from "./Component/PostTable";
import  ReviewForm  from "./Component/ReviewForm";
import  Testimonial  from "./Component/Testimonial";
import  CustomerLogin  from "./Component/CustomerLogin";
import  AdsProperties  from "./Component/AdsProperties";
import  Contact  from "./Component/Contact";
import  Propertyupdate  from "./Component/Propertyupdate";

const App= () => {
  return (
  <>
  <Router>
  
		<Routes>
		  <Route path="/" element={<Home />} />
          <Route path="/login" element={<Modals />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/VDashboard" element={<VDashboard />} />
          <Route path="/VendorPropertyadd" element={<VendorPropertyadd />} />
          <Route path="/CustomerDashboard" element={<CustomerDashboard />} />
          <Route path="/Propertyinsert" element={<Propertyinsert />} />
          <Route path="/Rentpropertyadd" element={<Rentpropertyadd />} />
          <Route path="/VendorProperties" element={<VendorProperties />} />
          <Route path="/Propertylist" element={<Listproperties />} />
          <Route path="/Propertycard" element={<Propertycard />} />
          <Route path="/Manufacture" element={<Manufacture />} />
          <Route path="/Manufacturerlist" element={<Manufacturerlist />} />
          <Route path="/Products" element={<Products />} />
		  <Route path="/Wallet" element={<Wallet />} />
		  <Route path="/Loginpanel" element={<UserSignup />} />
		  <Route path="/profile" element={<Profile />} />
		  <Route path="/Frontenduser" element={<Frontenduser />} />
		  <Route path="/PropertiesFilter" element={<PropertiesFilter />} />
		   <Route path="/BlogForm" element={<BlogForm />} />
		  <Route path="/PostTable" element={<PostTable />} />
		  <Route path="/ReviewForm" element={<ReviewForm />} />
		  <Route path="/Testimonial" element={<Testimonial />} />
		  <Route path="/CustomerLogin" element={<CustomerLogin />} />
		  <Route path="/AdsProperties" element={<AdsProperties />} />
		  <Route path="/Contact" element={<Contact />} />
		  <Route path="/Propertyupdate" element={<Propertyupdate />} />
		  
		</Routes>

</Router>	
	</>
  );
};

export default App;