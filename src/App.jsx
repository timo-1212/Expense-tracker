import Balance from './components/Balance'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

function App() {

  return (
    <>
      <h1>Expense Tracker</h1>

      <Balance />
      <TransactionForm />
      <TransactionList />
    </>
  )
}

export default App
