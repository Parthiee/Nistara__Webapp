import React, { useEffect, useState } from "react";
import "../../App.css";
import user from '../../Data/data.json';

const InstancePage = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [instanceID, setInstanceID] = useState();
  const [instanceID1, setInstanceID1] = useState(0);
  const [instanceID2, setInstanceID2] = useState(0);
  const [instanceID3, setInstanceID3] = useState(0);
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
      - INSTANCEID=${instanceID1}
      - LLM_API_KEY=${key}
`,
    Matcher: `
  matcher:
    image: matcher:latest
    stdin_open: true # docker run -i
    tty: true        # docker run -t
    environment:
      - INSTANCEID=${instanceID2}
`,
    Translator: `
  translator:
    image: translator:latest
    stdin_open: true # docker run -i
    tty: true        # docker run -t
    environment:
      - INSTANCEID=${instanceID3}
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

  useEffect(() => {
    const getInstanceID = async () => {
      try {
        const response = await fetch("http://localhost:8000/getInstanceID", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        const data = await response.json();
        console.log(data.result);
        setInstanceID(data.result);
        setInstanceID1(data.result + 1);
        setInstanceID2(data.result + 2);
        setInstanceID3(data.result + 3);
      } catch (e) {
        console.log(e);
      }
    };

    getInstanceID();
  }, [instanceID]);


  const updateInstanceID = async () => {
    try {
        const response = await fetch("http://localhost:8000/updateInstanceID", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            classifier_id: instanceID1,
            matcher_id: instanceID2,
            translator_id: instanceID3,
            name: user.name,
            phone: user.phonenumber,
            address: user.address,
            id: user.id

          })
        });
        const data = await response.json();
        console.log(data.result);
        setInstanceID(data.result);
        setInstanceID1(data.result + 1);
        setInstanceID2(data.result + 2);
        setInstanceID3(data.result + 3);
      } catch (e) {
        console.log(e);
      }

  }
  const downloadFile = async (content, fileName, contentType) => {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    await  updateInstanceID()
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  
  };

  const handleDownload = () => {
    const fileContent = headers + getServiceCompose();
    downloadFile(fileContent, 'docker-compose.yaml', 'text/yaml');
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
          <div style={{ marginBottom: '15px' }}>
            <label>Instance ID for Classifier:</label>
            <input
              type="text"
              value={instanceID1}
              onChange={(e) => setInstanceID1(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
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
        <div style={{ marginBottom: '15px' }}>
          <label>Instance ID for Matcher:</label>
          <input
            type="text"
            value={instanceID2}
            onChange={(e) => setInstanceID2(e.target.value)}
          />
        </div>
      )}

      {selectedServices.includes("Translator") && (
        <div style={{ marginBottom: '15px' }}>
          <label>Instance ID for Translator:</label>
          <input
            type="text"
            value={instanceID3}
            onChange={(e) => setInstanceID3(e.target.value)}
          />
        </div>
      )}

      {selectedServices.length > 0 ? (
        <>
          <pre>{headers + getServiceCompose()}</pre>
          <button onClick={handleDownload}>Download Compose File</button>
        </>
      ) : null}
    </div>
  );
};

export default InstancePage;
