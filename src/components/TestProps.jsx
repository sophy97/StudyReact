// 부모 TestState로 부터 props넘겨받음
import { useState } from "react";

const TestProps = (props) => {
    // props 값 product을 가져와서 아래 내용을 출력하세요
    const {product, setProduct, children} = props;
    // state값 input을 만들어서 값을 입력받으세요
    const [input, setInput] = useState("");

    return ( 
        <div className="T-props">
            {/**product를 출력하세요 */}
            <h3>{product}</h3>
            {/** input의 값을 입력받는 공간 */}
            <input type="text" onChange={(e)=>{setInput(e.target.value)}}/>
            {/** 받아온 setProduct이름을 수정 */}
            <button onClick={()=>{setProduct(input)}}>물건 이름수정</button><br />
            {/** children을 받아와서 출력하세요 */}
            <p>tag children: {children}</p>
        </div>
    );
}

export default TestProps;

