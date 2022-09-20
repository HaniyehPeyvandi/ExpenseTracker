import { useState } from "react";
import styles from "./Overview.module.css";
import TransactionForm from "./TransactionForm";

const Overview = ({ expense, income }) => {
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
      {isShow && <TransactionForm/>}
      <div className={styles.resultSection}>
        <div>Expense {expense}</div>
        <div>Income {income}</div>
      </div>
    </>
  );
};

export default Overview;
