let crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px" 
})
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener("click", () =>{
        faq.classList.toggle("active");
    })
})
const hamburgers = document.querySelector(".hamburger");
navBar = document.querySelector(".nav-bar");
hamburgers.addEventListener("click", function() {
    hamburgers.classList.toggle("active")
    navBar.classList.toggle("active")
    navBar.querySelectorAll(".items ").forEach((item) => {
        item.addEventListener("click", function(){
            hamburgers.classList.remove("active")
            navBar.classList.remove("active")
        })
    })
})
let url = 'https://script.google.com/macros/s/AKfycbyhO8fEBV-Ascj9k3ZwZ34FCKxsuwm3BfkNK3DwEAghKVAbZFrMroHmNWPcPhJ2AJo/exec';
let form = document.querySelector('#form');
form.addEventListener("submit", (e) => {
    e.target.btn.innerHTML = "submitting";
    let f = new FormData(form);
    fetch(url, {
        method: "POST",
        body: f
    }).then((res) => res.text())
    .then((finalRes) => {
        e.target.btn.innerHTML = "submitted"
        document.getElementById("res").innerHTML = finalRes;
        form.reset();
        setTimeout(() => {  
            document.getElementById("res").innerHTML = '';
            alert("Form submitted successfully!");
        }, 5000);
    });
    e.preventDefault();
});


