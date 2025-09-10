
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
