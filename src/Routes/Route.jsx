// import React from 'react';
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import UpdatePage from "../Pages/UpdateTour/UpdatePage";
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
           }
      ]
    },
  ]);

  export default router;


