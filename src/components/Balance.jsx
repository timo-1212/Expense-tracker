function Balance({ transactions = [] }) {
    const income = transactions
        .filter(transaction => transaction.amount > 0)
        .reduce((total, transaction) => total + transaction.amount, 0)

    const expenses = transactions
        .filter(transaction => transaction.amount < 0)
        .reduce((total, transaction) => total + transaction.amount, 0)

    const balance = income + expenses

    return (
        <section className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">Balance</p>
                <strong className="mt-2 block text-2xl text-slate-800">{balance}€</strong>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">Income</p>
                <strong className="mt-2 block text-2xl text-emerald-600">{income}€</strong>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">Expenses</p>
                <strong className="mt-2 block text-2xl text-rose-500">{expenses}€</strong>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">Transactions</p>
                <strong className="mt-2 block text-2xl text-slate-800">{transactions.length}</strong>
            </div>
        </section>
    )
}

export default Balance