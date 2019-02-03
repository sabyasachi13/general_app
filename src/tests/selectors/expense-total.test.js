import selectExpensesTotal from '../../selectors/expense-total.js';
import expenses from '../fixtures/expenses';



const getExpenseTotal=(expenses)=>{
    var totalAmount=0;
    console.log(expenses[0]);
    const total =expenses.map((expense)=>{
    console.log(expense.amount);
    totalAmount+=expense.amount;
    return totalAmount;
})
return total;
}



test("should add up the expenses when empty",()=>{
    const total=selectExpensesTotal([]);
    console.log(total);
    expect(total).toBe(0);
})


test("should add up the expenses when single",()=>{
    const total=selectExpensesTotal([expenses[0]]);
    expect(total).toBe(100);
})

test("should add up the expenses when all",()=>{
    const total=selectExpensesTotal(expenses);
    expect(total).toBe(24790);
})