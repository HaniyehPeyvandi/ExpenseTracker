import styles from './Overview.module.css';

const Overview = ({expense,income}) => {
  return ( 
    <>
      <div className={styles.topSection}>
        <p>Balance: {income - expense}</p>
        <button>Add</button>
      </div>
      <div className={styles.resultSection}>
        <div>Expense {expense}</div>
        <div>Income {income}</div>
      </div>
    </>
   );
}
 
export default Overview;