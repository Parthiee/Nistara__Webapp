import React, { useState, useEffect } from 'react';
import BingMapsReact from 'bingmaps-react';

function MapComponent({ requests }) {
  const [pushPins, setPushPins] = useState([]);

  useEffect(() => {
    if (requests && requests.length > 0) {
      const points = requests.map((post) => ({
        center: {
          latitude: post.geolocation[0],
          longitude: post.geolocation[1],
        },
        options: {
          title: post.umbrellatype || 'No Title', // Default title if not present
        },
      }));
      setPushPins(points); // Set pushPins directly
      console.log(points); // Debug: Check the points being set
    }
  }, [requests]); // Add requests to dependency array

  return (
    <div style={{ height: '100vh', width: '90%' }}>
      <div style={{ height: 'calc(100% - 3rem)', width: '100%' }}>
        {pushPins.length > 0 ? (
          <BingMapsReact
            bingMapsKey="Ah6eXyl7X7VIoVMSMT8IYkx03udleg2D7LqOpLkgto935lQEcZC8D9-zEZqjRTDh"
            height="100%"
            width="100%"
            mapOptions={{
              navigationBarMode: 'square',
            }}
            // viewOptions={{
            //   center: { latitude: 13.067439, longitude: 80.179493 }, // Default center location
            //   mapTypeId: 'road',
            // }}
            pushPins={pushPins} // Pass pushPins to the component
          />
        ) : (
          <h1>Loading Maps....</h1>
        )}
      </div>
    </div>
  );
}

export default MapComponent;
