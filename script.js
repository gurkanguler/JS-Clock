let Func = () =>{

    let date = new Date();

    let clock = document.querySelector('.clock');

    let hour = document.querySelector('.clock .hours').innerHTML = date.getHours()+"&nbsp;"+"&nbsp;"+":";

    let min = document.querySelector('.clock .minute').innerHTML = date.getMinutes()+"&nbsp;"+"&nbsp;"+":";

    let sec = document.querySelector('.clock .second').innerHTML = date.getSeconds();
}


setInterval(Func,60);