import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div>
            <h1>Home 화면이다</h1>
            <Link to="/about">about이동</Link> <br />
            {/* 기능은 같아졌지만 새로고침 발생 시 내부 데이터 날아감 > link to 쓰삼 */}
            <a href="/about">a태그로 이동</a>
            <p> a태그는 새로고침 발생-{">"}컴포넌트간 이동 시 사용하지 않는다.<br/>
                사용하더라도, 클릭이벤트를 사용해 새로고침을 막아야 한다.
            </p>
            <br />
            <Link to="/board">board이동</Link> 
        </div>
    );
}

export default Home;