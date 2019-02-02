//reuse code
//render hijacking
//abstract stage

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
    <div>
        <h1>Info</h1>
        <p>The info is :{props.info}</p>
    </div>
);


const withAdminWarning=(WrappedComponent)=>{
    return(props)=>(
        <div>
            {props.isAdmin && <p>This is private info dnt share</p>}
            <WrappedComponent {...props} />
        </div>
    );
};
const requireAuthentication=(WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAuthenticated ?(<WrappedComponent {...props} />) 
                :<p>You are not allowed</p>}
             
        </div>
    );
}
//requireAuthentication

const AdminInfo= withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
//ReactDOM.render(< AdminInfo isAdmin={true} info="hello i am sabya" />,document.getElementById("app"));
ReactDOM.render(< AuthInfo isAuthenticated={true} info="hello i am sabya1" />,document.getElementById("app"));
