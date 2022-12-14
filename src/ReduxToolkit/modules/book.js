// reduxjs/toolkit의 createSlice를 이용하여
// 간단하게 < reducer함수와 액션함수 >를 만들 수 있다
import { createSlice } from "@reduxjs/toolkit";
// 초기값
const initialState = {
    title : "제목이 없습니다",
    pay : 0,
}

// 리듀서함수 작성 >> 객체로 값을 전달할 것
const bookSlice = createSlice({
    name : "book",
    initialState : initialState,
    reducers : {
        setTitle : (state, action)=>{
            state.title = action.payload },
        setPay : (state, action)=>{
            state.pay = action.payload },
    }
})


// 사용할 '액션함수' 내보내기 <- bookSlice에서 가져온다
export const { setTitle, setPay } = bookSlice.actions;
// 사용할 리듀서 내보내기 (default)
export default bookSlice.reducer;