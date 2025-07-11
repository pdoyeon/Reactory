import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX를 사용한 코드
// JSX를 사용한 코드여도 내부적으로 createElement 함수를 사용하도록 변환함
const element = (
    <h1 className='greeting'>
        Hello, World!
    </h1>
)

// JSX를 사용하지 않은 코드
// const element = React.createElement (
    // 리액트에서는 이 객체를 엘리먼트라고 함
//     'h1',
//     { className: 'greeting' },
//     'Hello World!'
// )