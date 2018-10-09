import React, { Component } from 'react';
import Link from 'next/link';

class IndexPage extends Component {
    static async getInitialProps(context){
        console.log(context);
        const promise = new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve({appName:"NextJS App"})
            }, 1000);
        });
        
        return promise;
    }
    render() {
        return (
            <div>
                <h1>The Main NextJS Page</h1>
                <h3>The Main page of {this.props.appName}</h3>
                <p>Go to&nbsp;
            <Link href="/auth">
                        <a>Auth</a>
                    </Link>
                </p>

                <p>Test 404: try invalid url -http://localhost:3000/invalid</p>
                <style jsx>{`
        a {
            border: 1px solid #ccc;
            background-color: lightcyan;
            color: green;
            box-shadow: 0 2px 3px #0b3e9a;
            }
    `}</style>

            </div>
        );
    }
}

export default IndexPage;   