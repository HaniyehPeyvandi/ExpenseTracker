import styles from "./Transaction.module.css";

const Transaction = ({ transactions }) => {
  return (
    <section>
      {transactions.length ? (
        transactions.map((t) => {
          return (
            <div
              key={t.id}
              className={styles.transaction}
              style={{ borderRight: t.type === "expense" && "4px solid red" }}
            >
              <span>{t.desc}</span>
              <span>$ {t.amount}</span>
            </div>
          );
        })
      ) : (
        <p>Add some transactions!</p>
      )}
    </section>
  );
};

export default Transaction;
