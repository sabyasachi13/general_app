import  uuid from 'uuid';
import database from '../firebase/firebase';
export const addExpense =(expense)=>({
    type:"ADD_EXPENSE",
    expense
});

export const startAddExpense =(expenseData={})=>{
    return(disapatch,getState)=>{
        const uid =getState().auth.uid;
        const {
            description="",
            note="",
            amount=0,
            createdAt=0
        }=expenseData;
        const expense ={description,note,amount,createdAt};

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
            disapatch(addExpense({
                id:ref.key,
                ...expense
            }))
        })
    }
};

export const removeExpense =({id}={})=>({
    type:"REMOVE_EXPENSE",
    id
    
});

export const editExpense =(id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
});
//database.ref().update({
    //    stressLevel : 9,
    //    "job/company" : "amazon",
    //    "location/city": "seattle"
    // });
    
export const startEditExpense=(id,updates)=>{
    return (dispatch,getState)=>{
        const uid =getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update({
            ...updates
        }).then(()=>{
            console.log(updates);
            dispatch(editExpense(id,updates));
        })
    }
}

export const setExpenses=(expenses)=>({
    type:"SET_EXPENSES",
    expenses
});


export const startSetExpenses =()=>{
    return(dispatch,getState)=>{ 
        const uid =getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot)=>{
            const expenses=[];
            snapshot.forEach((childSnapshot)=>{
                expenses.push({
                    id:childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses))
        })
    }
}

export const startRemoveExpense=({id}={})=>{
    return (dispatch,getState)=>{
        const uid =getState().auth.uid;
       return  database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense({id}));
        })
    }
}