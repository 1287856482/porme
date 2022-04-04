window.addEventListener('load', function() {
    var cloud = document.querySelector('.cloud');
    var c_nav = document.querySelector('.c-nav');
    var lis = c_nav.querySelectorAll('li');
    var current = 0;
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('mouseenter', function() {
            animate(cloud, this.offsetLeft);
        });
        lis[i].addEventListener('mouseleave', function() {
            animate(cloud, current);
        });
        lis[i].addEventListener('click', function() {
            current = this.offsetLeft;
        });
    }
});