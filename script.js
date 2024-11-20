const nxtBtn = document.getElementById('nxt-btn');
const prevBtn = document.getElementById('prev-btn');
const slide = document.querySelector('.wrapper');

const items = document.querySelectorAll('.item');
let index = 0;

const itemWidth = items[0].clientWidth + parseInt(getComputedStyle(items[0]).marginRight);

const moveToNextSlide = () => {
    if (index >= items.length - 1) return;
    index++;
    slide.style.transform = `translateX(${-itemWidth * index}px)`;
};

const moveToPreviousSlide = () => {
    if (index <= 0) return;
    index--;
    slide.style.transform = `translateX(${-itemWidth * index}px)`;
};

nxtBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('header nav a'); 

window.onscroll = () =>
{
    sections.forEach(sec =>
    {
        let top = window.scrollY;
        let offset = sex.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)
        {
            navLinks.forEach(links => 
            {
                links.classList(links =>
                {
                    links.classList.remove('active');
                    document.querySelector('header nav a [href*=' +id + ' ]').classList.add('active')
                })
            })
        }
    })
}
menuIcon.onclick = () =>
{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
