import React from "react";
import BingMapsReact from "bingmaps-react";

function MapComponent() {
  // Define the push pin to mark a specific location
  const pushPin = {
    center: {
      latitude: 13.067439, // 13°04'N
      longitude: 80.179493, // 80°17'E
    },
    options: {
      title: "Marked Location",
    },
  };

  const pushPins = [pushPin];

  return (
    <div style={{ height: "100vh", width: "90%"}}>
      {/* <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Map</h2> */}
      <div style={{ height: "calc(100% - 3rem)", width: "100%" }}>
        <BingMapsReact
          bingMapsKey="Ah6eXyl7X7VIoVMSMT8IYkx03udleg2D7LqOpLkgto935lQEcZC8D9-zEZqjRTDh"
          height="100%"
          width="100%"
          mapOptions={{
            navigationBarMode: "square",
          }}
          viewOptions={{
            center: { latitude: 13.067439, longitude: 80.179493 }, // Focus on the specific location
            mapTypeId: "road",
          }}
          pushPins={pushPins} // Pass pushPins to the component
        />
      </div>
    </div>
  );
}

export default MapComponent;
