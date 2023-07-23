console.log('money master file');

// calculate btn function----------

document.getElementById('calculate-btn').addEventListener('click', function () {
    // calculate division input field
    const incomeInput = getInputValueById('income-input');
    const foodExpensesInput = getInputValueById('food-expenses-input');
    const rentExpensesInput = getInputValueById('rent-expenses-input');
    const clothesExpensesInput = getInputValueById('clothes-expenses-input');

    // calculate division innerText
    const previousTotalExpenses = getElementTextById('total-expenses');
    const previousBalance = getElementTextById('balance');

    // calculation of income & expenses
    const newTotalExpenses = previousTotalExpenses + foodExpensesInput + rentExpensesInput + clothesExpensesInput;

    const newBalance = previousBalance + incomeInput - newTotalExpenses;

    // set innerText to element
    setElementTextById('total-expenses', newTotalExpenses);
    setElementTextById('balance', newBalance);

    //     console.log(foodExpensesInput);
    //     console.log(newTotalExpenses);
    //     console.log(newBalance);
})

// saving btn function----------
document.getElementById('save-btn').addEventListener('click', function () {
    const balance = getElementTextById('balance');

    const savingPercentageInput = getInputValueById('save-input');

    const savingAmount = balance * (savingPercentageInput / 100);

    setElementTextById('saving-amount', savingAmount);

    const remainingBalance = balance - savingAmount;

    setElementTextById('remaining-balance', remainingBalance);


    // console.log('save btn clicked')
    // console.log(balance);
    // console.log(savingPercentageInput);
    // console.log(savingAmount);

})