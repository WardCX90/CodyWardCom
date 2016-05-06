// STICKY NAV ON SCROLL 
    var nav = $(".navbar");
        navs = "navbar-on-scroll";

    $(window).scroll(function() {
        if( $(this).scrollTop() >= 100 ) {
            nav.addClass(navs);
        } else {
            nav.removeClass(navs);
        }
    });

// HAMBURGER ICON DROPDOWN
    $('#hamburger').on('click', function () {
        $('.menu').toggleClass('open');
    });

    $('.menu open ul li a').on('click', function () {
        $('.menu').removeClass('open');
    });  

// CONVERT HAMBURGER ICON TO 'X'
    $(document).ready(function(){
        $('#hamburger').click(function(){
            $(this).toggleClass('xIcon');
        });
    });

// CLOSE DROPDOWN AND CONVERTS 'X' BACK TO HAMBURGER WHEN MENU LINK CLICKED
    $(document).ready(function(){
        $(".menu ul li a").click(function(){
            $(".menu").removeClass("open");
            $("#hamburger").removeClass("xIcon");
        });
    });

