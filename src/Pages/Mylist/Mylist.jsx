// import React from 'react';

import { useContext, useEffect } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
// import { FaTachographDigital } from "react-icons/fa6";

const Mylist = () => {
    const {user} = useContext(AuthContex);
    console.log(user);
    useEffect(() =>{
     fetch(`http://localhost:5000/tour/${user?.email}`)
      .then(res=>res.json())
      .then(data =>{
        console.log(data);
      });
    },[user])


    return (
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2>
      <div className="overflow-x-auto">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <colgroup>
            <col className="w-5" />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-5" />
          </colgroup>
          <thead>
            <tr className="dark:bg-gray-300">
              <th className="p-3">A-Z</th>
              <th className="p-3">Name</th>
              <th className="p-3">Job title</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">Address</th>
              <th className="p-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
            <tr>
              <td className="px-3 text-2xl font-medium dark:text-gray-600">A</td>
              <td className="px-3 py-2">
                <p>Dwight Adams</p>
              </td>
              <td className="px-3 py-2">
                <span>UI Designer</span>
                <p className="dark:text-gray-600">Spirit Media</p>
              </td>
              <td className="px-3 py-2">
                <p>555-873-9812</p>
              </td>
              <td className="px-3 py-2">
                <p>dwight@adams.com</p>
              </td>
              <td className="px-3 py-2">
                <p>71 Cherry Court, SO</p>
                <p className="dark:text-gray-600">United Kingdom</p>
              </td>
              <td className="px-3 py-2">
                <div className="flex gap-10">
                <button className="btn btn-secondary">Update</button>
<button className="btn btn-accent">Delete</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2">
               
              </td>
            </tr>
          </tbody>
        
        </table>
      </div>
    </div>
    );
};

export default Mylist;