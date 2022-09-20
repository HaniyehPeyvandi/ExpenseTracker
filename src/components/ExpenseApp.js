import { useState, useEffect } from "react";
import styles from "./ExpenseApp.module.css";
import Overview from "./Overview";
import Transaction from "./Transaction";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((t) => {
      t.type === "expense"
        ? (exp += parseFloat(t.amount))
        : (inc += parseFloat(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transactions]);

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
