import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    //const [erroeMessage, setErrorMessage] = useState(null);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

   
    const handleBudgetChange = (event) => {
        if (event.target.value > 20000)
            alert("budget cannot exceed 20,000");
        if (event.target.value < {totalExpenses}) 
            alert("You cannot reduce the budget value lower than the spending")
        setNewBudget(event.target.value);
    }

    /*const handleUpClick = (event) => {
        if (event.target.value +10 > 20000)
            alert("budget cannot exceed 20,000");
        else
        setNewBudget(event.target.value +10);
    }*/

    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange} /*onKeyUp={handleUpClick}*/ min={totalExpenses}  max="20000"></input>
</div>
    );
};
export default Budget;