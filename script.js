let smallBox = document.getElementsByClassName('small');
let medBox = document.getElementsByClassName('medium-box');
let largeBox = document.getElementsByClassName('large');
let shownBox = document.getElementsByClassName('medium-show');
let mainColor = document.documentElement;


box1.onclick = function () {
    largeBox[0].className = 'small';
    this.className = 'large';
    mainColor.style.setProperty('--main-colour', '#23538a');
    mainColor.style.setProperty('--light-colour', '#a7cfdf');
    shownBox[0].classList.remove("medium-show");
    medium1.className = 'medium-box medium-show';
};

box2.onclick = function () {
    largeBox[0].className = 'small';
    this.className = 'large';
    mainColor.style.setProperty('--main-colour', ' #248c35');
    mainColor.style.setProperty('--light-colour', '#a6dda8');
    shownBox[0].classList.remove("medium-show");
    medium2.className = 'medium-box medium-show';
};

box3.onclick = function () {
    largeBox[0].className = 'small';
    this.className = 'large';
    mainColor.style.setProperty('--main-colour', ' #7c2796');
    mainColor.style.setProperty('--light-colour', '#a4acd8');
    shownBox[0].classList.remove("medium-show");
    medium3.className = 'medium-box medium-show';
};

box4.onclick = function () {
    largeBox[0].className = 'small';
    this.className = 'large';
    mainColor.style.setProperty('--main-colour', '#23538a');
    mainColor.style.setProperty('--light-colour', '#a7cfdf');
    shownBox[0].classList.remove("medium-show");
    medium4.className = 'medium-box medium-show';

};