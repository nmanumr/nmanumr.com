import './header.css';
import '../../vendors/scrollspy.js';

const header = document.getElementById('header');


function setHeaderScroll() {
    var top = window.scrollY;

    header.setAttribute('data-scrolled', top > 5 ? 'scrolled' : '');
}


(function(){
    setHeaderScroll();
    window.addEventListener('scroll', setHeaderScroll);

    var menu = document.querySelector('.nav-links');
    scrollSpy(menu);
})()