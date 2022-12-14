import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, mult, setNum } from "./modules/number";

const NumberBox = () => {
    const num = useSelector((state)=>(state.number.num));
    const dispatch = useDispatch();

    // 입력받아 값을 전달하기 -> 값 받을 state부터
    const [input, setInput] = useState();

    return ( 
        <div>
            <h1>{num}</h1>
            {/* 1씩 증감하는 리듀서 만들고 액션함수 내보내기 */}
            <button onClick={()=>{dispatch(increase())}}>1증가</button> <br />
            <button onClick={()=>{dispatch(decrease())}}>1감소</button> <br />
            <button onClick={()=>{dispatch(mult())}}>0으로</button> {" "}
            
            {/* case1 > 값을 직접 전달: 클릭이벤트->dispatch로 값수정 */}
            <button onClick={()=>{dispatch(setNum(10))}}>10으로</button>
            <br />
            {/* case2 > 값을 입력받아(onChange) 툴킷과 연결(dispatch) > 값 바꾸기 */}
            <input type="text" onChange={(e)=>{setInput(e.target.value)}} />
            <button onClick={()=>{dispatch(setNum(input))}}>원하는 값으로</button>

        </div>
    );
}
export default NumberBox;