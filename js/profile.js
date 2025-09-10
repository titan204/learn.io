

let photo = document.querySelector(".photo-container");
let contaner = document.querySelector(".data-container");
document.addEventListener("load",()=>{

})

window.addEventListener("load", () => {
    fetch("../data/user_data.json")
        .then(res => res.json())
        .then(user_data => {
            let inputs = document.querySelectorAll("form input");
            
            inputs.forEach(input => {
                let name = input.name; 
                if (user_data[name]) {
                    input.value = user_data[name]; 
                }
            
            
            
            });
            
            let select = document.querySelectorAll("select");
            select [0].value = user_data.gender ; 
            select [1].value = user_data.education ; 
            let photo = document.querySelector("img");
            if (user_data.photo ==""){
                photo.src="https://www.svgrepo.com/show/448095/person-circle.svg"
            }else{
                photo.src=user_data.photo

            }
        })
        .catch(err => console.error("Error loading user data:", err));
});



// animation 
const img = document.querySelector(".photo-container");
const container = document.querySelector(".main-container");

function popup(element ,mode){
    if(mode == 1 )element.style.transform = "translateY(0px) scale(1)";
    else{
        element.style.transform = "translateY(0px) ";
    }
    element.style.opacity = 1 ;
    
}

window.addEventListener("load" ,()=>{
    popup(img,1);
    setTimeout(()=>{
        popup (container,2);
    },1000)
})