import { useState } from "react";
import TestProps from "./TestProps";

const TestState = () => {
    // useState를 이용하여 propduct의 이름을 받아와서 출력하세요
    const [product, setProduct] = useState("state로 작성한 물건이름");
    return ( 
        <div className="T-state">
            {/** product 값을 출력하세요 */}
            <h1>{product}</h1>
            {/* onChange를 이용하여 입력받을때 마다 값이바뀌게 하세요 */}
            <input type="text" onChange={(e)=>{ setProduct(e.target.value) }}/>

            {/* product와 setProduct를 props 값으로 보내세요 */}
            {/** children 값으로 "현재 물건"이라는 문자열을 보내세요 */}
            <TestProps product={product} setProduct={setProduct}>
                현재 물건
            </TestProps>
        </div>
    );
}

export default TestState;