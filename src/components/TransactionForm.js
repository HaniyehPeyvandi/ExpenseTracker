const TransactionForm = () => {
  return ( 
    <form>
      <input type="number" placeholder="Amount"  name="amount"/>
      <input type="text" placeholder="Description" name="desc"/>
      <div>
        <input type="radio" name="type" id="expense"/>
        <label htmlFor="expense">Expense</label>
        <input type="radio" name="type" id="income"/>
        <label htmlFor="income">Income</label>
      </div>
      <button type="submit">Add Transaction</button>
    </form>
   );
}
 
export default TransactionForm;