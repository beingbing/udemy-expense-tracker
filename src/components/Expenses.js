import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses({expenses}) {
    return (
        <Card className="expenses">
            {
                expenses.map(expense => <ExpenseItem key={expense.id} item={expense} />)
            }
        </Card>
    )
}

export default Expenses;