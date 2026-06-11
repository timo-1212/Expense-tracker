function Balance({ transactions = [] }) {
    const income = transactions
        .filter(transaction => transaction.amount > 0)
        .reduce((total, transaction) => total + transaction.amount, 0)

    const expenses = transactions
        .filter(transaction => transaction.amount < 0)
        .reduce((total, transaction) => total + transaction.amount, 0)

    const balance = income + expenses

    return (
        <div>
            <h2>Summary</h2>
            <p>Income: {income}€</p>
            <p>Expenses: {expenses}€</p>
            <p>Balance: {balance}€</p>
        </div>
    )
}

export default Balance