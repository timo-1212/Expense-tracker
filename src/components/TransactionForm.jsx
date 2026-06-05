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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Transaction title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
            />

            <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
            >
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Income">Income</option>
                <option value="Other">Other</option>
            </select>
            <button type="submit">Add transaction</button>
        </form>
    )
}

export default TransactionForm