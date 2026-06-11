import { useState } from "react"

function TransactionForm ({ addTransaction }) {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState("Food")

    function handleSubmit(event) {
        event.preventDefault()

        const newTransaction = {
            id: Date.now(),
            title: title,
            amount: Number(amount),
            category: category,
        }

        addTransaction(newTransaction)

        setTitle('')
        setAmount('')
        setCategory("Food")
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                className="w-full rounded-xl border border-slate-200 px-4 py-2 outline-none placeholder-slate-500 focus:border-emerald-500"
                type="text"
                placeholder="Transaction title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <input
                className="w-full rounded-xl border border-slate-200 px-4 py-2 outline-none placeholder-slate-500 focus:border-emerald-500"
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