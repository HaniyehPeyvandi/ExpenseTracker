import { useState } from "react";
import styles from "./Overview.module.css";

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
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && <div>Form</div>}
      <div className={styles.resultSection}>
        <div>Expense {expense}</div>
        <div>Income {income}</div>
      </div>
    </>
  );
};

export default Overview;
