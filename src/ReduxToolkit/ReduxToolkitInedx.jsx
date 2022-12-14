/**
 * ReduxToolkitIndex는 src/index에서 진행되어야 할 리덕스 초기화 내용
 * 공부를 위해 따로 컴포넌트 만들어 사용 중
 * 새 프로젝트를 만들어서 진행할 땐 *index.js에서
 *  *여기서 index란, public/index.html과 App.js를 연결하는
 *      src/index를 의미함
 */
// 1 > React에서 리덕스를 사용하기 위한 프로바이더 가져오기
import { Provider } from "react-redux";
import BookBox from "./modules/BookBox";
// 기존 리덕스 사용 시 createStore로 store생성했던 반면,
// 2 > 리덕스 툴킷 사용 -> js파일에서 store를 내보내고 그것을 가져옴
// *store.js 작성 후 추가 
// (configureStore의 기능을 통해 자동으로 store라는 이름으로 들어감)
import store from "./modules/store";
// import NumberBox from "./NumberBox";



const ReduxToolkitIndex = () => {
    return ( 
        <Provider store={store}>
            <BookBox />
        </Provider>
    );
}
export default ReduxToolkitIndex;