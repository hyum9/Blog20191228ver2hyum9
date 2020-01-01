import React from "react";
import { Link } from "react-router-dom";

export default () =>(
    <div>
        <h1>About Spring</h1>
        <h3>Project01. 게시판 만들기</h3>

        통합개발환경(IDE): Eclipse<br/>
        플러그인: Spring-Tool-Suite<br/>
        ->프로젝트 생성 시 프레임워크로 Spring 사용<br/>
        <Link to="/spring/springframework">SpringFrameWork을 쓰는 이유</Link><br/>
        언어(language): Java<br/>
        프레임워크(framework): Spring, Maven<br/>
        웹 서버(web-server): Tomcat<br/><br/><br/><br/>

        <hr/>
        2019-12-30 ToDoList<br/>
        1. Blog 화면 바뀌는 거 실행<br/>
        2. Spring 으로 게시판 만들기 환경 설정 <br/>
        3. Spring 으로 게시판 만들기 <br/>
    </div>

);