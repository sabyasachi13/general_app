import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters,altfilters} from "../fixtures/filter";
import expenses from "../fixtures/expenses";
import moment from 'moment';
 

let setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate,wrapper;

beforeEach(()=>{
    setTextFilter=jest.fn();
    sortByDate=jest.fn();
    sortByAmount=jest.fn();
    setStartDate=jest.fn();
    setEndDate=jest.fn();

    wrapper =shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        />)

});

test("should match the snapshot", ()=> {
    expect(wrapper).toMatchSnapshot();
});


test("should render expenselist filter with altfilter", ()=> {
    wrapper.setProps({
        filters:altfilters
    });
    expect(wrapper).toMatchSnapshot();
});
// should handle text change
test(" should handle text change",()=>{
    wrapper.find("input").simulate("change",{
        target: {
            value: altfilters.text
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(altfilters.text);

});

//should short by date
test ("should sort by date",()=>{
    wrapper.find("select").simulate("change",{
        target:{
            value :filters.sortBy
        }
    });
    expect (sortByDate).toHaveBeenCalled();
});
// should sort by amount
test ("should sort by amount",()=>{
    wrapper.find("select").simulate("change",{
        target:{
            value :altfilters.sortBy
        }
    });
    expect (sortByAmount).toHaveBeenCalled();
});
// should handle date changes
test ("should handle date changes",()=>{
    const startDate =moment(0).add(4,"years");
    const endDate =moment(0).add(8,"years");
    wrapper.find("DateRangePicker").prop("onDatesChange")({startDate,endDate});
    expect (setStartDate).toHaveBeenLastCalledWith(startDate);
    expect (setEndDate).toHaveBeenLastCalledWith(endDate);

});

//should handle date focus changes

test("should handle date focus changes",()=>{
    const calendarFocused ='endDate';
    wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused);

    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});


