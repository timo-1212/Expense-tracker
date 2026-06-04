function Balance({ transactions = [] }) {
    const balance = transactions.reduce((total, transaction) => {
        return total + transaction.amount
    }, 0)

    return <h2>Balance: {balance}$</h2>
}

export default Balance