import React from 'react';
import Link from 'next/link';

const errorPage = () => (
    <div>
        <h1>404: Opps, something went wrong</h1>
        <p>Try going back&nbsp;
            <Link href="/">
                <a>Home</a>
            </Link>
        </p>
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

export default errorPage;   