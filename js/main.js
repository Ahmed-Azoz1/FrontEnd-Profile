/* =========== Show Navbar =========== */
const navbar = document.querySelector('.nav-list');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener("click",()=>{
    navbar.classList.toggle("show");
})

window.addEventListener('scroll',()=>{
    navbar.classList.remove("show");
})

/* =========== User Data =========== */

const counters = [...document.querySelectorAll('.user-data .number')];
const speed = 5000; 

const start = () =>{
    counters.forEach((counter)=>{
        const updateCount = ()=>{
            const target = +counter.getAttribute("data-target")
            , count = +counter.innerText
            ,inc = target / speed;
            if(count < target){
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount,1)
            }else{
                counter.innerText = target + "+";
            }
        }
        updateCount();
    })
}

window.addEventListener("scroll",()=>{
    if(window.pageYOffset >= 250){
        start();
    }
},{passive:true})
/* ========== Swiper =========== */
