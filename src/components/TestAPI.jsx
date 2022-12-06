import { useState } from "react";

const TestAPI = () => {
    // news저장할 공간 state
    const [news, setNews] = useState();


    const getData = async (country) => {
        const url = "https://newsapi.org/v2/top-headlines/sources?"+
                        "category=business&"+
                        "country="+country+
                        "&apiKey=350c2bc9dedd490ea03cbf1e42d4f737"
        // 위 주소를 이용해 버튼 누를때마다 다른 나라의 값을 받아오도록 작성
        const response = await fetch(url);
        console.log(response);
        const body = await response.json();
        console.log(body);
        setNews(body);
        // undefined > 시간 지나면 나옴
        console.log(news);
        }
    


    return ( 
        <div>
            <h1>뉴스API 확인</h1>
            <p>버튼을 누를때 관련 나라의 기사를 가져오기</p>
            {/* 필요한 값을 전달하여 url의 내용을 채울 수 있게 작성 */}
            <button onClick={ ()=>{getData("us")} }>US</button>
            <button onClick={ ()=>{getData("fr")} }>FR</button>

            {/* 아래에 map으로 기사 출력하기 */}
            {/* {news &&
            news.sources.map((source, idx)=>(
                <div key={idx}>
                    <p>{source.name}</p>
                    <li>{source.description}</li>
                </div> ))
            } */}
            <hr />
            {/** 추가!
             *  값이 들어왔지만 배열에 값이 없을 경우,
             *  삼항 연산자 안에 또 삼항연산자가 들어갈수 있다
            */}
            {
                news && news.sources.length>0 ?
                news.sources.map((source, idx)=>(
                    <div key={idx}>
                        <h4>{source.name}</h4>
                        <li>{source.description}</li>
                    </div>
                ))
                : "검색 결과가 없습니다"
            }

        </div>
    );
}

export default TestAPI;