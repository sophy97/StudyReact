
// Link의 state로 전달해준 값을 useLocation으로 확인하기
import { useLocation } from "react-router-dom";


const LocationState = () => {
    // hook 사용은 항상 컴포넌트 안에서!
    // useLocation은 Link를 통해 가져온 state만 인식함
    // ** Link를 통해 열지 않으면 값이 없거나 이전값을 계속 나타낼 수 있다 **
    const location = useLocation();
    const state = location.state;


    return ( 
        <div>
            {/* 둘중 어떤 방식으로 접근하든 상관없다 */}
            <p>{state}</p>
            <p>{location.state}</p>
        </div>
    );
}

export default LocationState;