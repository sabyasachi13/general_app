import {setStartDate,setEndDate,sortByDate,sortByAmount,setTextFilter} from '../../actions/filters';
import moment from 'moment';
test("should generate set start date",()=>{
    const action=setStartDate(moment(0));

    expect (action).toEqual({
        type:"SET_START_DATE",
        startDate :moment(0)
    })
});

test("should generate set end date",()=>{
    const action=setEndDate(moment(0));

    expect (action).toEqual({
        type:"SET_END_DATE",
        endDate :moment(0)
    })
});

test ("should set text filter",()=>{
    const action =setTextFilter("sabya");

    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text:"sabya"
    })
});

test ("should set default text filter",()=>{
    const action =setTextFilter("");

    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text:""
    })
});


test ("should set sort by amount",()=>{
    const action =sortByAmount();

    expect(action).toEqual({
        type:"SORT_BY_AMOUNT"
    })
});

test ("should set sort by date",()=>{
    const action =sortByDate();

    expect(action).toEqual({
        type:"SORT_BY_DATE"
    })
});