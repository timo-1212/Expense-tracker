import Balance from './components/Balance'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

function App() {

  const transactions = [
    { id: 1, title: "Lunch", amount: -8 },
    { id: 2, title: "Salary", amount: 500},
  ]

  return (
    <>
      <h1>Expense Tracker</h1>

      <Balance transactions={transactions} />
      <TransactionForm />
      <TransactionList transactions={transactions} />
    </>
  )
}

export default App
