import React from 'react';
import ReactDOM from 'react-dom/client';

function formatName(dou) {
    return user.firstName + ' ' + user.lastName;
}

// const user = {
//     firstName: 'null',
//     lastName: 'park'
// };

// hello, stranger 실행
const user = null;

function getGreeting(user) {
    if (user) {
        return <h1> Hello, {formatName(user)}! </h1>
    }
    return <h1> Hello, Stranger. </h1>
}

// HTML 태그 중간이 아닌 태그의 속성에 넣고 싶을 때
// // 큰따옴표 사이에 문자열을 넣거나
// const element = <div tabIndex="0"></div>;
// // 중괄호 사이에 자바스크립트 코드를 넣으면 됨
// const element = <img src = {user.avatarUrl}></img>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(getGreeting(user));