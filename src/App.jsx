import { useState, useEffect } from 'react'
import Balance from './components/Balance'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

function App() {

  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions")

    return savedTransactions ? JSON.parse(savedTransactions) : []
  })

  const [selectedCategory, setSelectedcategory] = useState("All")

  const filteredTransactions = selectedCategory === "All" ? transactions
    : transactions.filter(transaction => transaction.category === selectedCategory)

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
      <select
        value={selectedCategory}
        onChange={(event) => setSelectedcategory(event.target.value)}
      >
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Income">Income</option>
        <option value="Other">Other</option>
      </select>
      <TransactionList transactions={filteredTransactions} deleteTransaction={deleteTransaction} />
    </>
  )
}

export default App
