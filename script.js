const themeBtn = document.querySelector("#toggle-theme-btn")

themeBtn.addEventListener("click", function(){
   
    document.body.classList.toggle('darkmode');

    const icon = document.querySelector('i');

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
