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
    <div className="min-h-screen bg-slate-100 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <header className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-800">Expense Tracker</h1>
            <p className="mt-1 text-sm text-slate-500">Track your income and expenses</p>
          </div>
        

        <select
          className="rounded-xl border-slate-200 bg-white px-4 py-2 text-sm shadow-sm outline-none text-slate-500 focus:border-emerald-500"
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
      </header>

      <Balance transactions={transactions} />

      <main className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-slate-800">Transactions</h2>
          <TransactionList
            transactions={filteredTransactions}
            deleteTransaction={deleteTransaction}
          />
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-slate-800">Add transaction</h2>
          <TransactionForm addTransaction={addTransaction} />
        </section>
      </main>
      </div>
    </div>
  )
}

export default App
