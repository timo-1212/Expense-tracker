function TransactionItem ({ transaction, deleteTransaction }) {
    const amountClass = transaction.amount > 0 ? "income" : "expense"

    return (
        <div
            style={{
                border: "1px solid gray",
                padding: "5px",
                marginBottom: "8px"
            }}
        >
            <h3>{transaction.title}</h3>
            <p className={amountClass}>{transaction.amount}€</p>
            <p>Category: {transaction.category}</p>

            <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
        </div>
    )
}

export default TransactionItem