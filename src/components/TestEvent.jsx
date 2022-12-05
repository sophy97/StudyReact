import { useState } from "react";

const TestEvent = () => {
    const [memos, setMemo] = useState([
        {id : 1, text: "메모1"},
        {id : 2, text: "메모2"},
        {id : 3, text: "메모3"},
        {id : 4, text: "메모4"},
    ]);


    return (
        <div>
        <h3>이벤트 테스트 공간입니다</h3>
        {/*map을 통해서 전체 내용을 출력해주세요*/}
        {memos.map((memo)=>(
            <div key={memo.id}>
            <p>{memo.text}</p>
            </div>
        ))}
        {/* TestBox를 이용하여 내용을 출력해주세요*/}
        {
            memos.map((memo)=>(
            <TestBox memo={memo} setMemo={setMemo} memos={memos}/>
            ))
        }
        </div>
    );
    };

//TestEvent에서 사용할 TestBox
const TestBox = (props) => {
    // memo와 setMemos를 props값으로 들고오기
    const {memo, setMemo, memos} = props;
    
    //수정창을 닫고 여는 state
    const [modify, setModify] = useState(false);
    // 수정할 내용을 저장하는 state
    const [input, setInput] = useState("");

    /** onMouseEnter, onMouseLeave를 사용하여 
     * 마우스가 div위에 있다면 backgoundColor를 lightgrey
     * 마우스가 div위를 떠난다면 backgoundColor를 white
     * 로 바뀌게 작성하세요
     */
    // div의 스타일 값을 참/거짓으로 주기위한 state
    const [onDiv, setOnDiv] = useState(false);
    // onMouseEnter, onMouseLeave에 실행할 함수
    const onMouseToggle = (e)=>{
        console.log(e.type);
        // 이벤트의 타입을 통해서 if문으로 값을 넣어줄수 있다
        if(e.type === "mouseleave") {
        setOnDiv(false);
        }else {
        setOnDiv(true);
        }
        // 수정창을 눌렀을때 색 고정
        if(modify) {
        setOnDiv(true);
        }
    }

    return ( 
        <div style={onDiv?{backgroundColor:"lightgrey"}:{}} onMouseEnter={onMouseToggle} onMouseLeave={onMouseToggle}>
        {/* memo의 값 들고오기 */}
        <h4>{memo.text}</h4>
        
        { // modify true일때 화면에 출력
            // true 일때, input의 값을 입력받고, 
            // 버튼을 누르면 그 값이 setMemos로 수정되고 modify가 false로 바뀜
            modify ? (
            <div> 
                <input type="text" onChange={(e)=>{setInput(e.target.value)}}/>
                <button 
                onClick={()=>{
                const modifyMemo = {...memo, text : input}
                setMemo(memos.map((m)=>(m.id === memo.id? modifyMemo : m)));
                setModify(false);
                }}
                >
                수정완료</button>
            </div>
            ):
            (// 버튼을 누르면 modify가 true
            <button onClick={()=>{setModify(true)}}>수정</button>
            )
        }

        </div>
    );
    }


export default TestEvent;