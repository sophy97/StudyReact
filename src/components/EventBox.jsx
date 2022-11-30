// 11.30.리액트 복습
// 자주 사용하는 이벤트 확인
// 객체와 배열, 객체를 가진 배열에 대한 내용 확인하기
// map과 filter >> js의 메소드(함수)를 사용하기
// data 기능 >> js의 메소드에서 확인할 수 있다
import { useEffect, useState } from "react";

// EventBox.jsx 영역 전체에서 사용되도록 위로 빼 두기
let name= "a";  // 화면에 출력되지 않으나 많이 바뀌는 값에 사용
    // 이 값을 화면에 출력하려면, state에 담아 관리 -> 화면 바뀌게 사용가능

const EventBox = () => {
    const [changeName, setChangeName] = useState("");
    const [clickName, setClickName] = useState("");    // state changeName 받아옴
    const [varName, setvarName] = useState("");        // 변수 name 받아옴

    
    const funcName =(n)=>{
        name = n;
        console.log(name);
    }
    useEffect(()=>{ console.log('실행')},[]);

    /** '객체'인 state에 이벤트로 값 넣기
     *  1> 각 속성에 값을 넣어줘야 함
     *  2> 남은 속성의 값은 유지 > ...(스프레드연산자): 객체나 배열 안 요소를 꺼냄
     */
    const [user, setUser] = useState (
        {   name:"",
            address:"",  }
    );
    
    // 이벤트에 들어갈 함수
    const changeUser =(e)=>{    // 변수의 값을 속성으로 사용하기 위해 []사용
        setUser({...user , [e.target.name] : e.target.value})
    }

    // 변수: 고정해서 쓸 값이자 화면 상 바뀌지않을 값
    // 컴포넌트를 반복 출력하기 위해 배열을 사용
    const info = ['name', 'address'];

    // 배열 안에 객체 넣어 진행
    const infoObj = [
        {id:1, name:"name", info:"이름"},
        {id:2, name:"address", info:"주소"},
    ];




    return ( 
        <div>
            <h3>이벤트 박스</h3>
            <h4>state로 작성한 이름: {changeName}, <br /> 변수 이름:{name} </h4>

            <input type="text" onChange={(e)=>{ setChangeName(e.target.value) }} /> 
            <button onClick={()=>{ setClickName(changeName) }}>state값 저장</button>

            <input type="text" onChange={(e)=>{ funcName(e.target.value) }} />
            <button onClick={()=>{ setvarName(name) }}>변수name값 저장</button>
            <h4>state값 가져와서 저장:{clickName} / 변수값 가져와서 저장:{varName}</h4>
            <hr />
            <h3>객체의 값 바꾸기</h3>
            <p>유저.이름 : {user.name}  / 유저.주소:{user.address}</p>
            이름: <input type="text" name="name"
            // ...를 사용하여 객체 안의 값을 전부 가져오고, 
            // 객체 내부 속성 바꾸고 싶다면 해당 속성 이름을 사용(e.g:user객체의 name)
            // e객체는 값을 전달하지 않아도 사용 가능 (익명함수 감싸지 않아도 된다고)
            onChange={ changeUser } />     
            <br />
            주소: <input type="text" name="address"
            // 객체 내부 속성 바꾸고 싶다면 해당 속성 이름을 사용(e.g:user객체의 adress)
            onChange={ changeUser }  />

            <h3>배열 통해 컴포넌트/태그를 반복 출력하기</h3>
            <p>배열값도 html에 그대로 출력 가능</p>
            <h4>{user.name} / {user.address}</h4> 
            배열 그대로 출력해보기 : {info}
            { // 배열을 map 통해서 반복
                // map: 배열의 메서드(배열만 사용 > 배열의 요소를 하나씩 꺼내서 return > 새 배열 생성)
                //info:배열명, information:배열 안 요소들 지칭, index:현재 가져온 배열 요소의 index값
                // ()=>{}아니라 ()사용하는 이유: return값을 통해 tag, comp를 사용하기 위함 (출력할 모습 지정)
            info.map( (information, index)=>(
                <div key={index}>
                {information} 
                <input type="text" 
                name={information} onChange={changeUser} />
                </div>
            ) )
            }
            <hr />
            <h3>객체의 배열</h3>
            {/* infoObj : 객체는 리액트에서 바로 출력할 수 없다 */}
            배열 그대로 출력해보기 :안돼, 인덱스와 요소 지정까지 해야 = {infoObj[0].name}
            {   // ()=>()는 알아서 return값으로 넘겨준다 
            // ()=>{} 를 사용했다면 return을 작성해 값을 내보내줘야 한다
                infoObj.map((information)=>{
                    return (
                        <div key={information.id}>
                            {information.info}
                            <input type="text" name={information.name} 
                            onChange={changeUser}
                            />
                        </div>
                        );
                    })
            }
            <hr />
            <h3>filter함수 사용</h3>
            { // filter함수는 return값이 true이면 새로운 배열에 넣고,
            // false이면 새로운 배열에 넣지 않는다 (원본:info배열에는 영향 X)
                // ()=>(조건)에 맞는 내용만 걸러준다 > 삭제기능 가능
                info.filter( (information)=>( information === "name" ) )
                // 원본 배열의 값을 바꾸려면, 그 원본 배열의 값에 새로 만들어진 배열을 넣어줘야
                // filter의 결과값이 배열이므로, map으로 다시 화면에 출력 가능하다(아래)
            }
            { // map 이용해서 다시 화면에 출력할 수 있다
            // 즉, map으로 객체의 값을 바꿔 넣어줄 수 있음
                        // filter의 return값 : T/F > 원본의 값으로
                infoObj.filter((information)=>( information.id === 2 ))
                         // map의 return값 : 원본값+추가 > 작성(수정)한 값으로
                        .map( (information)=>( 
                            information.id === 2 ? {...information, info:"수정된 주소"}
                                                :information 
                                            ) )                         
                        .map( (information, idx)=>(<p key={idx}>{information.info}</p>) )
            }





        </div>
    );
}

export default EventBox;