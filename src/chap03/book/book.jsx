import React from 'react';

// Book 컴포넌트는 props로 name과 numOfPage를 받아서 출력함
function Book(props) {
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h2>{`이 책은 총 ${props.numOfPage}페이지로 이루어져 있습니다.`}</h2>
        </div>
    )
}

export default Book;