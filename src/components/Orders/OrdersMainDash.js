import React, { useState } from "react";
import BasicTable from "../Table/BasicTable";
import "../../App.css";
const OrdersMainDash = ({ orders }) => {
  const [ordersData, setOrdersData] = useState(orders);

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

  return (
    <div>
      <h2>Resource Requests</h2>
      <BasicTable rows={filteredOrders} onStatusChange={handleStatusChange} />

      <h2>Approved Requests</h2>
      <BasicTable rows={approvedOrders} />
    </div>
  );
};

export default OrdersMainDash;
