import { useState } from "react";
import PropsChildren from "./PropsChildren";
// 자식인 PropsChildren에게 값 넘겨주기
// 문자열 전달 가능, state값과 함수도 다 전달 가능!!
// props을 통해서 state의 값을 자식 컴포넌트로 전달할 수 있다
// props을 통해서 리액트의 값은 위에서 아래로, 부모에서 자식으로 전달되는 것을 확인.
// state의 set함수를 전달해서 부모의 값을 수정할 수도 있다

const PropsParent = () => {
    const [count, setCount] = useState(1);
    return ( 
        <div>
            <h3>PropsParent comp</h3>
            <h5>count:{count}</h5>
            <PropsChildren 
                name="green" count={count} setCount={setCount}
                // 만든 컴포넌트에 on이벤트가 props로 들어간다
                onClick={()=>{console.log("클릭했음")}}
                > 
                태그 사이 들어가는 값 : {count} <br/>
                태그 사이값도 전달 가능. 컴포넌트도 전달 가능! <br/>
                +map으로 컴포넌트를 'children'으로 넘겨줄 수도 있다
                {/* <StateBox/> */}
            </PropsChildren>
        </div>
    );
}

export default PropsParent;