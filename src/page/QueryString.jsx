/**
 * 쿼리스트링 > URL의 뒤에 입력 데이터를 함께 제공하는 데이터 전달 방식 (주로get방식)
 * 현재 컴포넌트의 주소에 쿼리스트링이 함께 있을때, 
 * 그 쿼리스트링의 값을 가져오기
 */

import { useSearchParams } from "react-router-dom";


const QueryString = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // ?name=abc 를 주소창에 적어 그 값을 출력하도록
    const param = searchParams.get("name");


    return ( 
        <div>
            <h3>{param}</h3>
        </div>
    );
}

export default QueryString;