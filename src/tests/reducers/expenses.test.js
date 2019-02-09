import expenseReducer from '../../reducer/expenses';
import expenses from '../fixtures/expenses';
test('should set default state ',()=>{

    const state=expenseReducer(undefined,{type:'@@INIT'});

    expect(state).toEqual([]);
})

test ('should remove expense by id ',()=>{
    const action={
        type :"REMOVE_EXPENSE",
        id:expenses[1].id
    }
    const state =expenseReducer(expenses,action);

    expect(state).toEqual([expenses[0],expenses[2]])
});

test ('should not remove expense by id ',()=>{
    const action={
        type :"REMOVE_EXPENSE",
        id:"-1"
    }
    const state =expenseReducer(expenses,action);

    expect(state).toEqual(expenses);
});

//should add an expense
test ('should add an expense ',()=>{
    const expense=
    {id:"4",
    description:"water",
    notes :"",
    amount: 101,
    createdAt :0};
    const action={
        type :"ADD_EXPENSE",
        expense: expense
    }
    const state =expenseReducer(expenses,action);

    expect(state).toEqual([...expenses,expense]);
});

//should edit an expense
test ('should edit an expense ',()=>{
    const amount=100000;
    const action={
        type :"EDIT_EXPENSE",
        id:"2",
        updates :{
            amount
        }
    }
    const state =expenseReducer(expenses,action);

    expect(state[1].amount).toEqual(100000);
});

//should not edit an expense


test ('should not edit an expense ',()=>{
    const amount=100000;
    const action={
        type :"EDIT_EXPENSE",
        id:"2",
        updates :{
            amount
        }
    }
    const state =expenseReducer(expenses,action);

    expect(state[2].amount).toEqual(12345);
});


test('should set expenses',()=>{
    const action={
        type:"SET_EXPENSES",
        expenses :[expenses[1]]
    };

    const state =expenseReducer(expenses,action);

    expect(state).toEqual([expenses[1]])
});