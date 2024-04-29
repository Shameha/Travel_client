// import React from 'react';
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import UpdatePage from "../Pages/UpdateTour/UpdatePage";
import TouristsSpot from "../Pages/TouristsSpot/TouristsSpot";
import Details from "../Pages/Details/Details";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivatRoute from "./PrivatRoute";
import Mylist from "../Pages/Mylist/Mylist";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=> fetch('http://localhost:5000/tour')
        },
        {
         path:"/addedTour",
         element:<AddTouristsSpot></AddTouristsSpot>
        },
        {
            path:"/update/:id",
            element:<UpdatePage></UpdatePage>
           },
        {
            path:"/tourist",
            element:<TouristsSpot></TouristsSpot>,
            loader:()=> fetch('http://localhost:5000/tour')
            
           }, {
            path:"/detail/:id",
            element:<PrivatRoute><Details></Details></PrivatRoute>,
            loader:({params})=> fetch(`http://localhost:5000/tour/${params.id}`)
            
           },
           {
            path:'/login',
            element:<Login></Login>
           },
           {
            
              path:'/register',
              element:<Register></Register>
             
           },
           {
            
            path:'/list',
            element:<Mylist></Mylist>
           
         },

      ]
    },
  ]);

  export default router;


