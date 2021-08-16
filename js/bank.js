function getNewAmount(newInputId) {
    const newInput = document.getElementById(newInputId);
    const newText = newInput.value;
    const newAmount = parseFloat(newText);
    newInput.value = '';
    return newAmount;
};
function getOldAmount(oldInputId, newAmount) {
    const oldInput = document.getElementById(oldInputId);
    const oldText = oldInput.innerText;
    const oldAmount = parseFloat(oldText);
    const totalAmount = oldAmount + newAmount;
    oldInput.innerText = totalAmount;
};

function getOldBalace() {
    const oldBalanceInput = document.getElementById('balance-amount');
    const oldBalanceText = oldBalanceInput.innerText;
    const oldBalanceAmount = parseFloat(oldBalanceText);
    return oldBalanceAmount;
};

function updateBalance(newAmount, isDeposit) {
    const oldBalanceInput = document.getElementById('balance-amount');
    const oldBalanceAmount = getOldBalace();
    if (isDeposit == true) {
        const balanceTotalAmount = oldBalanceAmount + newAmount;
        oldBalanceInput.innerText = balanceTotalAmount;
    }
    else {
        const balanceTotalAmount = oldBalanceAmount - newAmount;
        oldBalanceInput.innerText = balanceTotalAmount;
    }
};

// Deposit Button Click Event
document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositAmount = getNewAmount('deposit-input');
    if (newDepositAmount > 0) {
        getOldAmount('deposit-amount', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
});

// Withdraw Button Click Event
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawAmount = getNewAmount('withdraw-input');
    const oldBalanceAmount = getOldBalace();
    if (newWithdrawAmount > 0 && oldBalanceAmount > newWithdrawAmount) {
        getOldAmount('withdraw-amount', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
});






// Very Messy Rules of solving this project

// // Deposit Button Click Event
// document.getElementById('deposit-btn').addEventListener('click', function () {
//     // Get New Deposit amount
//     const newDepositInput = document.getElementById('deposit-input');
//     const newDepositText = newDepositInput.value;
//     const newDepositAmount = parseFloat(newDepositText);

//     // Get Old Deposit amount & Set Total New Deposit amount
//     const oldDepositInput = document.getElementById('deposit-amount');
//     const oldDepositText = oldDepositInput.innerText;
//     const oldDepositAmount = parseFloat(oldDepositText);

//     const depositTotalAmount = oldDepositAmount + newDepositAmount;

//     // Update Old Deposit amount

//     oldDepositInput.innerText = depositTotalAmount;

//     // Get Old Balance amount
//     const oldBalanceInput = document.getElementById('balance-amount');
//     const oldBalanceText = oldBalanceInput.innerText;
//     const oldBalanceAmount = parseFloat(oldBalanceText);

//     // Set Total New Balance amount
//     const balanceTotalAmount = oldBalanceAmount + newDepositAmount;

//     // Update Old Balance amount
//     oldBalanceInput.innerText = balanceTotalAmount;

//     // Reset Deposit Amount Input
//     newDepositInput.value = '';
// });



// Withdraw Button Click Event

// document.getElementById('withdraw-btn').addEventListener('click', function () {
//     // Get New Withdraw amount
//     const newWithdrawInput = document.getElementById('withdraw-input');
//     const newWithdrawText = newWithdrawInput.value;
//     const newWithdrawAmount = parseFloat(newWithdrawText);

//     // Get Old Withdraw amount
//     const oldWithdrawInput = document.getElementById('withdraw-amount');
//     const oldWithdrawText = oldWithdrawInput.innerText;
//     const oldWithdrawAmount = parseFloat(oldWithdrawText);

//     // Set Total New Withdraw amount
//     const withdrawTotalAmount = oldWithdrawAmount + newWithdrawAmount;

//     // Update Old Withdraw amount
//     oldWithdrawInput.innerText = withdrawTotalAmount;

//     // Get Old Balance amount
//     const oldBalanceInput = document.getElementById('balance-amount');
//     const oldBalanceText = oldBalanceInput.innerText;
//     const oldBalanceAmount = parseFloat(oldBalanceText);

//     // Set Total New Balance amount after Withdraw
//     const balanceTotalAmount = oldBalanceAmount - newWithdrawAmount;

//     // Update Old Balance amount
//     oldBalanceInput.innerText = balanceTotalAmount;

//     // Reset Withdraw Amount Input
//     newWithdrawInput.value = '';
// });



