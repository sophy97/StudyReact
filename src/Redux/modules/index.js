/**
 * 리덕스에서 사용하기 위해 작성한 js파일들을 묶어서 사용하도록 만드는 공간
 * why?
 * store에 여러 데이터가 들어가므로, 많아진 데이터들을 따로 관리하기 위함
 */

// 작성한 리덕스 모듈 들고오기!
import number from "./number";
import book from "./book";



// 작성한 js파일을 하나로 묶어주는 함수 - combineReducers
import { combineReducers } from "redux";

// combineReducer를 통해, js파일을 들고와서 {객체 형태로} 묶어 줌
const rootReducer = combineReducers({number, book});


// export통해 이름 그대로 사용하도록 내보낸다
export default rootReducer;