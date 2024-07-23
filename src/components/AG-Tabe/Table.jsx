import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ModuleRegistry } from '@ag-grid-community/core';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-quartz.css';
import user from '../../Data/data.json'; // Ensure this path is correct

// Register the required AG Grid modules
ModuleRegistry.registerModules([ClientSideRowModelModule]);

export const TableComponent = ({ TableContentAsListOfJSON }) => {
    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        if (TableContentAsListOfJSON.length > 0 && user.geolocation) {
            const updatedData = TableContentAsListOfJSON.map(item => {
                // Ensure `item.geolocation` exists and is an array
                if (item.geolocation && Array.isArray(item.geolocation)) {
                    const distance = haversine(item.geolocation[0], item.geolocation[1]);
                    return { ...item, distance };
                }
                return item;
            });
            setRowData(updatedData);
        } else {
            setRowData(TableContentAsListOfJSON);
        }
    }, [TableContentAsListOfJSON]);

    const haversine = (lat1, lon1, lat2 = user.geolocation[0], lon2 = user.geolocation[1]) => {
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
    };

    const cols = rowData[0]
        ? Object.keys(rowData[0]).map(key => ({ field: key }))
        : [];

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

// Example data
// const TableContentAsListOfJSON = [
//     { name: 'Alamelu', geolocation: [12.9716, 77.5946] },
//     { name: 'Meena', geolocation: [13.0827, 80.2707] }
// ];

// Rendering the component
// const root = createRoot(document.getElementById('root'));
// root.render(<TableComponent TableContentAsListOfJSON={TableContentAsListOfJSON} />);
