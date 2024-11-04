const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expensesList = document.getElementById('expenses');
const totalAmount = document.getElementById('total-amount');

let total = 0;

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const expenseName = expenseNameInput.value;
    const expenseAmount = parseFloat(expenseAmountInput.value);

    if (expenseName && !isNaN(expenseAmount) && expenseAmount > 0) {
        // Add expense to the list
        const li = document.createElement('li');
        li.textContent = `${expenseName}: $${expenseAmount.toFixed(2)}`;
        expensesList.appendChild(li);

        // Update total
        total += expenseAmount;
        totalAmount.textContent = total.toFixed(2);

        // Clear inputs
        expenseNameInput.value = '';
        expenseAmountInput.value = '';
    }
});
