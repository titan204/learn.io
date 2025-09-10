const headers = document.querySelectorAll("section h2");
const lins = document.querySelectorAll("hr");
const parag = document.querySelectorAll("p");

function popside(element){
    element.style.transform = "translateX(0px)";
    element.style.opacity = 1;
}

function popup(element){
    element.style.transform = "translateY(0px)";
    element.style.opacity = 1;
}

function extendline(line){
    line.style.width = "90%";
}

window.addEventListener("scroll", () => {
    for (const header of headers){
        const pos = header.getBoundingClientRect();

        if(pos.top < window.innerHeight && pos.bottom > 0){
            popside(header);
        }
    }

    for (const hr of lins){
        const pos = hr.getBoundingClientRect();
        if(pos.top < window.innerHeight && pos.bottom > 0){
            extendline(hr);
        }
    }

    for (const p of parag){
        const pos = p.getBoundingClientRect();
        if(pos.top < window.innerHeight && pos.bottom > 0){
            popup(p);
        }
    }
});

window.addEventListener("load", () => {
    for (const header of headers){
        const pos = header.getBoundingClientRect();

        if(pos.top < window.innerHeight && pos.bottom > 0){
            popside(header);
        }
    }

    for (const hr of lins){
        const pos = hr.getBoundingClientRect();
        if(pos.top < window.innerHeight && pos.bottom > 0){
            extendline(hr);
        }
    }

    for (const p of parag){
        const pos = p.getBoundingClientRect();
        if(pos.top < window.innerHeight && pos.bottom > 0){
            popup(p);
        }
    }
});
