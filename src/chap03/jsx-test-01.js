import React from 'react';
import ReactDOM from 'react-dom/client';

// Hello라는 이름을 가진 리액트 컴포넌트
class Hello extends React.Component {
    // 자바스크립트 코드, HTML 코드가 결합된 JSX를 사용하고 있음
    render() {
        return <div>Hello {this.props.toWhat}</div>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello toWhat="World " />)