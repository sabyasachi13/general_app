import filtersReducer from '../../reducer/filters';
import moment from 'moment';
test("should set up default filter values",()=>{
    const state= filtersReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:"",
        sortBy : "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf('month')
    })
});

test("should set sortBy to amount",()=>{
    const state=filtersReducer(undefined,{type:"SORT_BY_AMOUNT"});

    expect(state.sortBy).toEqual('amount');
});

test("should set sortBy to DAte",()=>{
    const currentState ={
        text:"",
        startDate:undefined,
        endDate:undefined,
        sortBy:"amount"
    };
    const state=filtersReducer(currentState,{type:"SORT_BY_DATE"});

    expect(state.sortBy).toBe('date');
});



//should set text filter
test("should set text filter",()=>{
    const state=filtersReducer(undefined,{type:"SET_TEXT_FILTER",text:"sabya"});

    expect(state.text).toEqual('sabya');
});

//should set startdayte filter

test("should set startdate filter",()=>{
    const state=filtersReducer(undefined,{type:"SET_START_DATE",startDate:moment(0)});

    expect(state.startDate).toEqual(moment(0));
});
//should set enddate filter

test("should set enddate filter",()=>{
    const state=filtersReducer(undefined,{type:"SET_END_DATE",endDate:moment(0)});

    expect(state.endDate).toEqual(moment(0));
});