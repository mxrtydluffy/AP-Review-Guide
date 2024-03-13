const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');

startBtn.onclick = () => {
    // Once clicked 'active' will display on class name .start-btn
    popupInfo.classList.add('active')
}

exitBtn.onclick = () => {
    // Once clicked 'active' will display on class name .start-btn
    popupInfo.classList.remove('active')
}