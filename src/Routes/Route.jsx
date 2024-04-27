// import React from 'react';
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import UpdatePage from "../Pages/UpdateTour/UpdatePage";
import TouristsSpot from "../Pages/TouristsSpot/TouristsSpot";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
         path:"/addedTour",
         element:<AddTouristsSpot></AddTouristsSpot>
        },
        {
            path:"/update",
            element:<UpdatePage></UpdatePage>
           },
        {
            path:"/tourist",
            element:<TouristsSpot></TouristsSpot>,
            loader:()=> fetch('http://localhost:5000/tour')
            
           }
      ]
    },
  ]);

  export default router;


