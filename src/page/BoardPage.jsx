import { useParams } from "react-router-dom";

const BoardPage = () => {

    // 주소를 통해 전달해준 params값을 가져와서 사용할 수 있다
    // params 안에 객체형태로 들어있으므로, 구조화할당을 통해 사용가능
    const {id, page} = useParams();


    return ( 
        <div>
            <br />
            board의 {page} 페이지입니다
        </div>
    );
}

export default BoardPage;