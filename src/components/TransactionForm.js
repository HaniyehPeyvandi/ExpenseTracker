import { useState } from "react";

const TransactionForm = ({addTransaction}) => {
  const [formValues, setFormValues] = useState({
    amount: 0,
    desc: "",
    type: "expense",
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if(formValues.desc === "" || formValues.amount === ""){
      alert("enter form values!");
      return;
    }

    addTransaction(formValues);
    setFormValues({amount:0, desc:"", type:"expense"});
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="number"
        placeholder="Amount"
        name="amount"
        onChange={changeHandler}
        value={formValues.amount}
      />
      <input
        type="text"
        placeholder="Description"
        name="desc"
        onChange={changeHandler}
        value={formValues.desc}
      />
      <div>
        <input
          type="radio"
          name="type"
          id="expense"
          value="expense"
          onChange={changeHandler}
          checked={formValues.type === "expense"}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          name="type"
          id="income"
          value="income"
          onChange={changeHandler}
          checked={formValues.type === "income"}
        />
        <label htmlFor="income">Income</label>
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
