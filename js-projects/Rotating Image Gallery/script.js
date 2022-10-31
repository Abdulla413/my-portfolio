console.log("$")

const containerElements=document.querySelector('.container')

const preBnt=document.getElementById("pre");
const nextBnt=document.getElementById('next');
console.log(containerElements)

let x=0;
preBnt.addEventListener("click", ()=>{
x=x+45;
updateGalery();
})

function updateGalery(){

    containerElements.style.transform=`perspective(1000px) rotateY(${x}deg)`
} 

nextBnt.addEventListener('click',()=>{
    x-=45;
    updateGalery();
})

