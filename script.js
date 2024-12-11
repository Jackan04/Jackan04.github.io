const themeBtn = document.querySelector("#toggle-theme-btn");
const icon = document.querySelector("i");
const dialogs = document.querySelector("dialog");
const unfinishedPageAlerts = document.querySelectorAll(".unfinishedPageAlert");
const rightNowShow = document.querySelector("#rightNowShow-btn");
const rightNowClose = document.querySelector("#rightNowClose-btn");
const rightNowDialog = document.querySelector("#rightNow-dialog");

// Function to apply dark mode
function applyDarkMode(isDarkMode) {
    document.body.classList.toggle('darkmode', isDarkMode);
    icon.classList.toggle('fa-sun', isDarkMode);
    icon.classList.toggle('fa-moon', !isDarkMode);
    icon.style.color = isDarkMode ? 'white' : 'black';
    
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

// Add event listener for unfinished page alerts
unfinishedPageAlerts.forEach((element) => {
    element.addEventListener("click", () => {
        alert("Hey there! I'm glad you stopped by my website. This page isn't quite finished yet, but check back soon to learn more about me!");
    });
});

// Dialog show/hide functionality
rightNowShow?.addEventListener("click", () => rightNowDialog?.showModal());

rightNowClose?.addEventListener("click", (event) => {
    event.preventDefault();
    rightNowDialog?.close();
});
