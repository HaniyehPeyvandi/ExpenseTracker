import { useState } from "react";
import styles from './ExpenseApp.module.css';
import Overview from "./Overview";
import Transaction from "./Transaction";

const ExpenseApp = () => {
  const [expense,setExpense] = useState(0);
  const [income,setIncome] = useState(0);
  const [transactions,setTransactions] = useState([]);

  return ( 
    <section className={styles.container}>
      <Overview expense={expense} income={income}/>
      <Transaction transactions={transactions}/>
    </section>
  );
}
 
export default ExpenseApp;