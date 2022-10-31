const year=document.getElementsByClassName("year")
const countDown=document.querySelector(".countdown")
const dayEl=document.getElementById("day")
const hourEl=document.getElementById("hour")
const mntsEl=document.getElementById("mnt")
const secondEl=document.getElementById("scd")

const newYear=new Date("March 23, 2023 00:00:00").getTime();


updateCounDown();

function updateCounDown(){
    const currentDay=new Date().getTime();
    const gap= newYear - currentDay;
    const second=1000;
    const mnt=second*60;
    const hour=mnt*60;
    const day=hour*24;
    const d=Math.floor(gap/day);
    const h=Math.floor((gap%day)/hour)
    const m=Math.floor((gap%hour)/mnt)
    const s=Math.floor((gap%mnt)/second)
    dayEl.innerHTML=d
    hourEl.innerHTML=h
    mntsEl.innerHTML=m;
    secondEl.innerHTML=s;
    setTimeout(updateCounDown, 1000 );
}






