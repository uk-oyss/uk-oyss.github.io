jQuery( document ).ready(function() {

    $(window).scroll(function(){
    $('.topnav').toggleClass('scrollednav py-0', $(this).scrollTop() > 50);
    });
    
});

document.addEventListener('DOMContentLoaded', function() {
    // Bootstrap 的下拉菜单在悬停时打开
    var dropdowns = document.querySelectorAll('.nav-item.dropdown');
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('mouseenter', function() {
            var dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdown.classList.add('show');
                dropdownMenu.classList.add('show');
            }
        });
        dropdown.addEventListener('mouseleave', function() {
            var dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdown.classList.remove('show');
                dropdownMenu.classList.remove('show');
            }
        });
    });
});

