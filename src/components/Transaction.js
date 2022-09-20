const Transaction = ({ transactions }) => {
  return (
    <section>
      {transactions.length ? (
        transactions.map((t) => {
          return (
            <div key={t.id}>
              <span>{t.desc}/</span>
              <span>{t.amount}</span>
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
