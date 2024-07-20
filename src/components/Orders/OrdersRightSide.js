import React from "react";
import BasicTable from "../Table/BasicTable";

const OrdersRightSide = ({ orders }) => {
  // Filter orders based on status: Pending
  const pendingOrders = orders.filter((order) => order.status === "Pending");

  return (
    <div>
      <h2>Pending Orders</h2>
      <BasicTable rows={pendingOrders} />
    </div>
  );
};

export default OrdersRightSide;
