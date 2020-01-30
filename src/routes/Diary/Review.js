import React from "react";
import { Link } from "react-router-dom";

export default () =>(
    <div>
        <h1>Review</h1>
        <h3>2020-01-09-TH</h3>
        <p>
            <br/><br/>
            STS(Spring Tool Suite)<br/>
            -Eclipse를 바탕으로 한 개발환경(Development Environment)<br/>
            -Spring Application을 개발하기 위해 커스텀 된 개발 환경<br/>

            <br/><br/>
            Spring<br/>
            -자동차의 프레임<br/>
            -기본적으로 구성하고 있는 뼈대<br/>
            -자바 언어로 작성된 회사 또는 기업의 개발을 편하게 해주는 경량급 오픈소스, 애플리케이션 프레임워크<br/>

            JAVA EE(Java Platform, Enterprise Edition)<br/><br/>
            - 플랫폼: 애플리케이션(소프트웨어)를 작동시키기 위한 기반OS, 기술 환경<br/>
            - 소프트웨어 플랫폼: CPU(하드웨어)와 OS(operating system-일종의 소프트웨어)에 따라서 애플리케이션 소프트웨어를 사용할 수 있는 실행환경이 다름<br/>
            - 소프트웨어 > OS = 플랫폼 > 하드웨어<br/>
            - 소프트웨어는 하드웨어 위에서 실행시킨다<br/>
            - 하드웨어는 0과 1만 이해할 수 있고, 0과 1로 이루어진 명령어만 처리할 수 있다<br/>
            - 그런 하드웨어(CPUA, CPUB 등)위에서 소프트웨어를 실행시키기 위해서는 하드웨어을 컨트롤 할 수 있어야 함<br/>
            - 하드웨어를 컨트롤 할 수 있는 명령어의 모음이 필요하다.<br/>
            - 우리가 0과 1을 사용하여 하드웨어를 직접 컨트롤 하는 것은 굉장히 비효율적이다 <br/>
            - 따라서, os라는 operating system을 사용하여 os가 하드웨어를 직접적으로 컨트롤 하고 우리는 소프트웨어를 올리면<br/>
            - os의 과정을 거쳐 소프트웨어가 메모리를 사용할 수 있도록 메모리 할당 등을 책임져 준다<br/>
            - os는 하드웨어에 종속적이다. <br/>
            - 계속 문제를 상상해 보는 것이여 <br/>

            - 플랫폼에 따라 소프트웨어를 달리 작성해야 하는 문제점이 있음<br/>
            - 소프트웨어(고급언어) --컴파일--> 기계어(플랫폼, 끝까지 내려가면 하드웨어에 따라 이해 할 수 있는 명령어가 다름)<br/>
            - --빌드--> 실행가능한 파일 --배포--> 사용자가 다운 받아 사용함<br/>
            - 각각의 플랫폼, 하드웨어에 맞는 소프트웨어가 필요함<br/>

            -그러나 Java와 브라우저가 등장하면서 이 문제가 극복된다.<br/>
            -브라우저, Java도 하나의 플랫폼<br/>

            -자바 플랫폼: JVM(Java Virtual Machine)자바 가상 머신 + API (Application Programming Interface)애플리케이션 프로그래밍 인터페이스<br/>

            -JAVA EE: 자바 spec, 일종의 명세서<br/>
            -Java EE에 나와 있는 JVM과 API를 쓰지 않으면 의미가 없음<br/>

            <br/><br/>
            API(Application Programming Interface)<br/>
            - 계산기 프로젝트에서 API를 만들고, API를 사용하여 프로그램을 작성했다<br/>
            - 애플리케이션을 프로그래밍 할 때 쓰는 도구<br/>
            - 개발자는 API 제공자가 공개적으로 노출한 멤버들을 사용하여 원하는 기능에 접근하고<br/>
            - API제공자는 해당 기능을 구현하는데 사용된 코드를 숨길 수 있음 <br/>
            - 애플리케이션들(API와 만들고자 하는 애플리케이션)이 대화할 수 있도록 도와주는 소프트웨어 중계자<br/> 
            - 즉 API는 철저히 공개된 멤버 필드, 함수를 가리킨다 <br/>

            <br/><br/>
            DI(Dependency Injection)의존성 주입<br/>
            -각각의 계층과 서비스들간의 의존성이 존재할 경우 Spring이 서로 연결시켜 준다<br/>
            -POJO(Plain Old Java Object)객체들 사이의 의존 관계를 Spring이 알아서 연관성을 맺어준다<br/>

            <br/><br/>
            Apache(아파치)<br/>
            -웹 서버(일하는 사람1)<br/>
            -클라이언트의 요청 중에서 (POST, GET, DELETE)가 왔을 때만 요청을 처리할 수 있음<br/>
            -정적 데이터만 처리한다<br/>
            -아파치만 쓰면 정적인 데이터만 처리할 수 있으므로 처리속도가 높아 굉장히 안정적이다<br/>

            <br/><br/>
            Tomcat(톰 캣)<br/>
            -동적인 웹을 만들기 위한 웹 컨테이너<br/>
            -컨테이너, 웹 컨테이너, 서블릿 컨테이너<br/>
            -JSP, 서블릿 처리, HTTP 요청 처리 가능 (즉, 웹 서버가 처리할 수 있는 Post, Get, Delete와는 다른 요청)<br/>
            -소켓을 사용하여 웹 서버와 통신함<br/>
            -클라이언트 요청(정적인 거!) --웹 서버--> 처리 --웹 서버--> 클라이언트<br/>
            -클라이언트 요청(동적인 거!) --웹 서버--소캣--톰켓--> 처리 --톰캣--소캣--웹 서버--> 클라이언트<br/>

            <br/><br/>
            Apache Tomcat(아파치 톰캣)<br/>
            -톰켓이 아파치의 일부 기능(정적인 웹을 만들 수 있는 기능)을 가져와서 제공해주는 형태<br/>
            -합쳐서 WAS(Web Application Server) = 웹 서버 + 웹 컨테이너<br/>

            <br/><br/>
            Maven(메이븐)<br/>
            -프로젝트 관리용 도구<br/>
            -프로젝트에서 쓰는 프레임워크, 라이브러리를 관리해 준다.<br/>
            -POM(Project Object Model)이 가장 핵심이다.(pom.xml로 구현되어 있음)<br/>
            
            <br/><br/>
            Spring Security<br/>
            -gradle(프로젝트 관리용 도구 중 하나)을 쓰는 경우 build.gradle에 Spring Security dependency로 추가<br/>
            -단계<br/>
            -1. Security Configuration 클래스 파일 작성(security 설정 파일)<br/>
            -2. Mr.Authentication: who are you?(사용자의 신원을 알고 싶어 함) <br/>
            -2-1. Authentication Manager: find this guy by username(입력된 사용자의 이름을 바탕으로 신원을 조외함)<br/>
            -2-2. Identification Card가 user에게 한장 제공되고 Security Context에 한 장 저장됨 <br/>
            - 정리 하면 user(신분증 1장 소지) + security context (신분증 1장 보관)
            -3. Authorization Filter는 Security Context에 보관된 신분증에 나와 있는 정보(user's role)을 확인<br/>
            -3-1. Role이 일치하는 경우 접근을 허락해준다.<br/>
            <br/><br/>
            Annotations<br/>
            - 사전적 의미로는 주석, 메타 데이터(데이터를 설명하는 데이터)<br/>
            - 컴파일러에게 코드를 설명하기 위한 데이터, 이 코드가 어떤 코드인지 알려주는 데이터 <br/>
            - //처럼 프로그래머에게만 의미있는 코드에 대한 설명이 아닌 컴파일러에게 어떤 코드인지 알려주는 컴파일러에게도 의미 있는 코드이다<br/>
            - 컴파일 할때 어노테이션을 보고 고급언어를 기계어로 작성한다<br/>
            - 클래스, 필드, 메서드 등과 같은 여러 프로그램 요소에 정보를 제공해주는 방법 중 하나이다. <br/><br/>

            @SpringBootApplication<br/>
            -@Configuration + @EnableAutoConfiguration + @ComponentScan으로 구성되어 있다<br/>
            -@EnableAutoConfiguration: 개발자가 작성한 프로그램에서(class path)를 바탕으로 자동으로 Spring Applicaton을 구성한다.<br/>
            - class path에 있는 dependency가 있는 bean을 생성하고 연결한다.<br/>
            - "ensure create and wire beans"<br/><br/>

            How Spring auto-configuration works?
            - Spring Boot auto configuration automatically configure Spring Application based on the dependencies present on the classpath<br/>
            - Spring Boot detects classes in the classpath and auto-configuration mechanism will ensure to crate and wires necessary beans for us<br/>
            - This is one of the most powerful feature of the Spring Boot and most of the work happens silently in the background<br/>

            @Bean
            - method level annotation<br/>
            - 이 함수는 bean이라는 것을 return type으로 가진다<br/>
            - During Configuration , the method is executed(Spring boot application이 구성을 할 때, 함수는 실행이 되고 return value는 bean으로 등록된다)<br/>
            - and its return value is registered as a bean within beanFactory<br/>
            
            @configuration 
            - configure할 때 method들이 실행된다<br/>

            - @Bean이 작성된 method에서 bean을 return value로 반환한다<br/>
            - @EnableAutoConfiguration에서 이러한 bean들을 자동으로 연결한다<br/>
            <br/><br/>
        </p>

        <h1>Review</h1>
        <h3>2020-01-10-FRI</h3>
        <p>
            <br/><br/>
            라이브러리와 프레임워크의 차이<br/>
            -라이브러리는 다른 사람이 만든 클래스를 제공해주는 기능이라면<br/>
            -그리고 개발자는 제공받은 클래스를 사용하여 프로그램을 만드는 것이라면<br/>
            -프레임워크는 관리라는 개념을 포함하고 있다<br/>
            -그럼 프레임워크에서는 무엇을 관리해야 할까? '객체'이다.<br/>
            -스프링 프레임워크에서 객체 관리를 맡는 친구를 '컨테이너'라 부른다.<br/>
            -개발자는 스프링 프레임워크에서 객체 관리를 컨테이너에게 맡긴다. <br/>

            <br/><br/>
            Spring Framework: Core Container, Data Access/Integration, Web, AOP, Instrumentation, Test<br/>
            -Core Container<br/>
            -Data Access/Integration<br/>
            -Web<br/>
            -AOP<br/>
            -Instrumentation<br/>
            -Test<br/>

            <br/><br/>
            Core Container<br/>
            -Core, Beans, Context and Expression Module로 구성되어 있음 <br/>
            Core and Beans?<br/>
            -스프링 프레임워크에서 핵심이 되는 부분<br/>
            -IOC(제어권을 스프링 프레임워크에게 넘기는 것) 그리고 DI(Dependency Injection)<br/>
            -IOC: 개발자가 객체를 사용하기 위해 직접 생성하고 소멸시키고 사용하는 것이 아니라<br/>
            -스프링 프레임워크에서 프레임워크의 플로우에서 필요하다면, 프레임워크가 직접 사용자가 정의한 객체에 관한 클래스를 사용하여 객체를 생성하고 소멸시키는 라이프 사이클을 따르게 한다<br/>
            -Bean Factory가 기본 컨셉이다.<br/>
            -Bean Factory는 복잡한 Factory 패턴을 가지고 있다.<br/>
            -복잡한 Factory 패턴이란 무엇인가?<br/>
            -Factory 패턴이라는 것은 무엇인가?<br/>

            -프레임워크, 언어 와 패턴을 만들 때 원칙이 있다.<br/>
            -개념과 용어를 만드는 이유는 사람들이 쉽게 쓸 수 있도록 하기 위해서이고 그런 개념을<br/>
            -쉽게 설명을 한다면 나의 관점에서 이해를 한 것이고 어렵게 설명한다면 이해하지 못한 것이다<br/>
            -Factory Pattern의 원칙은 바뀌는 부분을 찾아 내서 바뀌지 않느 부분과 분리시켜야 한다.<br/>
            -즉, 바뀌는 부분과 바뀌지 않는 부분의 코드를 분리시키는 것이 Factory Pattern을 쓰는 목적일 것이다<br/>
            
            -Factory 자체의 의미 역시 '공장'이다.<br/>
        </p>

        <h1>Review</h1>
        <h3>2020-01-11-SAT</h3>
        <p>
            <br/><br/>
            Spring Framework<br/>
            - 20가지 정도의 모듈로 구성되어 있음<br/>
            - Test, Core Container, AOP, Instrumentation, Data Access/Integraton, Web<br/>
            - Core Container: 핵심 컨테이너(핵심은 무엇일까? 객체이다)<br/>
            - Test/Instrumentation: 수단, 방법/테스트<br/>
            - AOP: Aspect Oriented Programming: 관점 지향 프로그래밍: 어떤 관점인가?<br/>
            - 비슷한 개념으로 OOP(Object Oriented Programming이 있음): 객체를 지향하는 프로그래밍<br/>
            - Data Access/Integration: 데이터 접근/통합<br/>
            - Web: MVC/ Remoting: 웹 기술을 관련<br/>
            - 그리고 Spring Security 등 다른 여러 module도 존재한다<br/>

            <br/><br/>
            Core Container: Core, Beans, Context and Expression Module<br/>
            - Core and Beans: Spring Framework에서 핵심이 되는 부분<br/>
            - Core: 핵심, 중요한<br/>
            - Bean: 콩, 실제 의미는 object이다<br/>
            - IOC(Inversion Of Control)과 DI(Dependency Injection)을 제공함<br/>
            - 기본 컨셉은 Bean Factory에 있음<br/>

            Bean Factory<br/>
            - Bean의 생성, 연결 설정, 관리 등의 역할을 수행하는 부분이다.<br/>
            - Factory 패턴의 복잡성을 가지고 있다. <br/>
            - 그럼 Factory pattern 이란 무엇인가?<br/>

            <br/><br/>
            Spring Framework<br/>
            -
            -

            <br/><br/>
            Spring Framework<br/>
            -
            -
            <br/><br/>
            Spring Framework<br/>
            -
            -
            <br/><br/>
            Spring Framework<br/>
            -
            -
        </p>

    </div>
);