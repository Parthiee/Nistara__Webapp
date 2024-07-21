import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ModuleRegistry } from '@ag-grid-community/core';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-quartz.css';

// Register the required AG Grid modules
ModuleRegistry.registerModules([ClientSideRowModelModule]);

export const TableComponent = ({ TableContentAsListOfJSON }) => {
    const [rowData] = useState(TableContentAsListOfJSON);
    
    const cols = Object.keys(TableContentAsListOfJSON[0]).map(key => ({ field: key }));
    
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

