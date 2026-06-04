function TransactionItem ({ transaction }) {
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
        </div>
    )
}

export default TransactionItem