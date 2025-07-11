import React from 'react';
import ReactDOM from 'react-dom/client';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'doyeon',
    lastName: 'park'
};

const element = (
    // XML/HTML 코드 사이에 중괄호를 사용하여 JS 변수, 함수를 사용
    <h1> Hello, {formatName(user)} </h1>
);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(element);