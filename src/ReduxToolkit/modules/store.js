// toolkit을 사용해서 store를 구성하기
import { configureStore } from "@reduxjs/toolkit";
// 작성한 슬라이스 추가하기
// -> export default로 전달한 값은 원하는 이름으로 바꿔서 전달(import) 가능
import numberReducer from "./number";
import bookReducer from "./book";

// configureStore 작성 > store로 내보냄 (앞에 export default 추가해서)
export default configureStore( {
    // 작성한 리듀서를 연결함 (기존 combine으로 묶었던 작업)
    reducer : {
        number: numberReducer,
        book : bookReducer,
    },
} )
