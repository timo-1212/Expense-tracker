import { useState, useEffect } from 'react'
import Balance from './components/Balance'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

function App() {

  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions")

    return savedTransactions ? JSON.parse(savedTransactions) : []
  })

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions))
  }, [transactions])

  function addTransaction(transaction) {
    setTransactions([...transactions, transaction])
  }

  function deleteTransaction(id) {
    setTransactions(transactions.filter(transaction => transaction.id !== id))
  }

  return (
    <>
      <h1>Expense Tracker</h1>

      <Balance transactions={transactions} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
    </>
  )
}

export default App
