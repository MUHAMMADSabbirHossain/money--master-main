console.log('money master file');


document.getElementById('calculate-btn').addEventListener('click', function () {

    const incomeInput = getInputValueById('income-input');
    const foodExpensesInput = getInputValueById('food-expenses-input');
    const rentExpensesInput = getInputValueById('rent-expenses-input');
    const clothesExpensesInput = getInputValueById('clothes-expenses-input');

    const previousTotalExpenses = getElementTextById('total-expenses');
    const previousBalance = getElementTextById('balance');

    const newTotalExpenses = previousTotalExpenses + foodExpensesInput + rentExpensesInput + clothesExpensesInput;

    const newBalance = previousBalance + incomeInput - newTotalExpenses;

    setElementTextById('total-expenses', newTotalExpenses);
    setElementTextById('balance', newBalance);

    console.log(foodExpensesInput);
    console.log(newTotalExpenses);
    console.log(newBalance);
})

