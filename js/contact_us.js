const aaryas = document.getElementsByClassName('flow-icon');

for (let i = 0; i < aaryas.length; i++) {
    // نضيف لكل عنصر خواص لتخزين الحركة الحالية
    aaryas[i].currentX = 0;
    aaryas[i].currentY = 0;
}

function moveAarya(aarya) {
    // حركة خفيفة ±5px
    const deltaX = (Math.random() - 0.5) * 30; 
    const deltaY = (Math.random() - 0.5) * 30;

    // نضيف الحركة على الإزاحة الحالية
    aarya.currentX += deltaX;
    aarya.currentY += deltaY;

    // نطبق translate
    aarya.style.transform = `translate(${aarya.currentX}px, ${aarya.currentY}px)`;
}

// تحديث كل 200 مللي ثانية
setInterval(() => {
    for (let i = 0; i < aaryas.length; i++) {
        moveAarya(aaryas[i]);
    }
}, 200);
