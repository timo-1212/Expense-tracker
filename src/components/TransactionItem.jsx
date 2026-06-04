function TransactionItem ({ transaction, deleteTransaction }) {
    return (
        <div
            style={{
                border: "1px solid gray",
                padding: "5px",
                marginBottom: "8px"
            }}
        >
            <h3>{transaction.title}</h3>
            <h3>{transaction.amount}</h3>

            <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
        </div>
    )
}

export default TransactionItem