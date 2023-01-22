import React, {useState} from 'react'
import '../styles/App.css';

const App = () => {
  const[expenseInput, setExpenseInput] = useState('');
  const[expenseList, setExpenseList] = useState([]);
  const[totalExpense, setTotalExpense] = useState(0);

  const handleExpenceButton = () => {
    const[itemName, itemPrice] = expenseInput.split("-").map(i => i.trim());
    setExpenseList([...expenseList, {itemName, itemPrice}]);
    setTotalExpense(totalExpense + parseFloat(itemPrice));
  }

  return (
    <div id="main">
      <input id="expense-input" value={expenseInput} onChange={e => setExpenseInput(e.target.value)}/>
      <button id="expense-button" onClick={handleExpenceButton}>Add Expense</button>
      <div id="expense-list">
        {expenseList.map((expense, index) => {
          <div key={index}>{expense.itemName} - {expense.itemPrice}</div>
        })}
      </div>
      <div id="total-expense">
        Total Expense: {totalExpense}
      </div>
    </div>
  )
}


export default App;
