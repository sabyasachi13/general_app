import {addExpense,editExpense,removeExpense } from '../../actions/expenses';

test('should set up remove expense action object',()=>{
  const action =removeExpense({id :'12345a'});
  
  expect(action).toEqual({
      type:"REMOVE_EXPENSE",
      id:"12345a"
  })
});

test('should return edited action of expense',()=>{
    const action =editExpense('123456',{notes:"sabya"});
    expect(action).toEqual({
        type:"EDIT_EXPENSE",
        id:'123456',
        updates:{notes:"sabya"}
    })
});

test ('should return the newly added Action of expense',()=>{
    const expenseData={
        description :"Rent",
        amount :11000,
        createdAt :1000,
        note:"this is rent"
    }
    const action=addExpense(expenseData);
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense :{
            ...expenseData,
            id:expect.any(String)
        }
    })
})
 
test('should return the added case for default ',()=>{
    const action=addExpense();
    expect(action).toEqual(
        {
        type:"ADD_EXPENSE",
        expense:{description:"",
        note:"",
        amount:0,
        createdAt:0,
        id: expect.any(String)}
    })
})