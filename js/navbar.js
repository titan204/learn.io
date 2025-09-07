window.addEventListener("DOMContentLoaded", () => {
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