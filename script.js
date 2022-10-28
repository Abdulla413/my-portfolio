console.log("$")

const controlls=document.querySelectorAll(".controlls");
const singleControll=document.querySelectorAll(".control");
const sections=document.querySelector(".main-contant");
const singleSection=document.querySelectorAll(".section");

console.log(controlls);
console.log(singleControll);
console.log(singleSection);
console.log(sections);


function pagenation(){
// Deal with singleConroller active

for(let i=0; i<singleControll.length; i++){
        singleControll[i].addEventListener("click", function(){
                let currentContraller = document.querySelectorAll(".active-btn");
                console.log(currentContraller, "i am here")
                currentContraller[0].className=currentContraller[0].className.replace("active-btn","");
                this.className+=" active-btn";

        })

}


// Show selected Section

sections.addEventListener("click", (e)=>{
        const id=e.target.dataset.id;
        if(id){
                // Remove the section already is here
                controlls.forEach((btn, index)=>{
                       btn.classList.remove("active"); 
                       console.log(btn.classList, "btn.classlist")                      
                })
                e.target.classList.add("active");                
                //Hide other Section
                console.log(e.target.classList, "e.tartet,classlist")

                singleSection.forEach((single)=>{
                        single.classList.remove("active");
                })
                const element = document.getElementById(id);
                element.classList.add("active")
                


        }
        
})



}

pagenation();







