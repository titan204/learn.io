{
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
        p.textContent="price :" + price + "$"  
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



}