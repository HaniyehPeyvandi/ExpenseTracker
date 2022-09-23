import { useEffect, useState } from "react";
import styles from "./Transaction.module.css";

const Transaction = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredTnx, setFilteredTnx] = useState(props.transactions);

  useEffect(() => {
    filterTransactions(searchValue);
  }, [props.transactions]);

  const filterTransactions = (search) => {
    if (!search || search === "") {
      setFilteredTnx(props.transactions);
      return;
    }
    const filtered = props.transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filtered);
  };

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
    filterTransactions(e.target.value);
  };

  return (
    <section>
      <h3 className={styles.transactionHeading}>Transactions</h3>
      <input
        type="text"
        onChange={searchHandler}
        value={searchValue}
        className={styles.search}
        placeholder="Search"
      />
      {!props.transactions.length ? (
        <p>Add some transactions!</p>
      ) : filteredTnx.length ? (
        filteredTnx.map((t) => {
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
        <p>No item matches!</p>
      )}
    </section>
  );
};

export default Transaction;
