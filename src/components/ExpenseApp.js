import { useState } from "react";
import styles from "./ExpenseApp.module.css";
import Overview from "./Overview";
import Transaction from "./Transaction";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (formValues) => {
    setTransactions([...transactions, { ...formValues, id: Date.now() }]);
  };

  return (
    <section className={styles.container}>
      <Overview
        expense={expense}
        income={income}
        addTransaction={addTransaction}
      />
      <Transaction transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;
