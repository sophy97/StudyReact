/** StoreIndex
 *  Redux의 기본 내용을 작성하는 공간
 *  (원래는 새 프로젝트 만들어 index.js에 작성했던 내용)
 */

// 리덕스 프로바이더 컴포넌트 추가
import { Provider } from "react-redux";
// 리덕스 프로바이더 안에 넣어줄 store를 생성하기 위해 createStore 추가 (내용확인을 위함. 나중에 toolkit)
import { createStore } from "redux";
import BookBox from "./BookBox";
import rootReducer from "./modules";
import NumberBox from "./NumberBox";

// 1> createStore를 이용한 store 생성
// - 작성한 js내용을 연결 (modules의 rootReducer와 연결)
const store = createStore(rootReducer);

const StoreIndex = () => {

    return ( 
        <div>
            {/* Provider를 통해 store에 작성된 js값들을 넘겨줌 */}
            <Provider store={store}>
                {/* 이 공간에 들어온 provider의 자식들만 사용가능 */}
                <NumberBox />
                <BookBox />
            </Provider>
        </div>
    );
}

export default StoreIndex;