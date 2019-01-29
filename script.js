let smallBox = document.getElementsByClassName('small');
let largeBox = document.getElementsByClassName('large');
const box1 = document.getElementById ('box1');
const box2 = document.getElementById ('box2');


box1.onclick = function() { 
    largeBox[0].className = 'small';
    box1.className = 'large';
};

box2.onclick = function() { 
    largeBox[0].className = 'small';
    box2.className = 'large';
};

box3.onclick = function() { 
    largeBox[0].className = 'small';
    box3.className = 'large';
};

box4.onclick = function() { 
    largeBox[0].className = 'small';
    box4.className = 'large';
};
