let smallBox = document.getElementsByClassName('small');
let largeBox = document.getElementsByClassName('large');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
let mainColor = document.documentElement;



box1.onclick = function () {
    largeBox[0].className = 'small';
    box1.className = 'large';
    mainColor.style.setProperty('--main-colour', '#23538a');
    mainColor.style.setProperty('--light-colour', '#a7cfdf');
};

box2.onclick = function () {
    largeBox[0].className = 'small';
    box2.className = 'large';
    mainColor.style.setProperty('--main-colour', ' #248c35');
    mainColor.style.setProperty('--light-colour', '#a6dda8');
};

box3.onclick = function () {
    largeBox[0].className = 'small';
    box3.className = 'large';
    mainColor.style.setProperty('--main-colour', ' #7c2796');
    mainColor.style.setProperty('--light-colour', '#a4acd8');
};

box4.onclick = function () {
    largeBox[0].className = 'small';
    box4.className = 'large';
    mainColor.style.setProperty('--main-colour', '#23538a');
    mainColor.style.setProperty('--light-colour', '#a7cfdf');
};