import { useParams } from "react-router-dom";

const BoardNumPage = () => {
    // map돌릴거 아니면 state의 초기값 지정할 필요없다 < 입력한 값 담기니까
    const {page, num} = useParams();

    return ( 
        <div>
            <h2>BoardNumPage comp</h2>

            <h3>page : {page} </h3>
            <h3>num : {num} </h3>
        </div>
    );
}

export default BoardNumPage;