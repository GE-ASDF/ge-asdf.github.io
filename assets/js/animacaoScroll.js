const activeClass = 'ativo';
function initAnimaScroll(){

const sections = document.querySelectorAll(".js-scroll")
if(sections.length){
const windowMetade = window.innerHeight * 0.6;
function animaScroll(event){
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if(isSectionVisible){
            section.classList.add(activeClass)
        }
    })
}
}
animaScroll();
window.addEventListener("scroll", animaScroll);
}

initAnimaScroll()