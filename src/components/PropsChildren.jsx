/**
 * 부모 PropParent로 부터 props로 받아와 사용하기
 * 
 * 받아올 수 있는 값들: 문자열, {js의 변수/함수}등 
 * ! 작성한 컴포넌트에 on~ 이벤트 작성하면 props값으로 들어온다 > onClick참조
 */
const PropsChildren = (props) => {
    // props의 값이 여러 개 들어오므로, 객체형태로 사용 가능 
    // > props.name 등의 사용이 귀찮으면 구조화 분해 > 변수처럼 사용
    const {name, count, setCount, onClick} = props;
    
    // children은 태그와 태그 사이에 작성한 값을 들고온다!
    const {children} = props;
    
    
    return (
        <div onClick={onClick}>
            <h3>PropsChildren comp</h3>
            <h5>부모로부터 받은 name값= {name}</h5>
            <h5>부모로부터 받은 count값 = {count}</h5>
            <button onClick={()=>{setCount(count+1)}}>+1</button>
            <p>{children}</p>
        </div>
    );
}

export default PropsChildren;