
window.addEventListener("DOMContentLoaded", () => {

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

    })
    .catch(err => console.error("Error loading navbar:", err));

});