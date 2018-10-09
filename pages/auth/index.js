import React from 'react';
import Router from 'next/router';
import User from '../../components/User';


const authIndexPage = (props) => (
    <div>
        <h1>The Auth index Page {props.appName}</h1>
        <button onClick={() => Router.push('/')}>Go Back</button>
        <User name="Pramod" age={23} />
        <style jsx>{`        
           button{ background-color: lightgoldenrodyellow;
            color: green;
            border: 1px solid;
            box-shadow: 0 2px 3px #c31414;
            height: 40px;
            width: 100px;
            cursor: pointer;
           }
        `}
        </style>
    </div>
);

authIndexPage.getInitialProps =context =>{
    console.log(context);
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({appName:"NextJS Auth App"})
        }, 1000);
    });
    
    return promise;
}
export default authIndexPage;   