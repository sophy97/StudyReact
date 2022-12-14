// reduxjs/toolkit의 createSlice를 이용하여
// 간단하게 < reducer함수와 액션함수 >를 만들 수 있다
import { createSlice } from "@reduxjs/toolkit";
// 초기값
const initialState = {
    num : 1,
}

// 리듀서함수 작성 >> 객체로 값을 전달하려 함
const numberSlice = createSlice({
    name: "number",
    initialState : initialState,
    reducers : {
        increase : (state)=>{
            // 함수 안에 state값을 직접 접근하여 바꿀 수 있다
            // 이전에 직접 접근하지 못할 때는, 값을 한번에 바꿈
            // > 값 전체 변경을 방지하기 위해 (...스프레드연산자)사용했음
            // >> toolkit 사용하면 직접 접근 > 변경 가능(불변성유지)
            state.num += 1;
        },
        decrease : (state)=>{ state.num -= 1 },
        mult : (state)=>{ state.num *= 0 },
        // 값을 외부에서 들고오려면, action.payload 통해 가져옴
        setNum : (state, action)=>{ state.num = action.payload },
    }
})

// 사용할 '액션함수' 내보내기 <- numberSlice에서 가져온다
export const { increase, decrease, mult, setNum } = numberSlice.actions;
// 사용할 리듀서 내보내기 (default)
export default numberSlice.reducer;
