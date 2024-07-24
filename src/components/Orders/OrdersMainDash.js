import React, { useState, useEffect } from "react";
import BasicTable from "../Table/BasicTable";
import "../../App.css";
import dbClient from "../../database/db-connectivity";
import { TableComponent } from '../AG-Tabe/Table';
import MapComponent from "../Maps/MapComponent";

const OrdersMainDash = () => {


  const [data, setData] = useState();

  const db = new dbClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await db.getRequestPosts();
        setData(response.result); // Ensure that the state is set with the correct data
        console.log(response)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
   // console.log(data)
  }, []);

  return (
  
       <div style={{ height: '600px', overflowY: 'auto' }}>
      <h2>Resource Requests</h2>
      {data ? <TableComponent TableContentAsListOfJSON={data} /> : <p>Loading data...</p>}
    
      </div>
  
  );
};

export default OrdersMainDash;
