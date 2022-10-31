
const starsEl=document.querySelectorAll('.fa-star')
const emojiEl=document.querySelectorAll('.fa-regular')
const colors=['brown', 'red', 'lightblue', 'lightgreen', 'green']

starsEl.forEach((start, index)=>{
    start.addEventListener("click", ()=>{

        updateStar(index)

        console.log(`I am ${index +1}'th start, i am clicked`)
    })
})

function updateStar(ind){
    starsEl.forEach((star, i)=>{
        if(i<ind+1){
            star.classList.add('active')
        }else{
            star.classList.remove("active")
        }
    });

    emojiEl.forEach((emoji)=>{
        emoji.style.transform = `translateX(-${ind*50}px)`
        emoji.style.color=`${colors[ind]}`
    })

}


