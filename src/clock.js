const YMD = document.createElement("div");
const clock = document.createElement("div");
document.body.appendChild(YMD);
document.body.appendChild(clock);

function Timer(){
    const date = new Date();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    YMD.innerText = `${date.getFullYear()}.${month<10 ? '0'+month : month}.${day<10 ? '0'+day : day}`;
    clock.innerText = `${hour<10 ? '0'+hour : hour}:${min<10 ? '0'+min : min}:${sec<10 ? '0'+sec : sec}`;
    YMD.classList.add("writeColor");
    clock.classList.add("writeColor");
    YMD.classList.add("datePosition");
    clock.classList.add("clockPosition");
}

Timer();
setInterval(Timer, 1000);