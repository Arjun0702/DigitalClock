function showTime(){
    let dateDigi = new Date();
    let hr = dateDigi.getHours();
    let min =dateDigi.getMinutes();
    let sec=dateDigi.getSeconds();
    let year=dateDigi.getFullYear();
    let dat=dateDigi.getDate();
    let month =dateDigi.getMonth();
    let day=dateDigi.getDay();
    let session="AM"

    if(hr == 0){
        hr =12
    }
    else if(hr > 12){
        hr= hr-12;
        session="PM"
    }

    hr =(hr<10)? "0"+ hr:hr;
    min =(min<10)? "0"+ min:min;
    sec =(sec<10)? "0"+sec:sec;
    dat =(dat<10)? "0"+dat:dat;
    month=month+1;
    month=(month<10)? "0"+month:month;
     meridian = hr <12? 0:1;

     
    
   
    document.getElementById("hr").innerText=hr;
    document.getElementById("min").innerText=min;
    document.getElementById("sec").innerText=sec;
    document.getElementById("day").innerText=dat;
    document.getElementById("month").innerText=month;
    document.getElementById("year").innerText=year;
    document.getElementsByClassName("day")[day].setAttribute("checked",true)
    document.getElementsByClassName("mer")[meridian].setAttribute("checked",true)

    

    setTimeout(showTime, 1000)
}
showTime()

