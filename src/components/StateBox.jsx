import { useState } from "react";

/**
 * 함수형 컴포넌트(화살표함수)
 * 일반 함수(선언형)의 경우 가장 먼저 생성되어 이름 호출 시 사용,(호이스팅)
 * 화살표함수 또는 익명함수가 변수에 담긴 경우는
 * 변수에 담아지는 시점에야 함수가 생성된다
 */
const StateBox = () => {
    // state : 컴포넌트 안에서 개별적으로 사용되는 데이터값
    // state로 들어가 있는 값들은 컴포넌트의 업데이트에 영향 끼침
    // 함수형이니까 hooks 사용 (ver16 이전: 클래스형 컴포넌트)
    // hook : use- 붙여 사용하는, 함수형 컴포넌트의 내용 의미(react ver.16~)
    const [name, setName] = useState("이름");
    
    // 입력받은 값 버튼 누를때만 실행되게 > 값을 받아올 공간부터 지정 > return에서 사용
    const [input, setInput] = useState("");

    /* useState : 함수형컴포넌트에서 state 사용 가능하게 만들어둔 hook
    useState는 ()안에 원하는 데이터 값을 넣어 사용하며, 이때 그 안의 값은 set-()으로 변경
    */ 

    // inputName값을 받아와서 return하는 함수
    const printName =(inputName)=> {
        return inputName+"입니다";
    }

    // 리액트는 html 값을 변수에 넣어서 사용할수 있다
    // 이때 태그를 여러개 사용하고 싶다면 하나의 태그로 감싸서 사용
    const element = (
        <div>
            <h3>자바스크립트의 변수안에 넣어서 사용할수 있다</h3>
            <p>단, 여러개의 태그는 하나의 태그로 감싸서 사용</p> 
        </div>
    )


    return ( 
        <div>
            <h1>{name}입니다</h1>
            <p>변수는 중괄호 안에 이름을 넣으면 값이 그대로 출력되고, <br/>
                함수는 ( )를 통해 내용을 실행시켜야 한다. <br/>
                단, 화면에 출력되는 부분은 함수의 return 부분 
            </p>
            <p>{printName("징징이")}</p>
            {element}
            <hr />
            <h3>name값 입력받아 확인하기 : {name}</h3>
            {/* onChange : 값 변화 감지할 때마다 실행, 익명함수형태로 작성 */}
            <input type="text" onChange={ (e)=>{setInput(e.target.value) }} />
            <button onClick={()=>{ setName(input) }}>이름 수정</button>
        </div>
    );
}

export default StateBox;