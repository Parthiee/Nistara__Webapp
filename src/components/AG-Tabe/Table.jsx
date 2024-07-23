import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ModuleRegistry } from '@ag-grid-community/core';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-quartz.css';
import user from '../../Data/data.json';

// Register the required AG Grid modules
ModuleRegistry.registerModules([ClientSideRowModelModule]);

export const TableComponent = ({ TableContentAsListOfJSON }) => {
    
    const [rowData] = useState(TableContentAsListOfJSON);
    const cols = Object.keys(TableContentAsListOfJSON[0]).map(key => ({ field: key }));
    

    function haversine(lat1, lon1, lat2=user.geolocation[0], lon2=user.geolocation[1]) {
        const toRad = angle => (angle * Math.PI) / 180;
      
        const R = 6371; // Radius of the Earth in kilometers
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
      
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
      
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      
        return R * c; // Distance in kilometers
      }

    for(var i=0; i<TableContentAsListOfJSON.length; i++)
    {

        TableContentAsListOfJSON[i].geolocation = haversine(TableContentAsListOfJSON[i].geolocation[0],TableContentAsListOfJSON[i].geolocation[1])
    }

 


    const defaultColDef = {
        flex: 1,
        resizable: true,
        sortable: true,
        filter: true
    };

    return (
        <div className="ag-theme-quartz" style={{ width: '100%', height: '600px' }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={cols}
                defaultColDef={defaultColDef}
            />
        </div>
    );
};

// // Example data
// const TableContentAsListOfJSON = [
//     { name: 'Alamelu' },
//     { name: 'Meena' }
// ];

// // Rendering the component
// const root = createRoot(document.getElementById('root'));
// root.render(<TableComponent TableContentAsListOfJSON={TableContentAsListOfJSON} />);

