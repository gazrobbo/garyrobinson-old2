let smallBox = document.getElementsByClassName('small');
let medBox = document.getElementsByClassName('medium-box');
let largeBox = document.getElementsByClassName('large');
let shownBox = document.getElementsByClassName('medium-show');
let shownBoxLarge = document.getElementsByClassName('large-show');
let mainColor = document.documentElement;


box1.onclick = function () {
    // largeBox[0].className = 'small';
    // this.className = 'large';
    mainColor.style.setProperty('--main-colour', '#23538a');
    mainColor.style.setProperty('--light-colour', '#a7cfdf');
    shownBox[0].classList.remove("medium-show");
    shownBoxLarge[0].classList.remove("large-show");
    medium1.className = 'medium-box medium-show';
    largebox1.className = 'large large-show';
};

box2.onclick = function () {
    // largeBox[0].className = 'small';
    // this.className = 'large';
    mainColor.style.setProperty('--main-colour', ' #248c35');
    mainColor.style.setProperty('--light-colour', '#a6dda8');
    shownBox[0].classList.remove("medium-show");
    shownBoxLarge[0].classList.remove("large-show");
    medium2.className = 'medium-box medium-show';
    largebox2.className = 'large large-show';
};

box3.onclick = function () {
    // largeBox[0].className = 'small';
    // this.className = 'large';
    mainColor.style.setProperty('--main-colour', ' #7c2796');
    mainColor.style.setProperty('--light-colour', '#a4acd8');
    shownBox[0].classList.remove("medium-show");
    shownBoxLarge[0].classList.remove("large-show");
    medium3.className = 'medium-box medium-show';
    largebox3.className = 'large large-show';
};

box4.onclick = function () {
    // largeBox[0].className = 'small';
    // this.className = 'large';
    mainColor.style.setProperty('--main-colour', '#23858a');
    mainColor.style.setProperty('--light-colour', '#a7dfd9');
    shownBox[0].classList.remove("medium-show");
    shownBoxLarge[0].classList.remove("large-show");
    medium4.className = 'medium-box medium-show';
    largebox4.className = 'large large-show';
};