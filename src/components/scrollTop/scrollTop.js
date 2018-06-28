import './style.css';

(function () {
    var el = document.createElement('a');
    // el.href = '#';
    el.className = 'scroll-top';
    el.innerHTML = `<span class="zmdi zmdi-chevron-up"></span>`;
    document.querySelector("body").appendChild(el);


    el.onclick = () => scrollToY();


    window.addEventListener('scroll', function (e) {
        var top = window.scrollY;
        el.setAttribute('data-scrolled', top > 5 ? 'scrolled' : '');
    });
})()