import React, { useState } from "react";
import "./style.css";

function Form({ tableData, setTableData, search, setSearch }) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Create a new transaction object
    const newTransaction = {
      id: tableData.length + 1,
      date: date,
      description: description,
      category: category,
      amount: parseFloat(amount),
    };

    // Update tableData with the new transaction
    setTableData([...tableData, newTransaction]);

    // Clear the form fields
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  }

  return (
    <form className="form-input" onSubmit={handleSubmit}>
      <h1>Welcome to the Bank of Flatiron</h1>
      <label>Add the date of the new transaction</label>
      <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
      <br></br>
      <label>Add a description of the new transaction</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br></br>
      <label>Add category of the new transaction</label>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <br></br>
      <label>Add amount of the new transaction</label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br></br>
      <input type="submit" value="Submit" />
      <br></br>
      <label>Search</label>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <br></br>
      <input type="submit" />
    </form>
  );
}

export default Form;
