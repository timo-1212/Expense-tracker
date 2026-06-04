import { useState } from 'react'
import Balance from './components/Balance'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

function App() {

  const [transactions, setTransactions] = useState([
    { id: 1, title: "Lunch", amount: -8 },
    { id: 2, title: "Salary", amount: 500},
  ])

  function addTransaction(transaction) {
    setTransactions([...transactions, transaction])
  }

  return (
    <>
      <h1>Expense Tracker</h1>

      <Balance transactions={transactions} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </>
  )
}

export default App
