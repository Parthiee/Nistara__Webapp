import React, { useState } from "react";
import Cards from "../Cards/Cards";
import BasicTable from "../Table/BasicTable";
import "./MainDash.css";

const MainDash = () => {
  const initialOrders = [
    { name: "Inflatable Rescue Boats", trackingId: 18908424, time: "12:30 PM", date: "2 March 2022", status: "Request" },
    { name: "Life Jackets and Personal Flotation Devices (PFDs)", trackingId: 18908424, time: "01:00 PM", date: "2 March 2022", status: "Pending" },
    { name: "Emergency Food and Water Supplies", trackingId: 18908424, time: "02:15 PM", date: "2 March 2022", status: "Approved" },
    { name: "First Aid Kits", trackingId: 18908421, time: "03:00 PM", date: "2 March 2022", status: "Delivered" },
    { name: "Safety Helmets", trackingId: 18908425, time: "04:30 PM", date: "2 March 2022", status: "Request" },
    { name: "Portable Generators", trackingId: 18908426, time: "05:45 PM", date: "2 March 2022", status: "Approved" },
    { name: "Water Purification Tablets", trackingId: 18908427, time: "06:00 PM", date: "2 March 2022", status: "Pending" },
    { name: "Tents and Shelter Kits", trackingId: 18908428, time: "07:15 PM", date: "2 March 2022", status: "Approved" },
    { name: "Communication Radios", trackingId: 18908429, time: "08:00 PM", date: "2 March 2022", status: "Delivered" },
    { name: "Flashlights and Batteries", trackingId: 18908430, time: "09:30 PM", date: "2 March 2022", status: "Request" },
    { name: "Medical Supplies", trackingId: 18908431, time: "10:45 PM", date: "2 March 2022", status: "Pending" },
    { name: "Blankets and Sleeping Bags", trackingId: 18908432, time: "11:00 PM", date: "2 March 2022", status: "Approved" },
    { name: "Food Rations", trackingId: 18908433, time: "12:15 AM", date: "3 March 2022", status: "Request" },
    { name: "Hygiene Kits", trackingId: 18908434, time: "01:30 AM", date: "3 March 2022", status: "Approved" },
    { name: "GPS Devices", trackingId: 18908435, time: "02:45 AM", date: "3 March 2022", status: "Pending" }
  ];

  const [orders, setOrders] = useState(initialOrders);

  // Function to handle status change
  const handleStatusChange = (trackingId) => {
    const updatedOrders = orders.map((order) => {
      if (order.trackingId === trackingId) {
        return { ...order, status: "Approved" };
      }
      return order;
    });

    setOrders(updatedOrders);
  };

  return (
    <div className="MainDash">
      <h1>Agency Name</h1>
      <Cards />
      <BasicTable rows={orders} onStatusChange={handleStatusChange} />
    </div>
  );
};

export default MainDash;
