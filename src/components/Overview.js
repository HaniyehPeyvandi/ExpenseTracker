import { useState } from "react";
import styles from "./Overview.module.css";
import TransactionForm from "./TransactionForm";

const Overview = ({ expense, income, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className={styles.topSection}>
        <p>Balance: {income - expense}</p>
        <button
          onClick={() => {
            setIsShow((prevState) => !prevState);
          }}
        >
          {isShow ? "CANCEL" : "ADD"}
        </button>
      </div>
      {isShow && <TransactionForm addTransaction={addTransaction} />}
      <div className={styles.resultSection}>
        <div className={styles.expenseBox}>
          Expense <span style={{ color: "red" }}>{expense} $</span>
        </div>
        <div className={styles.expenseBox}>
          Income <span>{income} $</span>
        </div>
      </div>
    </>
  );
};

export default Overview;
