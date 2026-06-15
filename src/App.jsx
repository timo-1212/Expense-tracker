import { useState, useEffect } from 'react'
import Balance from './components/Balance'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import CategoryChart from './components/CategoryChart'

function App() {

  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions")

    return savedTransactions ? JSON.parse(savedTransactions) : []
  })

  const [selectedCategory, setSelectedcategory] = useState("All")
  const [selectedDateRange, setSelectedDateRange] = useState("All")

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"
  })

  const filteredTransactions = transactions.filter(transaction => {
    const matchesCategory =
      selectedCategory === "All" ||
      transaction.category === selectedCategory

    const matchesDate = isInSelectedDateRange(transaction)

    return matchesCategory && matchesDate
  })

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions))
  }, [transactions])

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light")
  }, [darkMode])

  function addTransaction(transaction) {
    setTransactions([transaction, ...transactions])
  }

  function deleteTransaction(id) {
    setTransactions(transactions.filter(transaction => transaction.id !== id))
  }

  function isInSelectedDateRange(transaction) {
    if (selectedDateRange === "All") return true

    const transactionDate = new Date(transaction.createdAt)
    const today = new Date()

    if (selectedDateRange === "Today") {
      return transactionDate.toDateString() === today.toDateString()
    }

    if (selectedDateRange === "This month") {
      return (
        transactionDate.getMonth() === today.getMonth() &&
        transactionDate.getFullYear() === today.getFullYear()
      )
    }

    return true
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-slate-100 text-slate-100 duration-300 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <header className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Expense Tracker</h1>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-200">Track your income and expenses</p>
            </div>
            <button
              className="rounded-xl slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm cursor-pointer duration-200 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:border"
              onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? "Light mode" : "Dark mode"}
            </button>
        </header>

        <Balance transactions={transactions} />

        <main className="grid items-start gap-6 lg:grid-cols-[2fr_1fr]">
          <section className="rounded-2xl bg-white p-6 shadow-sm duration-300 dark:bg-slate-800">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="mb-4 text-xl font-semibold text-slate-800 dark:text-slate-100">Transactions</h2>
              <div className="flex gap-3">
                <select
                  className="rounded-xl border-slate-200 bg-white px-4 py-2 text-sm shadow-sm outline-none text-slate-500 focus:border-emerald-500 duration-300 dark:text-slate-200 dark:bg-slate-700"
                  value={selectedDateRange}
                  onChange={(event) => setSelectedDateRange(event.target.value)}
                >
                  <option value="All">All time</option>
                  <option value="Today">Today</option>
                  <option value="This month">This month</option>
                </select>

                <select
                  className="rounded-xl border-slate-200 bg-white px-4 py-2 text-sm shadow-sm outline-none text-slate-500 focus:border-emerald-500 duration-300 dark:text-slate-200 dark:bg-slate-700"
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
              </div>
            </div>
            
            <div className="max-h-[520px] overflow-y-auto pr-2">
              <TransactionList
                transactions={filteredTransactions}
                deleteTransaction={deleteTransaction}
              />
            </div>
          </section>

          <aside className="space-y-6">
            <section className="rounded-2xl bg-white p-6 shadow-sm duration-300 dark:bg-slate-800">
              <h2 className="mb-4 text-xl font-semibold text-slate-800 dark:text-slate-100">Add transaction</h2>
              <TransactionForm addTransaction={addTransaction} />
            </section>

            <section className="rounded-2xl bg-white p-6 shadow-sm duration-300 dark:bg-slate-800">
              <h2 className="mb-4 text-xl font-semibold text-slate-800 dark:text-slate-100">Spending by category</h2>
              <CategoryChart transactions={transactions} />
            </section>
          </aside>
        </main>
        </div>
      </div>
    </div>
  )
}

export default App
