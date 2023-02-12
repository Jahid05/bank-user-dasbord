// 1. add event listener to the deposit button
document.getElementById("deposit-btn").addEventListener("click", function () {
  // 2. get the deposit amount from the deposit input field
  const depositField = document.getElementById("deposit-field");
  const newDepositFieldString = depositField.value;
  const newDepositField = parseFloat(newDepositFieldString);
  // 3. get the current deposit ammount
  const totalDeposit = document.getElementById("total-deposit");
  const prevousDepositString = totalDeposit.innerText;
  const prevousDeposit = parseFloat(prevousDepositString);
  const currentDeposit = prevousDeposit + newDepositField;

  totalDeposit.innerText = currentDeposit;
  // 4. Total balance
  const totalBalance = document.getElementById("total-balance");
  const newTotalBalanceString = totalBalance.innerText;
  const newTotalBalance = parseFloat(newTotalBalanceString);

  currentTotalBalance = newTotalBalance + newDepositField;

  totalBalance.innerText = currentTotalBalance;
  // 4. deposit field clear
  depositField.value = "";
});
// 5. add event listener to the withdraw button
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawString = withdrawField.value;
  const newWithdrawField = parseFloat(newWithdrawString);

  const totalWithdraw = document.getElementById("total-withdraw");
  const prevousWithdrawString = totalWithdraw.innerText;
  const prevousWithdraw = parseFloat(prevousWithdrawString);

  const totalBalance = document.getElementById("total-balance");
  const newTotalBalanceString = totalBalance.innerText;
  const newTotalBalance = parseFloat(newTotalBalanceString);

  if (newWithdrawField > newTotalBalance) {
    alert("insufficient balance. Please use Add Money.");
  } else {
    const currentWithdraw = prevousWithdraw + newWithdrawField;
    totalWithdraw.innerText = currentWithdraw;

    currentTotalBalance = newTotalBalance - newWithdrawField;
    totalBalance.innerText = currentTotalBalance;
  }

  withdrawField.value = "";
});
