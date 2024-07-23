import {React, useState, useEffect} from "react";
import BasicTable from "../Table/BasicTable";
import dbClient from "../../database/db-connectivity";
import MapComponent from "../Maps/MapComponent";

const SearchRightSide = () => {


  const [data, setData] = useState();


  const db = new dbClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await db.getRequestSearchPosts();
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
  
  <MapComponent requests={data} />

    </div>
  );
};

export default SearchRightSide;
