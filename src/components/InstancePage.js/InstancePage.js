import React, { useState } from "react";
import "../../App.css";

const InstancePage = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [instanceID, setInstanceID] = useState("");
  const [key, setKey] = useState("");

  const headers = `version: "3"
services:`;

  const services = {
    Classifier: `
  classifier:
    image: classifier:latest
    stdin_open: true # docker run -i
    tty: true        # docker run -t
    environment:
      - INSTANCEID=${instanceID}
      - LLM_API_KEY=${key}
`,
    Matcher: `
  matcher:
    image: matcher:latest
    stdin_open: true # docker run -i
    tty: true        # docker run -t
    environment:
      - INSTANCEID=${instanceID}
`,
    Translator: `
  translator:
    image: translator:latest
    stdin_open: true # docker run -i
    tty: true        # docker run -t
    environment:
      - INSTANCEID=${instanceID}
`
  };

  const onCheckboxChangeHandler = (event) => {
    const { value, checked } = event.target;
    setSelectedServices(prevState =>
      checked
        ? [...prevState, value]
        : prevState.filter(service => service !== value)
    );
  };

  const getServiceCompose = () => {
    return selectedServices.map(service => services[service]).join("");
  };

  return (
    <div style={{ height: '600px', overflowY: 'auto' }}>
      <h2>Services</h2>
      {Object.keys(services).map((service, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={service}
            value={service}
            onChange={onCheckboxChangeHandler}
          />
          <label htmlFor={service}>{service}</label>
        </div>
      ))}

      {selectedServices.includes("Classifier") && (
        <>
          <div>
            <label>Instance ID for Classifier:</label>
            <input
              type="text"
              value={instanceID}
              onChange={(e) => setInstanceID(e.target.value)}
            />
          </div>
          <div>
            <label>LLM API Key for Classifier:</label>
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value)}
            />
          </div>
        </>
      )}

      {selectedServices.includes("Matcher") && (
        <div>
          <label>Instance ID for Matcher:</label>
          <input
            type="text"
            value={instanceID}
            onChange={(e) => setInstanceID(e.target.value)}
          />
        </div>
      )}

      {selectedServices.includes("Translator") && (
        <div>
          <label>Instance ID:</label>
          <input
            type="text"
            value={instanceID}
            onChange={(e) => setInstanceID(e.target.value)}
          />
        </div>
      )}

      selectedServices ? 
      <pre>{headers + getServiceCompose()}</pre>
    </div>
  );
};

export default InstancePage;
