import TransactionItem from "./TransactionItem"

function TransactionList ({ transactions, deleteTransaction }) {
    if (transactions.length === 0){
        return (
            <p className="rounded-xl bg-slate-50 p-4 text-sm text-slate-500 duration-300 dark:bg-slate-700 dark:text-slate-100">No transactions found.</p>
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