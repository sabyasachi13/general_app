import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense,removeExpense} from '../actions/expenses';
//class based component
//setup mapDispatchToProps
export class EditExpensePage extends React.Component{
    onSubmit=(expense)=>{
        this.props.editExpense(this.props.expense.id,expense)
        this.props.history.push('/');
    }
    onClick=()=>{
        this.props.removeExpense({id:this.props.expense.id});
        this.props.history.push('/');
    }
    render(){
        return(
            <div>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                    expense = {this.props.expense}
                />
                <button onClick={this.onClick}>Remove</button> 
            </div> 
        )
    }
}

const mapDispatchToProps=(dispatch,props)=>{
    return{
        editExpense:(id,expense) => dispatch(editExpense(id,expense)),
        removeExpense:(id)=>dispatch(removeExpense(id))
    }
}
const mapStateToProps=(state,props)=>{
    return{
        expense :state.expenses.find((expense)=>{
            return expense.id ===props.match.params.id
        })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);