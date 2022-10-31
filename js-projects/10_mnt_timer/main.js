// Select every count countainer

const countCountainer = document.querySelectorAll(".count-container");

// select ever action click
const startAction = document.getElementById("start-timer")
const stopAction=document.getElementById("stop-timer");
const resetAction=document.getElementById("reset-timer")

// select HTML audio element
const timeOutAudio=document.getElementById("alarm_audio")




//Default initial values of timer

const defaultValue=10*60;

//Variable to the time

let countDownTime=defaultValue;

// Variable to store time enterval
var timeId;

// Variable to track timer is running or not

var isStopped=true;

//Function calculate time string

function timeFindString(){
    let minutes=String(Math.trunc(countDownTime/60));
    let seconds=String(countDownTime%60);
    if(minutes.length===1){
        minutes="0"+minutes;
    };
    if (seconds.length === 1) {
        seconds = "0" + seconds;
      }
    return minutes + seconds;
};


// Function to start coundown 

function startTimer(){
    if(isStopped){
        isStopped=false;
        timeId=setInterval(runCountDown, 500);
    }
}

// Function to stop count down

function stopTimer(){
    isStopped=true;
    if(timeId){
        clearInterval(timeId);
    }
}

// Function to resettimer

function resetTimer(){
stopTimer();
countDownTime=defaultValue;
timeRender();
}

// Attatch onclick event to button

startAction.onclick=startTimer;
stopAction.onclick=stopTimer;
resetAction.onclick=resetTimer;

// Initialize alarm sound

timeOutAudio.src=("http://soundbible.com/grab.php?id=1252&type=mp3");
timeOutAudio.load();



// Function for display time 

function timeRender(){

    const time=timeFindString();
    countCountainer.forEach((element, index)=>{
        element.innerHTML=time.charAt(index);
    })

}


// Function to executer timer
function runCountDown(){
    //decrement time
    countDownTime -=1;
    // Display update time
    timeRender();
    if(countDownTime===0){
        stopTimer();
        timeOutAudio.play()
        countDownTime=defaultValue;
    }
};

























