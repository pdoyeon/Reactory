import React from 'react';
import ReactDOM from 'react-dom/client';

const name = '소플';
// name이라는 자바스크립트 변수를 참조하기 위해 괄호 사용
const element = <h1>안녕, {name}</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);