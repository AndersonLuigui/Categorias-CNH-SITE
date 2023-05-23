let buttonA = document.getElementById("button-a");
buttonA.addEventListener('click', function(e) {
    document.getElementById("img-camp").src =("/img/cat-a.png");
    document.querySelector("#button-a").style.background = 'aqua';
    document.querySelector("#button-b").style.background = '';
    document.querySelector("#button-c").style.background = '';
    document.querySelector("#button-d").style.background = '';
    document.querySelector("#button-e").style.background = '';
    document.querySelector("#button-acc").style.background = '';

});

 
let buttonB = document.getElementById("button-b");
buttonB.addEventListener('click',function(e) {
    document.getElementById("img-camp").src =("/img/cat-b.png");
    document.querySelector("#button-a").style.background = '';
    document.querySelector("#button-b").style.background = 'aqua';
    document.querySelector("#button-c").style.background = '';
    document.querySelector("#button-d").style.background = '';
    document.querySelector("#button-e").style.background = '';
    document.querySelector("#button-acc").style.background = '';

});


let buttonC = document.getElementById("button-c");
buttonC.addEventListener('click',function(e) {
    document.getElementById("img-camp").src =("/img/cat-c.png");
    document.querySelector("#button-a").style.background = '';
    document.querySelector("#button-b").style.background = '';
    document.querySelector("#button-c").style.background = 'aqua';
    document.querySelector("#button-d").style.background = '';
    document.querySelector("#button-e").style.background = '';
    document.querySelector("#button-acc").style.background = '';
});


let buttonD = document.getElementById("button-d");
buttonD.addEventListener('click',function(e) {
    document.getElementById("img-camp").src =("/img/cat-d.png");
    document.querySelector("#button-a").style.background = '';
    document.querySelector("#button-b").style.background = '';
    document.querySelector("#button-c").style.background = '';
    document.querySelector("#button-d").style.background = 'aqua';
    document.querySelector("#button-e").style.background = '';
    document.querySelector("#button-acc").style.background = '';
});


let buttonE = document.getElementById("button-e");
buttonE.addEventListener('click',function(e) {
    document.getElementById("img-camp").src =("/img/cat-e.png");
    document.querySelector("#button-a").style.background = '';
    document.querySelector("#button-b").style.background = '';
    document.querySelector("#button-c").style.background = '';
    document.querySelector("#button-d").style.background = '';
    document.querySelector("#button-e").style.background = 'aqua';
    document.querySelector("#button-acc").style.background = '';
});


let buttonACC = document.getElementById("button-acc");
buttonACC.addEventListener('click',function(e) {
    document.getElementById("img-camp").src =("/img/cat-acc.png");
    document.querySelector("#button-a").style.background = '';
    document.querySelector("#button-b").style.background = '';
    document.querySelector("#button-c").style.background = '';
    document.querySelector("#button-d").style.background = '';
    document.querySelector("#button-e").style.background = '';
    document.querySelector("#button-acc").style.background = 'aqua';
});