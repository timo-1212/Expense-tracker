import { useState } from "react"

function TransactionForm ({ addTransaction }) {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        const newTransaction = {
            id: Date.now(),
            title: title,
            amount: Number(amount),
        }

        addTransaction(newTransaction)

        setTitle('')
        setAmount('')
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

            <button type="submit">Add transaction</button>
        </form>
    )
}

export default TransactionForm