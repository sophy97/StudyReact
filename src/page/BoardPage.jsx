import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BoardPage = (props) => {
    // 함께 사용할수 있는 react-router-dom의 hooks

    // useLocation : window.history에 들어가있는 값 접근
    // const location = useLocation(); 
    // const state = location.state;

    // // useSearchParam : 쿼리스트링 값 접근
    // const [searchParams, setSearchParams] =  useSearchParams()
    // const id = searchParams.get('id');
    


    // 받아온 props값 확인
    // - RootIndex에서 컴포넌트에 직접 넣어준 props값
    const {name, outletname} = props;


    // 주소를 통해 전달해준 params값을 가져와서 사용할 수 있다
    // params 안에 객체형태로 들어있으므로, 구조화할당을 통해 사용가능
    const {page, id} = useParams();

    // 1~5(5개) 데이터를 가지고 있는 배열 작성
    // 그 중 동일한 id값을 가진 내용만 출력
    // JS의 "배열"의 메소드 사용 - 1개의 값을 찾기 위해 find메서드 사용!

    // 배열 안 객체로 내용 확인
    const [memos, setMemos] = useState([
        { id:0, title:"첫번째 메모" },
        { id:1, title:"두번째 메모" },
        { id:2, title:"세번째 메모" },
        { id:3, title:"네번째 메모" },
        { id:4, title:"다섯번째 메모" },
    ]);

    // memos배열에서 객체값을 돌려줄 경우는 그 값을 새 변수(memo)에 할당해 사용하는 게 좋다
    // 배열의 객체요소를 하나씩 꺼내 비교 > 참인 요소를 return하는 find() 메서드 
    // 현재 id값이 일치하는 memo를 반환
    const memo = memos.find((m)=> m.id === parseInt(id));

    // useNavigate 사용 >> js 통한 주소 이동하기
    const navigate = useNavigate();

    return ( 
        <div>
            <br />
            {outletname}의 {name} board의 {id} 페이지입니다
            <p>{ memo ? memo.title : "값이 없는 페이지" }</p>
            {/* button태그는 새로고침 없지만, form태그 사용한다면 새로고침 막아서 사용하기! */}
            <button onClick={()=>{navigate(-1)}}>뒤로가기</button>
            <button onClick={()=>{navigate('/board')}}>게시판 목록으로 이동</button>
        </div>
    );
}

export default BoardPage;