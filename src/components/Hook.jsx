import { useEffect, useRef } from "react";
import { useState } from "react";

const Hook = () => {
    const [count, setCount] = useState(1);

    // 비동기 알아보기 위한 함수
    const changeCount =()=> {
        /** 
         * setCount가 3번 진행되는 함수 > 결과가 3씩 올라야 하는 구조
         *  그러나 실행 결과 : 1만 증가된 2가 출력된다
         *  아래 작성한 코드는 비동기로 진행되어 원하는 값이 나오지 않는 것이다
         *  */
        setCount(count+1);
        setCount(count+1);
        setCount(count+1);
    }
    // setCount를 세번 실행 시 +3을 시키기 위한 함수
    const changeCountFunc =()=> {
        // setCount안에 익명함수 작성하여
        // 이전 state값을 받아 매개변수로 사용 후, 그 값을 return하여 돌려줌
        setCount( (prevState)=>(prevState+1) );
        setCount( prevState => prevState+1 );
        setCount( prevState => { return prevState+1} );
    }

    // useEffect확인을 위한 state생성
    const [time, setTime] = useState(0);


    /**  useEffect
    1 > 라이프사이클 중 생성될 때만 실행하도록
    첫번째 값은 실행할 함수, 두번째 값으로 빈 배열
    컴포넌트가 생성되자마자 실행하고 싶은 함수 또는 자바스크립트가 있을 때,
    setInterval과 같은 타이머함수를 사용할 때 사용(몇초마다 반복되니까 실행시 한번만 실행하도록)
    생성되자마자 실행할 이벤트를 DOM에 추가하고 싶을 때
     */
    useEffect( ()=>{
        console.log("생성될 때만 실행됨");
        // 1초마다 실행할 함수를 작성
        // state와 함께 사용하기 - 'time' state 바로위에 생성 
        setInterval(changeTime,1000);
    },[] )
    // changeTime
    const changeTime =()=> {
        // 값을 콜백으로 들고와야 count와 time값이 고정됨
        // index.js에서 strictmode 주석처리하면 1씩 증가
        console.log("count",count)
        console.log("time",time)
        // 이전 state에 접근해 그 값을 들고오는 형식으로 사용됨
        setTime(prevtime => prevtime+1);
    }

    // 2 > 생성 후, 모든 state와 props값이 업데이트(화면 내용변경)될 때마다 실행
    useEffect ( ()=>{
        console.log("업데이트");
    } );
    // 3 > '특정 값(count)'이 업데이트될 때마다 화면 업데이트 하려면, 두번째 값에 지정한다
    useEffect ( ()=>{
        console.log("count가 실행됨");
    },[count] )


    /**   useRef로 DOM에 바로 접근
     *  useRef를 통해 DOM을 들고와서 확인하기
     *  현재 컴포넌트를 생성할 때, 그 화면에서 바로 들고 옴
     *  가져올 태그에 ref 를 지정하여 들고온다
     */
    const inputElement = useRef();

    useEffect( ()=>{
        // 범위 내 랜덤한 수를 정수로 가져와서 RGB컬러값으로 지정
        const r = Math.floor(Math.random()*255);
        const g = Math.floor(Math.random()*255);
        const b = Math.floor(Math.random()*255);
        inputElement.current.style.color = `rgb(${r},${g},${b})`;
        // DOM에 바로 접근 가능 > 확인만 해봄
        document.title = `현재 time : ${time}`;
        // document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    },[time] )

    useEffect(()=>{
        /** useEffect에서 컴포넌트가 삭제될 때 실행할 내용도 작성 가능
         *  삭제될 때만 실행하려면 두번째 값에 [빈 배열] 넣고, return에 원하는 함수내용 작성 
         * 즉, 라이프사이클 중 생성과 삭제 시에만 실행하려면, 반드시 두번째 값에 [빈배열] 넣고 작성.
         */
        return console.log("삭제되었습니다");
    },[])


    return ( 
        <div>
            <h1>Hook에 관하여</h1>
            <p>
                Hook은 리액트 16.8에서 추가된 버전, 그 이전 버전에서는 클래스형 사용 <br />
                hook 함수형 컴포넌트에서 state와 life style 사용
            </p>
            <br />
            <h3>useState</h3>
            <p>
                컴포넌트 안에서 state를 사용할 수 있게 하는 hook <br />
                const [사용할 변수명, 값을 수정할 함수] = useState (들어갈 (초기)값) <br />
                여러개 작성도 가능, 들어갈 값에는 모든 자료형이 가능하다 <br />
                useState는 비동기로 값을 넣어줌 : 값을 복잡하게 연속적으로 넣을 때 문제가 생길 수 있다 <br />
                * 클래스형 state도 비동기로 값이 들어간다! 
            </p>
            <button onClick={changeCount}>setState 비동기 | {count}</button> <br />
            <button onClick={changeCountFunc}> setCount 안에 함수사용 | {count}</button>
            <br />
            <h3>useEffect</h3>
            <p>
                useEffect는 라이프사이클을 사용할 수 있는 hook <br />
                컴포넌트의 생애주기 - 컴포넌트가 생성, 업데이트, 삭제될 때 <br />
            </p>
            <h4> useEffect로 컴포넌트 생성할 때 작성한 타이머 | {time} </h4>

            <hr />
            
            <h3>useRef</h3>
            <input type="text" ref={inputElement} />
            <p>
            인풋태그에 ref 로 공간 지정
            </p>

        </div>
    );
}

export default Hook;