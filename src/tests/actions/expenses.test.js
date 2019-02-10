import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {addExpense,editExpense,removeExpense, startAddExpense,setExpenses,startRemoveExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase'

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
    const expenseData={};
    expenses.forEach(({id,description,notes,amount,createdAt})=>{
        expenseData[id]={description,notes,amount,createdAt};
    });
    database.ref(`users/${uid}/expenses`).set(expenseData).then(()=>done());
});

test('should set up remove expense action object',()=>{
  const action =removeExpense({id :'12345a'});
  
  expect(action).toEqual({
      type:"REMOVE_EXPENSE",
      id:"12345a"
  })
});

test('should remove expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      });
      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
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
   
    const action=addExpense(expenses[2]);
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense :expenses[2]
    })
});

//should add expenses to database

test('should add expenses to database',(done)=>{
    const expenseData ={
        description:"mouse",
        amount:2000,
        note :"sadadada",
        createdAt:1000
    }
    const store =createMockStore(defaultAuthState);
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense :{
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done(); 
    })
});

//should add expese with default to database and store 
 
test('should add expenses when default',(done)=>{
    const expenseData ={
        description:"",
        amount:0,
        note :"",
        createdAt:0
    }
    const store =createMockStore(defaultAuthState);
    store.dispatch(startAddExpense()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense :{
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done(); 
    })
});

test('should setup set expenses action object with data',()=>{
    const action=setExpenses(expenses);
    expect(action).toEqual({
        type:"SET_EXPENSES",
        expenses
    })
});











// test('should return the added case for default ',()=>{
//     const action=addExpense();
//     expect(action).toEqual(
//         {
//         type:"ADD_EXPENSE",
//         expense:{description:"",
//         note:"",
//         amount:0,
//         createdAt:0,
//         id: expect.any(String)}
//     })
// })


