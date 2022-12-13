import { useDispatch, useSelector } from "react-redux";
import { increase, setNumber } from "./modules/number";

const NumberBox = () => {
    // 리덕스를 사용해서 그 값을 가져오려 함
    // useSelector( ()=>() )통해 modules/index.js의 전체 state에 접근

    /* 
    state.number는, modules/index.js에 연결해 둔 number.js의 {number}를 의미
    number.js의 state객체 > number의 숫자값을 가져옴 
    */

    /** 값을 가져올때 그 값 확인하지 않으므로 이름을 잘 확인 
     *  값이 없는 내용 들고오면 undefined
    */
    // state.number.number는
    // number.js의 state객체 속 number 의 숫자값 의미(number.js 내보낼때 number로 내보냈음)
    const number = useSelector((state)=>(state.number.number));
    const write = useSelector((state)=>(state.number.write));
    // 객체까지만 접근!
    // const numberObj = useSelector((state)=>(state.number));

    // 리덕스에서 작성한 리듀서를 가져오기 위한 useDispatch
    // dispatch 사용시, dispatch({type:값}) 형태로 전달 - type통해 리듀서를 찾아감
    const dispatch = useDispatch();

    return ( 
        <div>
            <h3>리덕스를 사용할 공간입니다</h3>
            <p>useSelector를 통해 가져온 값: {number}</p>
            <button onClick={()=>{ dispatch({type:"increase"}) }}>+1</button>
            {/* number.js에 선언해 내보내준 액션함수 사용::
             함수 결과값 들어가야 하므로 ()로 실행까지 시키기 */}
            <button onClick={()=>{ dispatch(increase()) }}>+1:액션함수</button>
            <br />
            {/* setNumber를 통해 값을 수정: 객체 형태 */}
            <button onClick={()=>{dispatch({type:"setNumber", payload:0})}}>초기화(0)</button>
            <button onClick={()=>{dispatch(setNumber(100))}}>초기화(100):액션함수</button>
            <br />
            <p>useSelector를 통해 가져온 값: {write}</p>
            {/* <p>useSelector를 통해 가져온 값(객체까지만): {numberObj.number}</p> */}
        </div>
    );
}

export default NumberBox;