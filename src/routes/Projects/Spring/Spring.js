import React from "react";
import { Link } from "react-router-dom";

export default () =>(

    <div>
        <h1 id="title">Projects</h1>
        <h3 id="subtitle">About Spring</h3>

        <h2 id="subject">Spring FrameWork DI(Dependency Injection)</h2>
        <p id="content">
            Spring Framework 가 해결하는 가장 큰 문제는 의존성이다. <br/>
            Controller를 한 번 살펴보자<br/><br/>

            @RestController<br/>
            public class WelcomeController<br/>
	        private WelcomeService service = new WelcomeService();<br/>
	
	        @RequestMapping(“/welcome”);<br/>
	        public String welcome()<br/>
		        return service.retrieveWelcomeMessage();<br/><br/><br/>
	        

                Controller와 Servlet<br/>
                -Servlet 클래스로 만든 것이 Controller이다. <br/>
                -Servlet클래스는 Tomcat(Servlet Container)이 관리한다. <br/>
                -Servlet Container 설정 파일에는 Servlet에 대한 정보가 담겨져 있다. <br/>
                -Servlet Container에는 Servlet에 대한 정보가 담겨져 있는데<br/>
                예를 들면, Servlet이 어디에 있는지는 servlet-class로<br/>
                어떤 url에 매핑 되는지에 대한 정보는 servlet-mapping>에 관한 정보가 담겨져 있다.<br/>
                -Controller, 즉 Servlet이 사용자의 요청을 처리를 위해서는 Servlet 클래스 혼자 할 수 없다. <br/>
                즉 다른 객체(Object)에 의존할 수밖에 없다. 혼자 할 수 있어도 코드가 굉장히 복잡해지고 어려워 진다. <br/>
                -Controller가 의존하는 객체를 새로 만들고 하는 등의 시간과 객체의 관리는 자동으로 하는 것이 개발자에게는 매우 편리하다. <br/>
                -개발자는 프로그램의 기능에만 집중할 수 있다.<br/>
                -따라서 우리는 DI를 쓴다. <br/>
                -Spring에서 DI는 두가지 방법으로 쓸 수 있다. <br/>
                -하나는, <br/>
                
                @Autowired<br/>
                private Banana banana;<br/>

                -다른 하나는 
                public String testApple(Apple apple)<br/> 
        </p>
        
    </div>

);