import './style.sass'

function fun1() {
    let rng=document.querySelector('.verificar__range'); 
    let p= document.querySelector(".verificar__count"); 
    p.innerHTML=rng.value;
}
let verificar__range = document.querySelector('.verificar__range'); 
verificar__range.addEventListener("input", () => {
    fun1()
})

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};