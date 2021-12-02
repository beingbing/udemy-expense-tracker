import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem({item}) {

    return (
        <div className="expense-item">
            <div>
                <ExpenseDate date={item.date} />
            </div>
            <div className="expense-item__description">
                <h2>
                    {item.title}
                </h2>
                <div className="expense-item__price">
                    ${item.amount}
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;