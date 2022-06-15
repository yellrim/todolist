const clock = document .querySelector('h2#clock');

function getClock(){
    const date = new Date(); //현재 날짜 시간을 가져와줌.
    
    //시간이 문자열로 출력될 수 있게 String으로 감싸주고,
    //padStart를 이용하여 문자의 길이가 2가 되지 않으면 앞에 0을 추가.
    const housr = String(date.getHours()).padStart(2, "0");
    const Minutes = String(date.getMinutes()).padStart(2, "0");
    const Seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${housr}:${Minutes}:${Seconds}`
}

getClock(); //window가 load되면 바로실행될수있게 호출
setInterval(getClock, 1000); //1초마다 getClock함수가 실행될 수 있도록 호출