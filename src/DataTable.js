import React, { useMemo } from "react";

import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";

import { useNavigate } from 'react-router-dom';
const Table = props => {
  const columns = [
    {
      name: "Vehicle Type",
      selector: "type",
      sortable: true,
      grow: 2
    },
    {
      name: "Vehicle Number",
      selector: "number",
      sortable: true,
      hide: "sm"
    },
    {
      name: "Date/Time",
      selector: "time",
      sortable: true
    },
    {
      name: "Toll Name",
      selector: "tname",
      sortable: true,
      hide: "md"
    },
    {
      name: "Tarrif",
      selector: "tarrif",
      sortable: true,
      hide: "md"
    },
    // {
    //   name: "Buttons",
    //   button: true,
    //   cell: row =>
    //     row.showButtons ? (
    //       <>
    //         <button
    //           onClick={() => props.click(row.name)}
    //           style={{ marginRight: "5px" }}
    //         >
    //           Edit
    //         </button>
    //         <button onClick={() => props.click(row.type)}>Delete</button>
    //       </>
    //     ) : null
    // }
  ];

  const getToll = async () => {
    navigate('/tolllist');


};

const addnewVehicle = async () => {
  navigate('/addvehicle');
};

const addnewToll = async () => {
  navigate('/addtoll');
};
  const [filterText, setFilterText] = React.useState("");
  const navigate = useNavigate();
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );
  // const filteredItems = data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );
  const filteredItems = props.data.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <>
      
      <FilterComponent
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
      </>
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <>
    <div className="divBox">
    <h1 style = {{textAlign: "center"}}>Toll Management Portal </h1>
    
    </div>
    <br></br>
    <div style= {{float: "right" }}> <button onClick={getToll}  style = {{textAlign: "right"}} className="button is-info">Get Toll List </button>
    <button onClick={addnewVehicle}  style = {{textAlign: "right"}} className="button is-info">Add new Vehicle </button>
    <button onClick={addnewToll}  style = {{textAlign: "right"}} className="button is-info">Add new Toll </button>
    </div>
   
    <DataTable
      title="Vehicle List"
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      striped
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
    </>
  );
};

export default Table;
