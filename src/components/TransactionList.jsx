import TransactionItem from "./TransactionItem"

function TransactionList ({ transactions, deleteTransaction }) {
    if (transactions.length === 0){
        return (
            <p className="rounded-xl bg-slate-50 p-4 text-sm text-slate-500">No transactions found.</p>
        )
    }

    return (
        <div className="space-y-3">
            {transactions.map(transaction => (
                <TransactionItem
                key={transaction.id}
                transaction={transaction}
                deleteTransaction={deleteTransaction}
                />
            ))}
        </div>
    )
}

export default TransactionList