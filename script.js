const themeBtn = document.querySelector("#toggle-theme-btn")


themeBtn.addEventListener("click", function(){
   
    document.body.classList.toggle('darkmode');
 
    

    const icon = document.querySelector('i');
    const links = document.querySelector("a")

    if (document.body.classList.contains('darkmode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        icon.style.color = 'white';

    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        icon.style.color = 'black';
    }
})

const unfinishedPage = document.querySelector(".unfinishedPageAlert")

document.querySelectorAll(".unfinishedPageAlert").forEach((element) => {
    element.addEventListener("click", function () {
        alert("Hey there! I'm glad you stopped by my website. This page isn't quite finished yet, but check back soon to learn more about me!");
    });
});

