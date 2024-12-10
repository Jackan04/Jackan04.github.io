const themeBtn = document.querySelector("#toggle-theme-btn");
const icon = document.querySelector("i");
const dialogs = document.querySelector("dialog");

// Function to apply the dark mode
function applyDarkMode(isDarkMode) {
    if (isDarkMode) {
        document.body.classList.add('darkmode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        icon.style.color = 'white';
        // dialogs.style.backgroundColor = 'black';
    } else {
        document.body.classList.remove('darkmode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        icon.style.color = 'black';
        dialogs.style.backgroundColor = '';
    }
}

// Check localStorage for dark mode preference
const savedTheme = localStorage.getItem('darkmode') === 'true';
applyDarkMode(savedTheme);

// Toggle dark mode and save preference
themeBtn.addEventListener("click", function () {
    const isDarkMode = !document.body.classList.contains('darkmode');
    applyDarkMode(isDarkMode);
    localStorage.setItem('darkmode', isDarkMode);
});

// Unfinished page alert
document.querySelectorAll(".unfinishedPageAlert").forEach((element) => {
    element.addEventListener("click", function () {
        alert("Hey there! I'm glad you stopped by my website. This page isn't quite finished yet, but check back soon to learn more about me!");
    });
});

// Dialog show/hide
const rightNowShow = document.querySelector("#rightNowShow-btn");
const rightNowClose = document.querySelector("#rightNowClose-btn");
const rightNowDialog = document.querySelector("#rightNow-dialog");

rightNowShow.addEventListener("click", function () {
    rightNowDialog.showModal();
});

rightNowClose.addEventListener("click", function () {
    rightNowDialog.close();
});
