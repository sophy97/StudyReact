/** 
 *  데이터 API를 통해서 뉴스 데이터(값)를 가져오는 컴포넌트
 *  데이터 API의 특징 :
 * 데이터를 가져오기 위해 Ajax사용 - 비동기로 값을 가져와서 사용함
 * 비동기로 값을 가져와 사용 (http객체, fetchAPI, axios : 사용방식은 조금씩 다르나 목적 동일)
 */

import { useEffect, useState } from "react";

const APIComp = () => {
    // news 저장할 공간 state부터 선언
    const [news, setNews] = useState();

    // API의 내용이 많을 때는, 그 값이 빨리 전달되지 않을 수 있으므로
    // 그런 상황을 제어하기 위한 state를 추가하기 (로딩중o/x)
    const [newsloading, setNewsloading] = useState(false);

    // 값을 가져오기 > 확인(주소창) 후에 리액트로 들고오기!
    
    useEffect ( ()=>{
    // 시작하자마자 들고오기 위해 useEffect, 빈 배열 추가해서 시작될때만 들고오도록
    // 비동기로 내용 들고오므로 비동기함수 작성 (async)  / 기다릴 함수 (await)
    const getData = async () => {
        // fetch : 주소를 통해 값을 가져오기에 await를 써서 값을 기다렸다가 들고와야 함
        // await을 생략하면 'Promise 데이터'로 들고오게 된다
        // Promise : 값을 가져오겠다고 약속한 데이터 형식임
        // ㄴ 사용하는 방식 : then, await 을 이용해 값을 가져와서 사용
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=kr&apiKey=350c2bc9dedd490ea03cbf1e42d4f737");
        // 값 들어왔는지 구조 확인 > 함수는 실행시켜야 보인다
        console.log(response);
        const body = await response.json();
        console.log(body);
        // 출력할 내용을 만들어둔 공간에 지정
        setNews(body);
        //useState에 들어가는 값이 클때, 바로 반영되지 않을 수 있다(undefined)
        console.log(news);

        // 값이 들어올때까지 기다림
        if (!news) {
            setNewsloading(true);
            console.log("내용이 들어왔습니다")
        }
    }
    getData();
    },[newsloading] )




    return ( 
        <div>
            <h1>API 컴포넌트</h1>
            {/* 출력 시 주의사항 : 
                1 리액트는 객체형식 바로 출력할 수 없음
                    >> 객체 형식이 아닌 문자열이나 숫자를 출력해야 한다
                2 리액트는 undefined에서 값을 찾을 수 없음 
                    : 외부값이 들어오기 전에는 undefined가 들어간 상태 
                    ex 값이 들어가있지 않을때 속성에서 값을 찾아오려는 상황
                    >> 삼항연산자 사용해서 값이 있을때만 접근할 수 있도록 작성한다
             */}
            
            {/* news를 조건식 통해 출력,
             값 있을때 true / 없을때 false를 사용 */}
            { news ?  news.status : "값이 아직 들어오지 않음" }
            <br/>
            {/*실습: 
            articles의 0번째 인덱스 > title 출력 */}
            {news ? news.articles[0].title : "로딩중"}
            <hr />
            {/* 
            map을 사용해 반복출력하기 : title
                1. 현재 가져오는 데이터가 배열인지 확인
                2. 배열 안 요소가 객체 or 문자열 확인 후 출력
                3. 값이 없을 시 출력하지 않도록 삼항연산자나 &&연산자 사용
            */}
            {
            news &&
            news.articles.map((article, idx)=>(
                <div key={idx}>
                    <p>{article.title}</p>
                </div>
            )) 
            }

            <APIBox title="제목" />
            <hr />

            {/* 아래 별도로 만든 컴포넌트(사진과 제목)를 map으로 반복출력 */}
            {
                news && news.articles.map((article, idx)=>(
                    <APIBox key={idx}
                    title={article.title} urlToImage={article.urlToImage} />
                ))
            }

        </div>
    );
}

export default APIComp;


// 여러개의 데이터를 동일한 UI로 출력하기 위해 컴포넌트를 별도로 작성
const APIBox =(props)=> {
    // props의 값은 객체로 들어오므로, 
    // {객체} 기호로 감싸 구조화할당 사용 > 여기서 변수로 바로 사용가능
    // [배열]값이 들어오면 대괄호로 감싸야 한다
    const { title, urlToImage } = props;
    return (
        <div>
            <h3>{title}</h3>
            {/* 이미지가 없을때는 img태그 출력되지 않고, 빈공간 혹은 대체이미지 나오게 작성 */}
            {
                urlToImage ?
                <img src={urlToImage} alt="사진" width="300px" />
                : <div style={{width:"300px", height:"250px", backgroundColor:"lightgray", display:"inline-block"}}></div>
            }
            
        </div>
    );
}