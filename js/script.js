let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});


new TypeIt("#simpleUsage", {
    speed: 150,
    waitUntilVisible: true,
    loop: true,
  }).go();


  new TypeIt("#nama", {
    strings: "type your name here",
    speed: 150,
    waitUntilVisible: true,
    loop: true,
  }).go();
  new TypeIt("#emailForm", {
    strings: "example@gmail.com",
    speed: 150,
    waitUntilVisible: true,
    loop: true,
  }).go();
  new TypeIt("#text", {
    strings: "type your text here",
    speed: 150,
    waitUntilVisible: true,
    loop: true,
  }).go();