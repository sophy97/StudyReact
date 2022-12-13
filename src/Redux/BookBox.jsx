import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePay, changeTitle } from "./modules/book";

const BookBox = () => {
    // 제목을 수정하자
    const [input, setInput] = useState("");
    // 가격을 수정하자
    const [payinput, setPayInput] = useState();
    //useSelector를 이용해서 값을 가져오기
    const bookObj = useSelector((state)=>(state.book));
    //useDispatch를 이용해서 dispatch 가져오기
    const dispatch = useDispatch();

    return ( 
        <div>
            {/** 책 제목과 금액을 출력하세요 */}
            {/* 출력될 공간 만들기 */}
            <h3>
            제목: {bookObj.title} |
            금액: {bookObj.pay}
            </h3>

            {/* 1 입력받기 */}
            {/* 2 이벤트 > 연결 */}
            <input type="text" placeholder="제목 수정"
            onChange={(e)=>{ setInput(e.target.value)}} /> 
            <button onClick={()=>{dispatch(changeTitle(input))}}>제목 수정</button> <br />
            {/** button에 onClick을 이용하여 값을 전달하기
             * 리덕스의 값은 onChange 를 통해 바꾸기 보단, 
             * 값이 정해졌을때 onClick을 통해 한번에 바뀌도록 작성해야 한다
             *  매개변수에 input값 넣어서 그에 따라 값 바뀔 수 있게
            */}
            <input type="text" placeholder="가격 수정"
            onChange={(e)=>{ setPayInput(e.target.value)}} /> 
            <button onClick={()=>{dispatch(changePay(payinput))}}>가격 수정</button> <br />
            
        </div>
    );
}

export default BookBox;