import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Board = () => {
    const [boardlist, setBoardlist] = useState([1,2,3,4,5])

    return ( 
        <div>
            <h1>Board 페이지</h1>
            <NavLink to="/board/1"> 페이지 1로 이동 </NavLink>
            <hr />
            {/* 위의 내용 반복되면, 배열(boardlist) 만들어 map으로 출력함 */}
            {
                boardlist.map((boardId)=>( 
                // 클릭한 값만 스타일 주고싶음 : isActive > NavLink에 화살표함수로 구조화할당
                // isPending : 보류중
                <NavLink style={ ({isActive})=> isActive ? {color:"blue"}:{color:"black"} }
                to={`/board/${boardId}`}>
                    {boardId}이동{<br />} 
                </NavLink> ))
            }

            {/* BoardPage가 출력될 공간 +
                outletname 전달해보기
            */}
            <Outlet outletname="아울렛" />
        </div>
    );
}
export default Board;