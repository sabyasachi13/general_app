import {createStore} from 'redux';
console.log("sabya1");
const incrementCount=({incrementBy=1}={})=>({
    type:"INCREMENT",
    incrementBy
});
const decrementCount =({decrementBy=1}={})=>({
    type:"DECREMENT",
    decrementBy
});

const setCount =({count}={})=>({
    type:"SET",
    count
});

const reSetCount =()=>({
    type:"RESET",
    count:0
});
const store = createStore((state={count:0},action)=>{
    switch(action.type){
        case "INCREMENT":
            
            return{
                count:state.count + action.incrementBy
            } 
            
        case "DECREMENT":
            return{
                count:state.count -action.decrementBy
            } 
        case "SET":
            return{
                count: action.count
            } 
        case "RESET":
            return{
                count:0
            } 
        default:
            return state;
    }
    
   
   
});
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});


store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy:10}));
store.dispatch(reSetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:1000}));
store.dispatch(setCount({count:100}));
