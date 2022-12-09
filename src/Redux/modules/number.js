// 1 > 초기값 (initialState)
//     원하는 변수값 다 넣을 수 있음: 주로 객체형태 사용(여러값 사용하므로)
const initialState = {
    number : 0,
    write: "글"
}



// 2 > 값을 수정 또는 사용할 리듀서 함수 (reducer함수명은 주로 js파일명과 통일)
//     함수의 매개변수로 들어갈 값 : state(넣어), action(받아와)
function number(state=initialState, action) {
    // switch문 사용해서 action.type에 따라 각 실행할 코드를 작성
    switch (action.type) {
        case "increase" :
            //"increase" 라는 action 발생시 + 1
            // return으로 값이 바뀐 {state}전달하는 방식으로 작성
            //...(스프레드연산자)로 state그대로 들고온 후, 바뀌는 값을 따로 작성해야 함!
            // 이때 접근하는 state는 현재 number.js에서 작성한 initialState 임
            return {...state, number:state.number+1 }
        case "setNumber" :
            // 값을 받아와서(받아올 공간:action.payload) 그 내용을 수정 > 값 전달
            return {...state, number:action.payload }
        default : 
            return state;
    }
}

// 4 > 액션함수 : {type:"리듀서이름"}을 return(결과값)해서 사용
// 다른 js, jsx를 사용하게 됨 > export 통해 바로 내보냄
export const increase =()=>( {type:"increase"} );
// 값을 가져와 사용(payload)할 때는, 매개변수를 통해 값을 가져와 사용한다고 써줌
export const setNumber =(num)=>( {type:"setNumber", payload:num} );


// 3 > 만든 number함수 modules/index.js에 연결.전달하기 위해 내보냄
export default number;