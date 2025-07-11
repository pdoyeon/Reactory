import React from 'react';
import ReactDOM from 'react-dom/client';

class Hello extends React.Component {
    render() {
        return React.createElement('div', null, `Hello ${this.props.toWhat}`)
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// jsx-test-01.js와 달리, Hello 컴포넌트 내부에서 사용했던 부분이 React.createElement 함수로 대체
// createElement() 함수를 호출한 결과로 자바스크립트 객체가 나오게 됨
root.render(React.createElement(Hello, { toWhat: 'World '}, null));