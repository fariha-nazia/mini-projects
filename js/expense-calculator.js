// console.log('expense calcu js file added');

// 1st: setting all the const for input field and the btn
const insertBtn = document.getElementById("expense-insert-btn");
const expenseField = document.getElementById("expense-field");
const amountField = document.getElementById("amount-field");

// 5th: after putting an id now we are taking a constant so that we can you the text which we made inside the back tick
const rowContainer = document.getElementById("row-container");

// 6th: now we will try to fetch the amount where we will see the sum of all expense
const sumOfExpense = document.getElementById("sum-of-expense");

// 2nd: add even listener so that I can make the btn work on click
insertBtn.addEventListener("click", function(){

    // 3rd: to fetch the value which was given by the user
    const expense = expenseField.value;
    const amount = Number(amountField.value);

    // 4th: Card to store all the items - start
    const row = `
                <div class="card-body">
                    <div class="flex">
                        <p>${expense}</p>
                        <p>${amount} Euro</p>
                    </div>
                </div>                   
                `;

        let sumOfExpenseValue = Number(sumOfExpense.innerText);
        sumOfExpenseValue += amount;
        sumOfExpense.innerText = sumOfExpenseValue;
                rowContainer.innerHTML += row;

    console.log(expense, amount);
});
  