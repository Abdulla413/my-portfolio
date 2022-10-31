const counterEl=document.querySelectorAll('.counter');

console.log(counterEl)

counterEl.forEach((el,index)=>{
    el.innerHTML="0";
    incrementCounter();
    function incrementCounter(){
        let currentNum=+el.innerHTML ;
        const dataCiel= el.getAttribute("data-ciel"); 
        const increment = dataCiel / 10;
        currentNum = currentNum+increment;
        el.innerHTML=Math.floor(currentNum);

        if(currentNum < dataCiel){
            setTimeout(incrementCounter, 100);
        }else{
            el.innerHTML=dataCiel;
        }
    }
})