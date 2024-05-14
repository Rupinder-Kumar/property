import  React  from "react"

import logo from './logo.svg';
import './App.css';
import Form1 from './Component/Form1';
import Modals from './Component/Modals';
import Form3 from './Component/Form3';

import{Routes,Route,useRoutes}from 'react-router-dom'; 
import { FormDataProvider } from './Component/Formcontext';
import Layout from './Component/Layout';
import Dashboard from './Component/Dashboard';
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



function LoginApp() {
	 const routes = [
    { path: "/Dashboard", element: <Dashboard /> },
    { path: "/VDashboard", element: <VDashboard /> },
	{ path: "/VendorPropertyadd", element: <VendorPropertyadd /> },
    { path: "/CustomerDashboard", element: <CustomerDashboard /> },
    { path: "/Propertyinsert", element: <Propertyinsert /> },
	{ path: "/Rentpropertyadd", element: <Rentpropertyadd /> },
	{ path: "/VendorProperties", element: <VendorProperties /> },
    { path: "/Propertylist", element: <Listproperties /> },
	{ path: "/Propertycard", element: <Propertycard /> },
    { path: "/Manufacture", element: <Manufacture /> },
    { path: "/Manufacturerlist", element: <Manufacturerlist /> },
    { path: "/Products", element: <Products /> },
	{ path: "/login", element: <Modals /> }
  ];

  const routeResult = useRoutes(routes);
  return (
         <>
      {!routeResult && <Modals />}
      {routeResult}
    </>

  );
}

export default LoginApp;
