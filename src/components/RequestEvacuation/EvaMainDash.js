import React, { useState, useEffect } from "react";
import BasicTable from "../Table/BasicTable";
import "../../App.css";
import dbClient from "../../database/db-connectivity";
import { TableComponent } from '../AG-Tabe/Table';

const EvacuateMainDash = ({ orders }) => {

  const [ordersData, setOrdersData] = useState(orders);
  const [data, setData] = useState();

  // Function to handle status change
  const handleStatusChange = (trackingId) => {
    const updatedOrders = ordersData.map((order) => {
      if (order.trackingId === trackingId) {
        return { ...order, status: "Approved" };
      }
      return order;
    });

    setOrdersData(updatedOrders);
  };

  // Filter orders based on status: Not Approved, Pending, Delivered
  const filteredOrders = ordersData.filter(
    (order) => order.status === "Request"
  );

  // Filter orders where status is "Approved"
  const approvedOrders = ordersData.filter((order) => order.status === "Approved");
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
    <div>
      <h2>Resource Requests</h2>
      {data ? <TableComponent TableContentAsListOfJSON={data} /> : <p>Loading data...</p>}

      <h2>Approved Requests</h2>
      <BasicTable rows={approvedOrders} />
    </div>
  );
};

export default EvacuateMainDash;
