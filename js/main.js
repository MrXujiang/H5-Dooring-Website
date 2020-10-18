/* -------------------------------------------------------------------
 * Template Name         : Appinocks - App Landing Page Template
 * Theme Author Name     : Yucel Yilmaz
 * Author URI            : https://themeforest.net/user/aip_theme3434
 * Created Date          : 03 November 2019
 * Version               : 1.0
------------------------------------------------------------------- */

/*------------------------------------------------------------------
[Table of contents]

1.Navbar Fixed
2.Navbar Scroll Spy
3.Counters
4.Owl Carousel
5.Magnific Popup
6.Pricing Tab
7.Copyright
8.Contact Form
9.Preloader
10.ScrollIt
------------------------------------------------------------------- */

jQuery(document).ready(function() {
    "use strict";
    
    // Call all ready functions
    appinocks_navbarFixed(),
    appinocks_navScrollSpy(),
    appinocks_counterUp(),
    appinocks_magnificPopupVideo(),
    appinocks_owl_carousel(),
    appinocks_pricingTab(),
    appinocks_copyrightDynamicYear(),
    appinocks_contactForm(),
    appinocks_preloader(),
    appinocks_scrollIt(),
    new WOW().init();
});

/*  ---------------------------------------------------
    1.Navbar Fixed
    --------------------------------------------------- */
function appinocks_navbarFixed(){
    "use-strict";

    // Variables
    var scrollTop              = jQuery(window).scrollTop(),
        navbarMenu            = jQuery(".header"),
        navbarLink            = jQuery('.navbar-nav>li>a'),
        scrollTopBtn          = jQuery('.scroll-top-btn'),
        downloadBtn           = jQuery('#downloadBtn'),
        downScroll            = jQuery('.down-scroll'),
        navbarHamburgerBtn    = jQuery('.navbar-hamburger');

    // Window On Scroll Add Class Shrink
    jQuery(window).on("scroll", function() {
        let scrollTop = jQuery(this).scrollTop();
        if (scrollTop > 80) {
            navbarMenu.addClass("header-shrink");
            scrollTopBtn.addClass('active');
        } else {
            navbarMenu.removeClass("header-shrink");
            scrollTopBtn.removeClass('active');           
        }
    });

    if (scrollTop > 100) {
        navbarMenu.addClass("header-shrink");
        scrollTopBtn.addClass('active');
    } else {
        navbarMenu.removeClass("header-shrink");
        scrollTopBtn.removeClass('active');      
    }

    navbarLink.on('click', function(){
        jQuery('.navbar-collapse').collapse('hide');
        navbarHamburgerBtn.toggleClass('active');
    }); 
}

/*  ---------------------------------------------------
    2.Navbar Scroll Spy
    --------------------------------------------------- */
function appinocks_navScrollSpy() {
    "use-strict";

    // Scroll Spy
    jQuery('body').scrollspy({
        target: '#fixedNavbar',
        offset: 95
    });
}

/*  ---------------------------------------------------
    3.Counters
    --------------------------------------------------- */
function appinocks_counterUp() {
    "use-strict";

    jQuery('.counter').counterUp({
        delay: 15,
        time: 2000
    });
}

/*  -----------------------------------------------------
    4.Owl Carousel
    ----------------------------------------------------- */ 
function appinocks_owl_carousel() {
    "use-strict";

    // Variables 
    var testimonialSlider        =  jQuery('.testimonial-slider'),
        screenshotsSlider        =  jQuery('.screenshots-slider');

    // Partners Slider
    screenshotsSlider.owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        center:true,
        stagePadding:0,
        smartSpeed:1000,
        animateOut: 'fadeOut',
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        navText: ["<span><</span>","<span>></span>"],
        responsive:{
            0:{
                items:2,
                center:false
            },
            600:{
                items:3
            },
            768:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    // Testimonial Slider
    testimonialSlider.owlCarousel({
        loop:false,
        margin:30,
        nav:false,
        dots:true,
        stagePadding:0,
        smartSpeed:1000,
        animateOut: 'fadeOut',
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
}

/*  -----------------------------------------------------
    5.Magnific Popup
    ----------------------------------------------------- */ 
function appinocks_magnificPopupVideo() {
    "use-strict";

    // Variables
    var videoPopupItem  = jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps');

    videoPopupItem.magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
    });
}

/*  -----------------------------------------------------
    6.Pricing Tab
    ----------------------------------------------------- */ 
function appinocks_pricingTab(){
    "use-scrict";

    // Variables
    var pricingTabLink       = jQuery('.price-toggle-wrap > a'),
        pricingTabContent    = jQuery('.pricing-tab-content');

    pricingTabLink.on("click",function(){
        pricingTabLink.removeClass('active');
        jQuery(this).addClass('active');
        pricingTabContent.removeClass('active');
        pricingTabContent.eq(jQuery(this).index()).addClass("active animated fadeInUp");
    });
}

/*  -----------------------------------------------------
    7.Copyright
    ----------------------------------------------------- */ 
function appinocks_copyrightDynamicYear() {
    "use-strict";

    // Variables
    var fullYearCopyright       = jQuery('#fullYearCopyright'),
        getFullYearDate         = new Date().getFullYear();

    fullYearCopyright.text(getFullYearDate);
}   

/*  -----------------------------------------------------
    8.Contact Form
    ----------------------------------------------------- */ 
function appinocks_contactForm() {
    "use-strict";

    jQuery("#contactBtn").on("click",function(event) {
        event.preventDefault();

        // E-Mail Validation Function 
        function validateEmail(email) {
            var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regexp.test(String(email).toLowerCase());
        }

        // Contact Form Input Value 
        var name            = jQuery("#contactName").val().trim(),
            email           = jQuery("#contactEmail").val().trim(),
            subject         = jQuery("#contactSubject").val().trim(),
            message         = jQuery("#contactMessage").val().trim(),
            validateEmail   = validateEmail(email);

        // Check empty fields
        if(name===''||email===''||message===''||subject===''){
            jQuery('div.empty-form').slideDown(500).delay(2000).slideUp(500);
        }else if (!validateEmail===true) {
            jQuery('div.email-invalid').slideDown(500).delay(2000).slideUp(500);
        }else {
            // Once the information entered is verified, the mail form is sent. 
            jQuery.post("send_mail.php",
                {
                    contact_name:name,
                    contact_email:email,
                    contact_subject:subject,
                    contact_message:message
                },
                function(response) {
                    jQuery("#contactForm")[0].reset();   
                    jQuery(".success-form").html(response).slideDown(500).delay(5000).slideUp(500);  
                }
            );
        }
    });
}    

/*  -----------------------------------------------------
    9.Preloader
    ----------------------------------------------------- */ 
function appinocks_preloader() {
    "use-strict";

    // Variables
    var preloaderWrap           = jQuery('.preloader-wrap'),
        loaderInner             = jQuery('.preloader-wrap .preloader-inner');

    jQuery(window).load('body', function(){
        loaderInner.fadeOut(); 
        preloaderWrap.delay(350).fadeOut('slow'); 
    });
}   

/*  -----------------------------------------------------
    10.ScrollIt
    ----------------------------------------------------- */ 
function appinocks_scrollIt() {
    "use-strict";
     
    jQuery.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: "swing",
        scrollTime: 600,
        activeClass: "active",
        onPageChange: null,
        topOffset: -15
    });
}

/*  -----------------------------------------------------
    11.ScrollUp
    ----------------------------------------------------- */ 
function appinocks_scrollUp(){
    "use-strict";

    jQuery('.scroll-top-btn').on("click",function(event){

        event.preventDefault();

        jQuery('html, body').animate({
            scrollTop: jQuery(jQuery.attr(this, 'href')).offset().top
        }, 500);

    });
}

appinocks_scrollUp();