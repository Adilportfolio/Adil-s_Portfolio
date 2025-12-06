// Animated typing effect
new Typed(".multiple-text", {
    strings: ["Graphics Designer","VFX Artist","CGI Creator","Video Editor"],
    typeSpeed: 90,
    backSpeed: 50,
    backDelay: 1000,
    loop:true
});

// Skills animation
const bars=document.querySelectorAll(".skill-bar-fill");
const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.width=entry.target.dataset.percentage+"%";
        }
    });
},{threshold:.4});
bars.forEach(bar=>observer.observe(bar));

// Hamburger menu toggle
const hamburger=document.querySelector('.hamburger');
const navbar=document.querySelector('.navbar');
hamburger.addEventListener('click', ()=>{
    navbar.classList.toggle('show');
});