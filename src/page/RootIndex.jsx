/**
 *      React-router-dom 내용 정리하기 위한 컴포넌트
 *      아래 내용에 BrowserRouter와 Routes 모두 정리
 *      Routes로 감싸서 Route태그로 path(주소연결) 와 element(컴포넌트연결) 지정
 *  위 내용들은 app.js와 index.js에 분리해서 넣는 것이 일반적
 */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import AboutMain from "./AboutMain";
import AboutTest from "./AboutTest";
import Home from "./Home";
import Error from "./Error";
import Board from "./Board";
import BoardPage from "./BoardPage";

const RootIndex = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                {/* Route 를 통해 주소와 컴포넌트 연결 */}
                {/* http://localhost:3000/ 의 가장 처음 위치에 기본 위치를 두고 path내용이 붙는다 */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    <Route path="/about/test" element={<AboutTest />}>
                        {/* 중첩된  Route는 outlet을 통해 계속 보여줄 수 있다
                            But, path index에는 내용 연결 불가  */}
                        <Route path="/about/test/outlet" element={<AboutTest />} />
                    </Route>
                    <Route path="/about/main" element={<AboutMain />}></Route>
                    {/* path작성시 index사용 가능 
                    : 기본주소-가장 처음 위치 나타냄 (자신을 감싸고 있는 path=about) */}
                    <Route index element={<AboutMain />}></Route>
                </Route>
                {/* 전체 페이지 탐색해서 없는 경로 접근하면 에러 컴포넌트 띄움 */}
                <Route path="*" element={<Error />} />
            </Routes>

                    <hr />

            {/* Routes 를 사용하면 같은 주소일때 화면을 분할해 사용할 수 있다 */}
            <Routes>
                <Route path="/" element={<Home />} />
                {/* 첫번째 Route에서 사용하지 않은 주소에 연결시 현재 화면만 보임
                    단, *를 사용할 경우는,
                    사용하지 않는 주소가 없기에 항상 화면이 보인다
                 */}
                <Route path="test" element={<Home />} />
                {/* 주소를 통해서 전달하는 값:params
                    이 값은 { path:이름 :"주소에 작성해준값" }으로 들어감
                    :id 는 그 사용할 공간의 이름이라서, 원하는 이름으로 작성, 사용함
                    이처럼 params값을 사용한 주소는 어떤 값이 들어와도 같은 컴포넌트 출력!
                */}
                <Route path="/board" element={<Board />} >
                    <Route path='/board/:id' element={<BoardPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RootIndex;