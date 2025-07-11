import React from "react";
import Book from "./book"

// 총 3개의 Book 컴포넌트를 렌더링
function Library(props) {
    return (
        <div>
            <Book name = "처음 만난 파이썬" numOfPage={300} />
            <Book name = "처음 만난 리액트" numOfPage={400} />
            <Book name = "처음 만난 자바" numOfPage={600} />
        </div>
    )
}

export default Library