function TransactionItem ({ transaction, deleteTransaction }) {
    const isIncome = transaction.amount > 0

    return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4">
      <div>
        <h3 className="font-semibold text-slate-800">
          {transaction.title}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {transaction.category}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <strong
          className={
            isIncome
              ? "text-emerald-600"
              : "text-rose-500"
          }
        >
          {transaction.amount}€
        </strong>

        <button
          className="rounded-lg bg-rose-50 px-3 py-1 text-sm font-medium text-rose-600 hover:bg-rose-100 cursor-pointer duration-200"
          onClick={() => deleteTransaction(transaction.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TransactionItem