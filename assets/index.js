let box = document.getElementById("box");

let box__info = box.getBoundingClientRect();

let window__ht = window.innerHeight;
let window__wt = window.innerWidth;

let box__ht = box__info.height;
let box__wt = box__info.width;

let max__ht = window__ht - box__ht;
let max__wt = window__wt - box__wt;

box.addEventListener('mouseover', () => {
    let top = Math.floor(Math.random() * (max__ht + 1));
    let left = Math.floor(Math.random() * (max__wt + 1));

    box.style.top = top + 'px';
    box.style.left = left + 'px';
})