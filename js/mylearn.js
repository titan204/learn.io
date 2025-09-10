let input_bar = document.querySelector("#search-input");
let serach_button = document.querySelector(".search-box label");

let courserBackUp;

serach_button.addEventListener("click", () => {
  input_bar.classList.toggle("searching");
  serach_button.classList.toggle("searching-bt");

  if (!input_bar.classList.contains("searching")) {
    input_bar.value = "";
    makeCourse(courserBackUp.courses); 
  }
});

input_bar.addEventListener("input", () => {
  const query = input_bar.value.toLowerCase(); 
  const filtered = courserBackUp.courses.filter(course => {
    return course.title.toLowerCase().includes(query) || 
           course.instructor.toLowerCase().includes(query);
  });
  makeCourse(filtered);
});

async function getCourse() {
  try {
    const j = await fetch("../data/course_user_data.json");
    const data = await j.json();
    courserBackUp = data;

    makeCourse(data.courses);
  } catch (err) {
    console.error("Fetch error:", err);
  }
}

function calculateProgress(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const today = new Date();

  const totalTime = endDate - startDate; 
  const passedTime = today - startDate; 

  let progress = (passedTime / totalTime) * 100;

  if (progress < 0) progress = 0;
  if (progress > 100) progress = 100;

  return Math.floor(progress);
}

function per_color(progress) {
  if (progress >= 0 && progress <= 40) return "red";
  if (progress > 40 && progress <= 70) return "orange";
  if (progress > 70 && progress <= 100) return "green";
  return "gray";
}

function per_color_data(progress) {
  if (progress >= 0 && progress <= 40) return "green";
  if (progress > 40 && progress <= 70) return "orange";
  if (progress > 70 && progress <= 100) return "red";
  return "gray";
}

function makeCourse(courses) {
  const container = document.querySelector(".main-container");
  container.innerHTML = "";

  courses.forEach(course => {
    const card = `
      <div class="course">
        <div class="icon-container"><i class="${course.image}"></i></div>
        <div class="course-name-box">
            <p class="course-name">${course.title}</p>
        </div>
        <div class="box">
            <div class="setting-icon-container"><i class="setting-icon fa-solid fa-gear"></i></div>
            <button class="resume-button">Resume</button>
        </div>
        <div class="lower-box">
            <div class="date-bar-box">
                <p class="expiration">Expiration date : <span class="end-data">${course.estimated_completion_date}</span></p>
                <div class="expiration-box" style="--progress:${calculateProgress(course.start_date,course.estimated_completion_date)}%; --color:${per_color_data(calculateProgress(course.start_date,course.estimated_completion_date))}"></div>
            </div>
            <div class="progress-box">
                <p>progress :<span class="persantig">${course.progress}%</span></p>
                <div class="progress-bar" style="--progress:${course.progress}%; --color:${per_color(course.progress)}"></div>
            </div>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

getCourse();
