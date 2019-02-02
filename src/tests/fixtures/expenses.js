import moment from 'moment';

export default [
    {
        id:"1",
        description:"gum",
        notes :"",
        amount: 100,
        createdAt :0
    },{
        id:"2",
        description:"rent",
        notes :"",
        amount: 12345,
        createdAt :moment(0).subtract(4,"days").valueOf()
    },{
        id:"3",
        description:"credit",
        notes :"",
        amount: 12345,
        createdAt : moment(0).add(4,"days").valueOf()   
    }
];
