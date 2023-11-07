import React from "react";

function Table({ tableData, search, setSearch }) {
    if (!Array.isArray(tableData)) {
        // Handle the case when data is not an array
        return <p>Loading data...</p>;
      }
  
      const filter = tableData.filter((transaction) =>
      transaction.description.toLowerCase().includes((search || "").toLowerCase())
    );
  const tableItems = filter.map((transaction) => (
    <ul key={transaction.id}>
      <li>
        <strong>Date</strong>: {transaction.date}
      </li>
      <li>
        <strong>Description</strong>: {transaction.description}
      </li>
      <li>
        <strong>Category</strong>: {transaction.category}
      </li>
      <li>
        <strong>Amount</strong>: {transaction.amount}
      </li>
      <br />
    </ul>
  ));

  return (
    <div className="table-container">
      <ul>{tableItems}</ul>
    </div>
  );
}

export default Table;
