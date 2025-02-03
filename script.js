const themeBtn = document.querySelector("#toggle-theme-btn");
const icon = document.querySelector("i");
const dialogs = document.querySelector("dialog");
const unfinishedPageAlerts = document.querySelectorAll(".unfinishedPageAlert");
const rightNowShow = document.querySelector("#rightNowShow-btn");
const rightNowClose = document.querySelector("#rightNowClose-btn");
const rightNowDialog = document.querySelector("#rightNow-dialog");
const toTopBtn = document.querySelector("#toTopBtn")

// Function to apply dark mode
function applyDarkMode(isDarkMode) {
    document.body.classList.toggle('darkmode', isDarkMode);
    icon.classList.toggle('fa-sun', isDarkMode);
    icon.classList.toggle('fa-moon', !isDarkMode);
    icon.style.color = isDarkMode ? 'white' : 'black';
    toTopBtn.style.backgroundColor= isDarkMode ? 'white' : '#333';
    toTopBtn.style.color= isDarkMode ? 'black' : 'white';
    
    // No Dialog element on the Photography-page so need to check that with an if-statement
    if(dialogs){
        dialogs.classList.toggle('darkmode', isDarkMode);
    }
    

}

// Check and apply saved theme preference
const savedTheme = localStorage.getItem('darkmode') === 'true';
applyDarkMode(savedTheme);

// Toggle dark mode and save preference
themeBtn.addEventListener("click", () => {
    const isDarkMode = !document.body.classList.contains('darkmode');
    applyDarkMode(isDarkMode);
    localStorage.setItem('darkmode', isDarkMode);
});


// Dialog show/hide functionality
rightNowShow?.addEventListener("click", () => rightNowDialog?.showModal());

rightNowClose?.addEventListener("click", (event) => {
    event.preventDefault();
    rightNowDialog?.close();
});

document.addEventListener("DOMContentLoaded", function(){
    
    
    window.addEventListener("scroll", function(){
        if(this.window.scrollY > 100){
            toTopBtn.style.display = "block";
        } else{
            toTopBtn.style.display = "none"
        }
    });

    toTopBtn.addEventListener("click", function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
})

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    
    document.getElementById("clock").textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 60000); // Update every minute
updateClock(); // Run immediately


