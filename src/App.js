import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";
import "./style.css";

function App() {
  const [tableData, setTableData] = useState([]); 
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) =>{
        console.log(data)
        setTableData(data)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
     <div className="form-container">
     <Form tableData={tableData} setTableData={setTableData} search={search} setSearch={setSearch} />
     </div>

     <div className="table-container">
     {tableData ? (
        <Table tableData={tableData} search={search} setSearch={setSearch} />
      ) : (
        <p>Loading data...</p>
      )}
     </div>
     
    </div>
  );
}

export default App;
