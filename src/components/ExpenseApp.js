import { useState } from "react";
import styles from './ExpenseApp.module.css';
import Transaction from "./Transaction";

const ExpenseApp = () => {
  const [expense,setExpense] = useState(0);
  const [income,setIncome] = useState(0);
  const [transactions,setTransactions] = useState([]);

  return ( 
    <section className={styles.container}>
      <div className={styles.topSection}>
        <p>Balance: {income - expense}</p>
        <button>Add</button>
      </div>
      <div className={styles.resultSection}>
        <div>Expense {expense}</div>
        <div>Income {income}</div>
      </div>
      <Transaction transactions={transactions}/>
    </section>
  );
}
 
export default ExpenseApp;