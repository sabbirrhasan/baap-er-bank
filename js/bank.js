// Deposit Button Click Event
document.getElementById('deposit-btn').addEventListener('click', function () {

    // Get New Deposit amount
    const newDepositInput = document.getElementById('deposit-input');
    const newDepositText = newDepositInput.value;
    const newDepositAmount = parseFloat(newDepositText);

    // Get Old Deposit amount
    const oldDepositInput = document.getElementById('deposit-amount');
    const oldDepositText = oldDepositInput.innerText;
    const oldDepositAmount = parseFloat(oldDepositText);

    // Set Total New Deposit amount
    const depositTotalAmount = oldDepositAmount + newDepositAmount;

    // Update Old Deposit amount
    oldDepositInput.innerText = depositTotalAmount;

    // Get Old Balance amount
    const oldBalanceInput = document.getElementById('balance-amount');
    const oldBalanceText = oldBalanceInput.innerText;
    const oldBalanceAmount = parseFloat(oldBalanceText);

    // Set Total New Balance amount
    const balanceTotalAmount = oldBalanceAmount + newDepositAmount;

    // Update Old Balance amount
    oldBalanceInput.innerText = balanceTotalAmount;

    // Reset Deposit Amount Input
    newDepositInput.value = '';
});



// Withdraw Button Click Event
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // Get New Withdraw amount
    const newWithdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = newWithdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);

    // Get Old Withdraw amount
    const oldWithdrawInput = document.getElementById('withdraw-amount');
    const oldWithdrawText = oldWithdrawInput.innerText;
    const oldWithdrawAmount = parseFloat(oldWithdrawText);

    // Set Total New Withdraw amount
    const withdrawTotalAmount = oldWithdrawAmount + newWithdrawAmount;

    // Update Old Withdraw amount
    oldWithdrawInput.innerText = withdrawTotalAmount;

    // Get Old Balance amount
    const oldBalanceInput = document.getElementById('balance-amount');
    const oldBalanceText = oldBalanceInput.innerText;
    const oldBalanceAmount = parseFloat(oldBalanceText);

    // Set Total New Balance amount after Withdraw
    const balanceTotalAmount = oldBalanceAmount - newWithdrawAmount;

    // Update Old Balance amount
    oldBalanceInput.innerText = balanceTotalAmount;

    // Reset Withdraw Amount Input
    newWithdrawInput.value = '';
});

