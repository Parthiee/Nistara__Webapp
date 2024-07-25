// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";
import img4 from "../imgs/warning-img1.jpeg";
import img5 from "../imgs/warning-img2.jpeg";
import img6 from "../imgs/warning-img1.jpeg";

// Sidebar Data
export const SidebarData = [
   {
    icon: UilClipboardAlt,
    heading: "Request Items",
  },
  {
    icon: UilClipboardAlt,
    heading: "Evacuation",
  },
  {
    icon: UilClipboardAlt,
    heading: "Search Person",
  },
  {
    icon: UilClipboardAlt,
    heading: "Services",
  },
  {
    icon: UilUsersAlt,
    heading: "Early Warnings",
  }
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data


export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered medicines for high fever, milk and 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has ordered bread and milk.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered medicines for high fever.",
    time: "2 hours ago",
  },
  // Add more records here
  {
    img: img1,
    name: "Captain America",
    noti: "has ordered vitamins and supplements.",
    time: "3 hours ago",
  },
  {
    img: img2,
    name: "Thor",
    noti: "has ordered protein powder and energy drinks.",
    time: "5 hours ago",
  },
  {
    img: img3,
    name: "Hulk",
    noti: "has ordered bandages and pain relievers.",
    time: "1 day ago",
  },
  {
    img: img1,
    name: "Black Widow",
    noti: "has ordered first aid kit and antiseptics.",
    time: "2 days ago",
  },
  {
    img: img2,
    name: "Hawkeye",
    noti: "has ordered eye drops and headache pills.",
    time: "3 days ago",
  },
  {
    img: img3,
    name: "Doctor Strange",
    noti: "has ordered cough syrup and throat lozenges.",
    time: "4 days ago",
  },
  {
    img: img1,
    name: "Spider-Man",
    noti: "has ordered vitamins and minerals.",
    time: "5 days ago",
  },
];


// export const EarlyWarningData = [
//   {
//     img: img4,
//     name: "Andrew Thomas",
//     noti: "has ordered medicines for high fever, milk and 2500mh battery.",
//     time: "25 seconds ago",
//   },
//   {
//     img: img5,
//     name: "James Bond",
//     noti: "has ordered bread and milk.",
//     time: "30 minutes ago",
//   },
//   {
//     img: img6,
//     name: "Iron Man",
//     noti: "has ordered medicines for high fever.",
//     time: "2 hours ago",
//   },
// ];

// Data.js
// Data/Data.js

export const resourcesData = [
  { id: 1, name: 'Inflatable Rescue Boats', currentStock: 20, estimatedStock: 30 },
  { id: 2, name: 'Life Jackets', currentStock: 50, estimatedStock: 60 },
  { id: 3, name: 'Emergency Food Supplies', currentStock: 100, estimatedStock: 150 },
  { id: 4, name: 'Medical Supplies', currentStock: 80, estimatedStock: 100 },
  { id: 5, name: 'Blankets', currentStock: 200, estimatedStock: 250 },
  { id: 6, name: 'Portable Generators', currentStock: 15, estimatedStock: 20 },
  { id: 7, name: 'Flashlights', currentStock: 30, estimatedStock: 40 },
  { id: 8, name: 'Water Pumps', currentStock: 25, estimatedStock: 30 },
  { id: 9, name: 'Tents', currentStock: 60, estimatedStock: 70 },
  { id: 10, name: 'Radios', currentStock: 35, estimatedStock: 45 },
  // Add more resources as needed
];
// Data/Data.js

export const WarningsData = [
  {
    id: 1,
    headline: 'Flood Warning',
    content: 'Heavy rainfall expected in the next 24 hours. Take necessary precautions.',
    profilePic: 'profile_pic_url_1',
    profileName: 'Weather Authority',
    resourceIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 2,
    headline: 'Earthquake Alert',
    content: 'Seismic activity detected. Prepare for potential aftershocks.',
    profilePic: 'profile_pic_url_2',
    profileName: 'Geological Survey',
    resourceIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 3,
    headline: 'Tsunami Watch',
    content: 'Tidal waves possible after undersea disturbance. Stay alert.',
    profilePic: 'profile_pic_url_3',
    profileName: 'Oceanographic Institute',
    resourceIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  // Add more warnings as needed
];




// // Remember to adjust the structure and numbers accordingly based on the actual data and requirements.
// Updated CurrentStock data
export const CurrentStock = [
  {
    category: 'Emergency Lighting and Communication',
    resources: [
      { name: 'Emergency Lights', stock: 200 },
      { name: 'Communication Radios', stock: 150 },
      { name: 'GPS Devices', stock: 120 },
      { name: 'Flashlights', stock: 180 },
      { name: 'Portable Generators', stock: 100 },
      { name: 'High-Altitude Drones', stock: 50 },
      { name: 'Emergency Communication Kits', stock: 200 },
      { name: 'Hydration Packs', stock: 80 },
      { name: 'Emergency Blankets', stock: 150 },
      { name: 'Portable Water Filters', stock: 120 },
    ],
  },
  {
    category: 'Health and Hygiene',
    resources: [
      { name: 'First Aid Kits', stock: 300 },
      { name: 'Medical Supplies', stock: 400 },
      { name: 'Hygiene Kits', stock: 500 },
      { name: 'Water Purification Tablets', stock: 250 },
      { name: 'Safety Goggles', stock: 100 },
      { name: 'Gas Masks', stock: 75 },
      { name: 'Emergency Masks', stock: 150 },
      { name: 'Sanitary Towels', stock: 200 },
      { name: 'Thermometers', stock: 150 },
      { name: 'Antiseptic Wipes', stock: 250 },
    ],
  },
  {
    category: 'Tools and Equipment',
    resources: [
      { name: 'Shovels and Tools', stock: 150 },
      { name: 'Rescue Tools', stock: 120 },
      { name: 'Emergency Tents', stock: 130 },
      { name: 'Rope and Harness Kits', stock: 100 },
      { name: 'Portable Lights', stock: 80 },
      { name: 'Fire Extinguishers', stock: 150 },
      { name: 'Navigation Tools', stock: 200 },
      { name: 'Emergency Batteries', stock: 90 },
      { name: 'Water Pumps', stock: 110 },
      { name: 'Ladders', stock: 70 },
    ],
  },
  {
    category: 'Personal Items',
    resources: [
      { name: 'Emergency Backpacks', stock: 180 },
      { name: 'Personal Hygiene Kits', stock: 200 },
      { name: 'Emergency Blankets', stock: 150 },
      { name: 'Sleeping Bags', stock: 160 },
      { name: 'Portable Toilets', stock: 90 },
      { name: 'Waterproof Clothing', stock: 150 },
      { name: 'Personal Locator Beacons', stock: 70 },
      { name: 'Emergency Whistles', stock: 100 },
      { name: 'Solar Chargers', stock: 60 },
      { name: 'Emergency Ponchos', stock: 120 },
    ],
  },
  {
    category: 'Clothing and Shelter',
    resources: [
      { name: 'Emergency Shelters', stock: 140 },
      { name: 'Tents', stock: 150 },
      { name: 'Blankets', stock: 130 },
      { name: 'Sleeping Mats', stock: 150 },
      { name: 'Emergency Jackets', stock: 80 },
      { name: 'Waterproof Boots', stock: 90 },
      { name: 'Insulated Gloves', stock: 50 },
      { name: 'Winter Hats', stock: 40 },
      { name: 'Emergency Scarves', stock: 60 },
      { name: 'Emergency Socks', stock: 50 },
    ],
  },
  {
    category: 'Safety and Protection',
    resources: [
      { name: 'Safety Helmets', stock: 150 },
      { name: 'Reflective Vests', stock: 130 },
      { name: 'Gas Masks', stock: 90 },
      { name: 'Safety Goggles', stock: 60 },
      { name: 'Fire Extinguishers', stock: 150 },
      { name: 'Emergency Alarms', stock: 50 },
      { name: 'Protective Gloves', stock: 100 },
      { name: 'Emergency Masks', stock: 120 },
      { name: 'Anti-Radiation Suits', stock: 40 },
      { name: 'Emergency Ponchos', stock: 70 },
    ],
  },
];

// Updated EarlyWarningData with corrected stock values
export const EarlyWarningData = [
  {
    id: 1,
    headline: 'Flood Warning',
    content: 'Heavy rainfall expected in the next 24 hours. Take necessary precautions.',
    profilePic: 'profile_pic_url_1',
    profileName: 'Weather Authority',
    resources: {
      'Emergency Lighting and Communication': [
        { name: 'Emergency Lights', estimatedStock: 40 },
        { name: 'Communication Radios', estimatedStock: 30 },
        { name: 'GPS Devices', estimatedStock: 50 },
        { name: 'Flashlights', estimatedStock: 45 },
        { name: 'Portable Generators', estimatedStock: 25 },
        { name: 'High-Altitude Drones', estimatedStock: 20 },
        { name: 'Emergency Communication Kits', estimatedStock: 55 },
        { name: 'Hydration Packs', estimatedStock: 15 },
        { name: 'Emergency Blankets', estimatedStock: 30 },
        { name: 'Portable Water Filters', estimatedStock: 35 },
      ],
      'Health and Hygiene': [
        { name: 'First Aid Kits', estimatedStock: 60 },
        { name: 'Medical Supplies', estimatedStock: 100 },
        { name: 'Hygiene Kits', estimatedStock: 120 },
        { name: 'Water Purification Tablets', estimatedStock: 100 },
        { name: 'Safety Goggles', estimatedStock: 20 },
        { name: 'Gas Masks', estimatedStock: 15 },
        { name: 'Emergency Masks', estimatedStock: 35 },
        { name: 'Sanitary Towels', estimatedStock: 50 },
        { name: 'Thermometers', estimatedStock: 60 },
        { name: 'Antiseptic Wipes', estimatedStock: 25 },
      ],
      'Tools and Equipment': [
        { name: 'Shovels and Tools', estimatedStock: 60 },
        { name: 'Rescue Tools', estimatedStock: 40 },
        { name: 'Emergency Tents', estimatedStock: 50 },
        { name: 'Rope and Harness Kits', estimatedStock: 30 },
        { name: 'Portable Lights', estimatedStock: 20 },
        { name: 'Fire Extinguishers', estimatedStock: 50 },
        { name: 'Navigation Tools', estimatedStock: 55 },
        { name: 'Emergency Batteries', estimatedStock: 25 },
        { name: 'Water Pumps', estimatedStock: 35 },
        { name: 'Ladders', estimatedStock: 15 },
      ],
      'Personal Items': [
        { name: 'Emergency Backpacks', estimatedStock: 50 },
        { name: 'Personal Hygiene Kits', estimatedStock: 75 },
        { name: 'Emergency Blankets', estimatedStock: 40 },
        { name: 'Sleeping Bags', estimatedStock: 50 },
        { name: 'Portable Toilets', estimatedStock: 35 },
        { name: 'Waterproof Clothing', estimatedStock: 50 },
        { name: 'Personal Locator Beacons', estimatedStock: 30 },
        { name: 'Emergency Whistles', estimatedStock: 25 },
        { name: 'Solar Chargers', estimatedStock: 15 },
        { name: 'Emergency Ponchos', estimatedStock: 25 },
      ],
      'Clothing and Shelter': [
        { name: 'Emergency Shelters', estimatedStock: 35 },
        { name: 'Tents', estimatedStock: 50 },
        { name: 'Blankets', estimatedStock: 30 },
        { name: 'Sleeping Mats', estimatedStock: 40 },
        { name: 'Emergency Jackets', estimatedStock: 25 },
        { name: 'Waterproof Boots', estimatedStock: 35 },
        { name: 'Insulated Gloves', estimatedStock: 20 },
        { name: 'Winter Hats', estimatedStock: 15 },
        { name: 'Emergency Scarves', estimatedStock: 25 },
        { name: 'Emergency Socks', estimatedStock: 15 },
      ],
      'Safety and Protection': [
        { name: 'Safety Helmets', estimatedStock: 30 },
        { name: 'Reflective Vests', estimatedStock: 35 },
        { name: 'Gas Masks', estimatedStock: 25 },
        { name: 'Safety Goggles', estimatedStock: 20 },
        { name: 'Fire Extinguishers', estimatedStock: 50 },
        { name: 'Emergency Alarms', estimatedStock: 15 },
        { name: 'Protective Gloves', estimatedStock: 30 },
        { name: 'Emergency Masks', estimatedStock: 35 },
        { name: 'Anti-Radiation Suits', estimatedStock: 10 },
        { name: 'Emergency Ponchos', estimatedStock: 25 },
      ],
    },
  },
  {
    id: 2,
    headline: 'Earthquake Alert',
    content: 'Significant seismic activity detected. Be prepared for possible aftershocks.',
    profilePic: 'profile_pic_url_2',
    profileName: 'Seismic Bureau',
    resources: {
      'Emergency Lighting and Communication': [
        { name: 'Emergency Lights', estimatedStock: 35 },
        { name: 'Communication Radios', estimatedStock: 30 },
        { name: 'GPS Devices', estimatedStock: 25 },
        { name: 'Flashlights', estimatedStock: 40 },
        { name: 'Portable Generators', estimatedStock: 20 },
        { name: 'High-Altitude Drones', estimatedStock: 15 },
        { name: 'Emergency Communication Kits', estimatedStock: 45 },
        { name: 'Hydration Packs', estimatedStock: 10 },
        { name: 'Emergency Blankets', estimatedStock: 30 },
        { name: 'Portable Water Filters', estimatedStock: 25 },
      ],
      'Health and Hygiene': [
        { name: 'First Aid Kits', estimatedStock: 70 },
        { name: 'Medical Supplies', estimatedStock: 120 },
        { name: 'Hygiene Kits', estimatedStock: 100 },
        { name: 'Water Purification Tablets', estimatedStock: 90 },
        { name: 'Safety Goggles', estimatedStock: 25 },
        { name: 'Gas Masks', estimatedStock: 20 },
        { name: 'Emergency Masks', estimatedStock: 30 },
        { name: 'Sanitary Towels', estimatedStock: 60 },
        { name: 'Thermometers', estimatedStock: 70 },
        { name: 'Antiseptic Wipes', estimatedStock: 30 },
      ],
      'Tools and Equipment': [
        { name: 'Shovels and Tools', estimatedStock: 50 },
        { name: 'Rescue Tools', estimatedStock: 40 },
        { name: 'Emergency Tents', estimatedStock: 35 },
        { name: 'Rope and Harness Kits', estimatedStock: 30 },
        { name: 'Portable Lights', estimatedStock: 25 },
        { name: 'Fire Extinguishers', estimatedStock: 40 },
        { name: 'Navigation Tools', estimatedStock: 35 },
        { name: 'Emergency Batteries', estimatedStock: 20 },
        { name: 'Water Pumps', estimatedStock: 30 },
        { name: 'Ladders', estimatedStock: 20 },
      ],
      'Personal Items': [
        { name: 'Emergency Backpacks', estimatedStock: 60 },
        { name: 'Personal Hygiene Kits', estimatedStock: 80 },
        { name: 'Emergency Blankets', estimatedStock: 40 },
        { name: 'Sleeping Bags', estimatedStock: 60 },
        { name: 'Portable Toilets', estimatedStock: 30 },
        { name: 'Waterproof Clothing', estimatedStock: 40 },
        { name: 'Personal Locator Beacons', estimatedStock: 20 },
        { name: 'Emergency Whistles', estimatedStock: 30 },
        { name: 'Solar Chargers', estimatedStock: 20 },
        { name: 'Emergency Ponchos', estimatedStock: 30 },
      ],
      'Clothing and Shelter': [
        { name: 'Emergency Shelters', estimatedStock: 40 },
        { name: 'Tents', estimatedStock: 35 },
        { name: 'Blankets', estimatedStock: 20 },
        { name: 'Sleeping Mats', estimatedStock: 30 },
        { name: 'Emergency Jackets', estimatedStock: 20 },
        { name: 'Waterproof Boots', estimatedStock: 25 },
        { name: 'Insulated Gloves', estimatedStock: 15 },
        { name: 'Winter Hats', estimatedStock: 10 },
        { name: 'Emergency Scarves', estimatedStock: 20 },
        { name: 'Emergency Socks', estimatedStock: 10 },
      ],
      'Safety and Protection': [
        { name: 'Safety Helmets', estimatedStock: 25 },
        { name: 'Reflective Vests', estimatedStock: 30 },
        { name: 'Gas Masks', estimatedStock: 15 },
        { name: 'Safety Goggles', estimatedStock: 20 },
        { name: 'Fire Extinguishers', estimatedStock: 30 },
        { name: 'Emergency Alarms', estimatedStock: 15 },
        { name: 'Protective Gloves', estimatedStock: 20 },
        { name: 'Emergency Masks', estimatedStock: 25 },
        { name: 'Anti-Radiation Suits', estimatedStock: 10 },
        { name: 'Emergency Ponchos', estimatedStock: 20 },
      ],
    },
  },
  {
    id: 3,
    headline: 'Tsunami Alert',
    content: 'Tsunami waves expected. Evacuate to higher ground immediately.',
    profilePic: 'profile_pic_url_3',
    profileName: 'Tsunami Monitoring Agency',
    resources: {
      'Emergency Lighting and Communication': [
        { name: 'Emergency Lights', estimatedStock: 30 },
        { name: 'Communication Radios', estimatedStock: 25 },
        { name: 'GPS Devices', estimatedStock: 20 },
        { name: 'Flashlights', estimatedStock: 35 },
        { name: 'Portable Generators', estimatedStock: 15 },
        { name: 'High-Altitude Drones', estimatedStock: 10 },
        { name: 'Emergency Communication Kits', estimatedStock: 30 },
        { name: 'Hydration Packs', estimatedStock: 15 },
        { name: 'Emergency Blankets', estimatedStock: 20 },
        { name: 'Portable Water Filters', estimatedStock: 20 },
      ],
      'Health and Hygiene': [
        { name: 'First Aid Kits', estimatedStock: 50 },
        { name: 'Medical Supplies', estimatedStock: 80 },
        { name: 'Hygiene Kits', estimatedStock: 90 },
        { name: 'Water Purification Tablets', estimatedStock: 70 },
        { name: 'Safety Goggles', estimatedStock: 20 },
        { name: 'Gas Masks', estimatedStock: 15 },
        { name: 'Emergency Masks', estimatedStock: 20 },
        { name: 'Sanitary Towels', estimatedStock: 40 },
        { name: 'Thermometers', estimatedStock: 50 },
        { name: 'Antiseptic Wipes', estimatedStock: 20 },
      ],
      'Tools and Equipment': [
        { name: 'Shovels and Tools', estimatedStock: 40 },
        { name: 'Rescue Tools', estimatedStock: 30 },
        { name: 'Emergency Tents', estimatedStock: 30 },
        { name: 'Rope and Harness Kits', estimatedStock: 20 },
        { name: 'Portable Lights', estimatedStock: 20 },
        { name: 'Fire Extinguishers', estimatedStock: 30 },
        { name: 'Navigation Tools', estimatedStock: 25 },
        { name: 'Emergency Batteries', estimatedStock: 15 },
        { name: 'Water Pumps', estimatedStock: 20 },
        { name: 'Ladders', estimatedStock: 10 },
      ],
      'Personal Items': [
        { name: 'Emergency Backpacks', estimatedStock: 40 },
        { name: 'Personal Hygiene Kits', estimatedStock: 60 },
        { name: 'Emergency Blankets', estimatedStock: 20 },
        { name: 'Sleeping Bags', estimatedStock: 30 },
        { name: 'Portable Toilets', estimatedStock: 20 },
        { name: 'Waterproof Clothing', estimatedStock: 30 },
        { name: 'Personal Locator Beacons', estimatedStock: 10 },
        { name: 'Emergency Whistles', estimatedStock: 20 },
        { name: 'Solar Chargers', estimatedStock: 15 },
        { name: 'Emergency Ponchos', estimatedStock: 20 },
      ],
      'Clothing and Shelter': [
        { name: 'Emergency Shelters', estimatedStock: 30 },
        { name: 'Tents', estimatedStock: 30 },
        { name: 'Blankets', estimatedStock: 15 },
        { name: 'Sleeping Mats', estimatedStock: 20 },
        { name: 'Emergency Jackets', estimatedStock: 15 },
        { name: 'Waterproof Boots', estimatedStock: 20 },
        { name: 'Insulated Gloves', estimatedStock: 10 },
        { name: 'Winter Hats', estimatedStock: 10 },
        { name: 'Emergency Scarves', estimatedStock: 15 },
        { name: 'Emergency Socks', estimatedStock: 10 },
      ],
      'Safety and Protection': [
        { name: 'Safety Helmets', estimatedStock: 20 },
        { name: 'Reflective Vests', estimatedStock: 25 },
        { name: 'Gas Masks', estimatedStock: 10 },
        { name: 'Safety Goggles', estimatedStock: 15 },
        { name: 'Fire Extinguishers', estimatedStock: 20 },
        { name: 'Emergency Alarms', estimatedStock: 10 },
        { name: 'Protective Gloves', estimatedStock: 15 },
        { name: 'Emergency Masks', estimatedStock: 20 },
        { name: 'Anti-Radiation Suits', estimatedStock: 5 },
        { name: 'Emergency Ponchos', estimatedStock: 15 },
      ],
    },
  },
];

export const getWarningData = (id) => {
  const warning = EarlyWarningData.find(warning => warning.id === id);
  if (!warning) return {};

  return {
    headline: warning.headline,
    resources: warning.resources,
  };
};