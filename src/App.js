import './App.css';
// import RootIndex from './page/RootIndex';
import TestRootIndex from './page/TestRootIndex';
// import APIComp from './components/APIComp';
// import TestAPI from './components/TestAPI';
// import EventOBJ from './components/EventOBJ';
// import Hook from './components/Hook';
// import StateBox from './components/StateBox';
// import TestState from './components/TestState';
// import PropsParent from './components/PropsParent';
// import EventBox from './components/EventBox';
// import TestEvent from './components/TestEvent';
// import TestHook from './components/TestHook';
/**
 * App 안에 원하는 내용 바로 작성 가능하지만,
 * 각 내용을 컴포넌트로 만들어서 화면에 출력하는 방식을 주로 사용
 * 빈 컴포넌트를 만들고 App으로 불러와 화면 보면서 작성
 */
function App() {
  // function App안에서는 js내용을 자유롭게 사용할 수 있다


  // return 이하 > render될 html의 내용을 작성 + {}통해 js문법 작성 가능
  return (
  // return내부 실행 순서 >> 위->아래
  // 오류 발생 시 화면 전체가 출력되지 않는다
    <div className="App">
      {/* <StateBox /> 
      <PropsParent />
      <TestState /> */}
      {/* <EventBox /> */}
      {/* <TestEvent /> */}
      {/* <EventOBJ /> */}
      {/* <Hook /> */}
      {/* <TestHook /> */}
      {/* <APIComp /> */}
      {/* <TestAPI /> */}
      {/* <RootIndex /> */}
      <TestRootIndex />

    </div>
  );
}


// export를 통해 '모듈 형식'으로 함수나 변수를 내보내줄 수 있다
// default -> {}없이 import, 반대로 export만 사용해 내보낼 경우 {}통해 import
export default App;
