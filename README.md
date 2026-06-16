# Expense Tracker

Simple expense tracking dashboard built with React and Tailwind CSS.
The app allows users to track income and expenses, filter transactions, view spending by category, and persist data locally in the browser.

## Features

- Add income and expense transactions
- View total balance, income, expenses, and transaction count
- Filter transactions by category
- Filter transaction by date range
- Delete transactions
- View expenses by category in a simple chart
- Persist transactions using localStorage
- Toggle between light and dark mode
- Responsive dashboard layout

## Technologies 

- React
- Vite
- Tailwind CSS

## Getting started

Clone the repository:

```bash
git clone https://github.com/timo-1212/Expense-tracker.git
cd Expense-tracker
```

Install dependencies:
```
npm install
```

Start the development server:
```
npm run dev
```

## Project structure

```
src/
├── components/
│   ├── Balance.jsx
│   ├── CategoryChart.jsx
│   ├── TransactionForm.jsx
│   ├── TransactionItem.jsx
│   └── TransactionList.jsx
├── App.jsx
├── index.css
└── main.jsx
```