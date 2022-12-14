import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPay, setTitle } from "./book";

const BookBox = () => {
    const bookObj = useSelector((state)=>(state.book));
    const dispatch = useDispatch();

    // 입력 두개 받아야 함 > state각각 생성
    const [titleInput, setTitleInput] = useState();
    const [payInput, setPayInput] = useState();
    
    return ( 
        <div>
            <h1>리덕스 툴킷 내용 출력화면</h1>
            <br /><br />
            {/* Redux에서 진행한 book.js의 내용을 ReduxToolkit에 새로 작성하고,
                store에 연결하여 화면에 출력 */}
            <>
                {/** 책 제목과 금액을 출력하세요 */}
                {/* 출력될 공간 만들기 */}
                <h2> 제목: {bookObj.title} </h2>
                <h3> 금액: {bookObj.pay} </h3>
                

                {/* 1 입력받기 */}
                {/* 2 이벤트 > 연결 */}
                <input type="text" placeholder="제목 수정"
                onChange={(e)=>{ setTitleInput(e.target.value)}} /> 
                <button onClick={()=>{dispatch(setTitle(titleInput))}}>제목 수정</button> <br />

                <input type="text" placeholder="가격 수정"
                onChange={(e)=>{ setPayInput(e.target.value)}} /> 
                <button onClick={()=>{dispatch(setPay(payInput))}}>가격 수정</button> <br />
            </>
        </div>
    );
}
export default BookBox;