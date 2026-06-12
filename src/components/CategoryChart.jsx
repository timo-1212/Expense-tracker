function CategoryChart( {transactions = [] }) {
    const categories = ['Food', 'Transport', 'Entertainment', 'Other']

    const expenseTransactions = transactions.filter(
        transaction => transaction.amount < 0
    )

    const categoryTotals = expenseTransactions.reduce((totals, transaction) => {
        const category = transaction.category
        const amount = Math.abs(transaction.amount)

        totals[category] = (totals[category] || 0) + amount

        return totals
    }, {})

    const chartData = categories.filter(category => categoryTotals[category]).map(category => ({
        category,
        total: categoryTotals[category],
    }))



    const maxTotal = Math.max(
        ...chartData.map(item => item.total), 0
    )

    if (chartData.length === 0) {
        return (
            <p className="rounded-xl bg-slate-50 p-4 text-sm text-slate-500">
                No expenses to display.
            </p>
        )
    }

    return (
        <div className="space-y-4">
            {chartData.map(item => {
                const width = maxTotal === 0
                    ? 0
                    : (item.total / maxTotal) * 100
                return (
                    <div key={item.category}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                            <span className="font-medium text-slate-700">
                                {item.category}
                            </span>

                            <span className="font-semibold text-slate-800">
                                {item.total}€
                            </span>
                        </div>

                        <div className="h-3 rounded-full bg-slate-100">
                            <div className="h-3 rounded-full bg-emerald-500" style={{ width: `${width}%`  }}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CategoryChart