// change background color
const colorPalette = [
  { cardBackground: 'linear-gradient(135deg, #ffffffff, #0026fcff)', buttonColor: '#FF7F50', textColor: '#000' },
  { cardBackground: 'linear-gradient(135deg, #8C53FF, #6B3AFF)', buttonColor: '#FFF', textColor: '#FFF' },
  { cardBackground: 'linear-gradient(135deg, #0073ffff, #FFF)', buttonColor: '#8644ffff', textColor: '#000' },
  { cardBackground: 'linear-gradient(135deg, #FF8D33, #FF6B4A)', buttonColor: '#ff4800ff', textColor: '#FFF' },
  { cardBackground: 'linear-gradient(135deg, #FF6D00, #9D4EDD)', buttonColor: '#FFF', textColor: '#FFF' },
  { cardBackground: 'linear-gradient(135deg, #5A189A, #3C096C)', buttonColor: '#FFF', textColor: '#FFF' },
  { cardBackground: 'linear-gradient(135deg, #7B2CBF, #9D4EDD)', buttonColor: '#FFF', textColor: '#FFF' },
  { cardBackground: 'linear-gradient(135deg, #5A189A, #3C096C)', buttonColor: '#FFF', textColor: '#FFF' },
];

function backgroundChang() {
  const box_array = document.getElementsByClassName("corse-box");
  for (let i = 0; i < box_array.length; i++) {
    let j = i % colorPalette.length;
    box_array[i].style.backgroundImage = `${colorPalette[j].cardBackground}`;
    box_array[i].style.color = `${colorPalette[j].textColor}`;
    box_array[i].querySelector(".but").style.background = `${colorPalette[j].buttonColor}`;
  }
}

let course_contaner = document.querySelector(".course-contaner");

function makebox(title, des, icon_calss, price) {
  let box = document.createElement("div");
  box.classList.add("corse-box");

  let icon = document.createElement("i");
  icon.className = icon_calss;
  icon.style.fontSize = "50px";
  icon.style.margin = "10px";
  box.appendChild(icon);

  let caption = document.createElement("div");
  caption.classList.add("capion");

  let t = document.createElement("h3");
  t.textContent = title;
  caption.appendChild(t);

  let d = document.createElement("p");
  d.textContent = "discription : " + des;
  caption.appendChild(d);

  let p = document.createElement("p");
  p.textContent = "price : " + price;
  caption.appendChild(p);

  box.appendChild(caption);

  let but = document.createElement("button");
  but.className = "but";
  but.textContent = "See more";
  but.dataset.title_atr = title
  but.onclick=()=>{make_pop_up(title)};
  
  box.appendChild(but);


  course_contaner.appendChild(box);
}


let course_container_backup = [];


async function loadCourses() {
  let res = await fetch("../data/courses.json");
  let courses = await res.json();

  course_container_backup = courses; 

  renderCourses(courses); 
}

function renderCourses(courses) {
  course_contaner.innerHTML = ""; 
  for (let cours of courses) {
    makebox(cours.title, cours.description, cours.image, cours.price);
  }
  backgroundChang();
}

addEventListener("load", () => {
  loadCourses();
});

// search bar
let input_bar = document.querySelector("#search-input");
let serach_button = document.querySelector(".search-box label");

serach_button.addEventListener("click", () => {
  input_bar.classList.toggle("searching");
  serach_button.classList.toggle("searching-bt");
if (!input_bar.classList.contains("searching")){
    input_bar.value="";
    renderCourses(course_container_backup);

};

});


input_bar.addEventListener("input", () => {
  let searchValue = input_bar.value.toLowerCase();

  if (searchValue === "") {
    renderCourses(course_container_backup);
  } else {
    let filtered = course_container_backup.filter(course =>
      course.title.toLowerCase().includes(searchValue)
    );

    if (filtered.length > 0) {
      renderCourses(filtered);
    } else {
      course_contaner.innerHTML = '<div class="not-found">No matching results</div>';
    }
  }
});


let pop_up_container = document.querySelector(".pop-up-container");
function make_pop_up(title) {

    let course_ob = null;
    for (let course of course_container_backup) {
        if (course.title === title) {
            course_ob = course;
            break;
        }
    }

    if (!course_ob) return; 

    let icon = pop_up_container.querySelector("i");
    icon.className = course_ob.image + " icont"; 

    let popTitle = pop_up_container.querySelector(".pop-title");
    popTitle.textContent = course_ob.title;

    let section = pop_up_container.querySelector("section");
    section.textContent = course_ob.full_description;

    pop_up_container.querySelector(".sposer").textContent = "Sponsor: " + course_ob.sponsor;
    pop_up_container.querySelector(".rating").textContent = "Rating: " + course_ob.rating;
    pop_up_container.querySelector(".duration").textContent = "Duration: " + course_ob.duration;
    pop_up_container.querySelector(".level").textContent = "Level: " + course_ob.level;
    pop_up_container.querySelector(".prerequisites").textContent = "Prerequisites: " + course_ob.prerequisites;
    pop_up_container.querySelector(".price").textContent = "Price: " + course_ob.price;


    let chaptersContainer = pop_up_container.querySelector(".chapters-contaner");
    chaptersContainer.innerHTML = "";

    course_ob.chapters.forEach(chapter => {
        let chapterDiv = document.createElement("div");
        chapterDiv.classList.add("chapter");

        let p = document.createElement("p");
        p.textContent = chapter.chapter_number + ". " + chapter.chapter_title;

        let lockIcon = document.createElement("i");
        lockIcon.className = "lock-icon fa-solid fa-lock";

        chapterDiv.appendChild(p);
        chapterDiv.appendChild(lockIcon);

        chaptersContainer.appendChild(chapterDiv);
    });

    pop_up_container.style.display = "grid";
  
}

document.addEventListener("keydown",(event)=>{
    if (pop_up_container.style.display != "none"&&event.key=="Escape"){
        pop_up_container.style.display = "none";
    }
})



// nav bar
fetch('../html/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.nav-contaner').innerHTML = data;
    const mainButton = document.querySelector('.main-button');
    const items = document.querySelectorAll('.navbar ul li');

    const radius = 140;
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
  });




