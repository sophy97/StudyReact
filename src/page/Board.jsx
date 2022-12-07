import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Board = () => {
    const [boardlist, setBoardlist] = useState([1,2,3,4,5])

    return ( 
        <div>
            <h1>Board 페이지</h1>
            <Link to="/board/1"> 페이지 1로 이동 </Link>
            <hr />
            
            {/* 위의 내용 반복되면, 배열(boardlist) 만들어 map으로 출력함 */}
            {
                boardlist.map((boardId)=>( 
                <Link to={`/board/${boardId}`}> {boardId}로 이동{<br />} </Link> ))
            }


            {/* BoardPage가 출력될 공간 */}
            <Outlet />
        </div>
    );
}
export default Board;