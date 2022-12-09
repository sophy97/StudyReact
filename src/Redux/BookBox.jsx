import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTitle } from "./modules/book";

const BookBox = () => {
    const [input, setInput] = useState("");
    //useSelector를 이용해서 값을 가져오기
    const bookObj = useSelector((state)=>(state.book));
    //useDispatch를 이용해서 dispatch 가져오기
    const dispatch = useDispatch();

    return ( 
        <div>
            {/** 책 제목과 금액을 출력하세요 */}
            <input type="text" onChange={(e)=>{ setInput(e.target.value)}} />
            <h3>
            제목: {bookObj.title} <br />
            금액: {bookObj.pay}
            </h3>
            
            {/** button에 onClick을 이용하여 값을 전달하세요 
             * 리덕스의 값은 onChange 를 통해 바꾸기 보단, 
             * 값이 정해졌을때 onClick을 통해 한번에 바꿀수있도록하는게 좋다
             *  매개변수에 input값 넣어서 그에 따라 값 바뀔 수 있게
            */}
            <button onClick={()=>{dispatch(changeTitle(input))}}>제목 수정</button>
        </div>
    );
}

export default BookBox;