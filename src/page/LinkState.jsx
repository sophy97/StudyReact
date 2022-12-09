/**
 * 라우터에서 Link를 통해 이동할때 값을 전달 (전역 전달은 context나 redux로 전달)
 * Link를 통해 state에 값을 담아 전달하려 함 (LinkState)
 * 담은 값은 useLocation을 이용해 가져올 수 있다 (LocaationState)
 */

import { Link } from "react-router-dom";


const LinkState = () => {
    // location으로 전달할 변수 생성
    const varInput = "link에서 전달한 값 < 변수에 작성";




    return ( 
        <div>
            <h3>Link를 이용해서 값을 전달하기</h3>
            <p>
                LinkState의 path는 /link 로, <br />
                LocationState의 path는 /location으로 작성
            </p>
            <p>Link의 속성 state에 값을 넣어서 전달</p>
            <Link to='/location' state={'link에서 전달한 값'}>LocationState로:문자열</Link> <br />
            <Link to='/location' state={varInput}>LocationState로:변수</Link>
            <br /><br />
            <Link to='/query?name=abc'>쿼리스트링으로 이동</Link>
            
        </div>
    );
}

export default LinkState;