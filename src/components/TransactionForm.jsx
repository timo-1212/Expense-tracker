import { useState } from "react"

function TransactionForm ({ addTransaction }) {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [error, setError] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        if (!title.trim()) {
            setError('Transaction title is required')
            return
        }

        if (amount === '') {
            setError('Amount is required')
            return
        }

        if (Number(amount) === 0) {
            setError('Amount cannot be 0')
            return
        }

        if (!category) {
            setError('Please select a category')
            return
        }

        const newTransaction = {
            id: Date.now(),
            title: title.trim(),
            amount: Number(amount),
            category: category,
        }

        addTransaction(newTransaction)

        setTitle('')
        setAmount('')
        setCategory('')
        setError('')
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
            <p className="rounded-xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-600">{error}</p>
            )}

            <input
                className="w-full rounded-xl border border-slate-200 px-4 py-2 outline-none text-slate-800 placeholder-slate-500 focus:border-slate-600"
                type="text"
                placeholder="Transaction title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <input
                className="w-full rounded-xl border border-slate-200 px-4 py-2 outline-none text-slate-800 placeholder-slate-500 focus:border-slate-600"
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
            />

            <select
                className="w-full rounded-xl border border-slate-200 px-4 py-2 outline-none text-slate-500"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
            >
                <option value="" disabled hidden>Select category</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Income">Income</option>
                <option value="Other">Other</option>
            </select>

            <button 
                className="w-full rounded-xl bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700 cursor-pointer" 
                type="submit"
            >
                Add transaction
            </button>
        </form>
    )
}

export default TransactionForm