const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSelection = document.querySelector('.quiz-section');

startBtn.onclick = () => {
    // Once clicked 'active' will display on class name .exit-btn
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = () => {
    // Once clicked 'active' will display on class name .continue-btn
    quizSelection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}