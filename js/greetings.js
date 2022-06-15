// 로그인 유저네임기억방법 경고창 띄우기방법 (js버전)

        // // const loginForm = document.getElementById("login-form");
        // const loginInput = document.querySelector("#login-form input");
        // const loginButton = document.querySelector("#login-form button");
        
        // function onLoginBtnClick(){
        //     const uesrname = loginInput.value;
        //     if (uesrname === ""){
        //         alert("다시 확인해 이름을 적어주세요");
        //     }else if(uesrname.length > 15){
        //         alert("15자 이내로 작성해주세요.");
        //     }else{
        //         alert("환영합니다." + uesrname + "님");
        //     }
        // }

        // loginButton.addEventListener("click",onLoginBtnClick);


        //html에서 form태그 -> input태그 자동 submit이 될때 새로고침 막는 법
        
        const loginForm = document.querySelector("#login-form");
        const loginInput = document.querySelector("#login-form input");
        const greeting = document.querySelector("#greeting");

        // 자주 사용하게 되는 단어를 대문자로 변수이름지어놓으면 오타났을 경우 브라우저에서 알려줌
        const HIDDEN_CLASSNAME = "hidden";
        const USERNAME_KEY = "username";

        function onLoginSubmit(event) {
            event.preventDefault(); //브라우저가 submit 새로고침을 발생시키려고 할때 막는 법
            loginForm.classList.add(HIDDEN_CLASSNAME);
            const username = loginInput.value;
            localStorage.setItem(USERNAME_KEY, username);
            paintGreetings(username);
        }

        function paintGreetings(username){
            // 아래 내용은 똑같은 결과를 보여주지만 코드가 더 있어보임..ㅎ
            // greeting.innerText = username + "님 환영합니다!";
            greeting.innerText = `${username} 님 환영합니다!`;
            greeting.classList.remove(HIDDEN_CLASSNAME);
        }

        const savedUsername = localStorage.getItem(USERNAME_KEY);

        if(savedUsername === null){
            loginForm.classList.remove(HIDDEN_CLASSNAME);
            loginForm.addEventListener("submit", onLoginSubmit);
        }else{
            paintGreetings(savedUsername);
        }