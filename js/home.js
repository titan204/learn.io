
//change background color 
    const box_array = document.getElementsByClassName("corse-box");

    const colorPalette = [
            { cardBackground: 'linear-gradient(135deg, #FFF, #FFF)', buttonColor: '#FF7F50', textColor: '#000' },
            { cardBackground: 'linear-gradient(135deg, #8C53FF, #6B3AFF)', buttonColor: '#FFF', textColor: '#FFF' },
            { cardBackground: 'linear-gradient(135deg, #FFF, #FFF)', buttonColor: '#FF9944', textColor: '#000' },
            { cardBackground: 'linear-gradient(135deg, #FF8D33, #FF6B4A)', buttonColor: '#FFF', textColor: '#FFF' },
            { cardBackground: 'linear-gradient(135deg, #FF6D00, #9D4EDD)', buttonColor: '#FFF', textColor: '#FFF' },
            { cardBackground: 'linear-gradient(135deg, #5A189A, #3C096C)', buttonColor: '#FFF', textColor: '#FFF' },
            { cardBackground: 'linear-gradient(135deg, #7B2CBF, #9D4EDD)', buttonColor: '#FFF', textColor: '#FFF' },
            { cardBackground: 'linear-gradient(135deg, #5A189A, #3C096C)', buttonColor: '#FFF', textColor: '#FFF' },
        ];

    function backgroundChang (){
 
          
        for (let i = 0  ; i<box_array.length ; i++ ){
            let j = i % colorPalette.length; 
            box_array[i].style.backgroundImage =`${colorPalette[j].cardBackground}`;
            box_array[i].style.color=`${colorPalette[j].textColor}`;
            box_array[i].querySelector(".but").style.background = `${colorPalette[j].buttonColor}`
            
        }
    }


    function makebox (title, des , icon_calss  , price ){
        let box = document.createElement("div");
        box.classList.add( "corse-box");
        let icon = document.createElement("i");
        icon.className=icon_calss;
        icon.style.fontSize = "50px";   
        icon.style.margin = "10px";  
        box.appendChild(icon);
        
        let caption = document.createElement('div');
        caption.classList .add("capion");
        
        let t = document.createElement("h3");
        t.textContent="title : " + title ; 
        caption.appendChild(t);
        let d = document.createElement("p");
        d.textContent="discription : "+ des ; 
        caption.appendChild(d);
        let p = document.createElement("p");
        p.textContent="price :" + price  
        caption.appendChild(p);

        box.appendChild(caption);

        let but = document.createElement("button");
        but .className ="but"; 
        but.textContent="See more";
        box.appendChild(but);

      let course_contaner = document.querySelector(".course-contaner");
        course_contaner.appendChild(box);
    }

    async function loadCourses() {
    
        let res = await fetch("../data/courses.json");    
        let courses = await res.json();

        for (let cours of courses){
            makebox(cours.title,cours.description ,cours.image,cours.price);
        }        
        backgroundChang();
    }

    addEventListener("load",()=>{
        loadCourses();
    })





// serach bar 
{
    let input_bar= document.querySelector("#search-input");
    let serach_button = document.querySelector(".search-box label");
    serach_button.addEventListener("click", ()=>{
        input_bar.classList.toggle("searching");
        serach_button.classList.toggle("searching-bt");
        
    })

}


//nav bar 
fetch('../html/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.nav-contaner').innerHTML = data;
        {  const mainButton = document.querySelector('.main-button');
    const items = document.querySelectorAll('.navbar ul li');
    
    const radius = 140;
    
    // الزوايا للربع السفلي الأيسر: من 180 إلى 270 درجة
    const startAngle = 180;
    const endAngle = 270;
    
    mainButton.addEventListener("click", () => {
        const isShowing = items[0].classList.contains("show");
        
        items.forEach((item, index) => {
            const angle = (startAngle + (endAngle - startAngle) * index / (items.length - 1)) * (Math.PI / 180);
   
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            
            item.classList.toggle("show");
            
            if (isShowing) {
                item.style.transform = `translate(0, 0)`;
            } else {
                item.style.transform = `translate(${x}px, ${-y}px)`;
            }
        });
    });
}
  })

