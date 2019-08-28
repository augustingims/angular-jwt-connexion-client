jQuery(document).ready( function() {
    "use strict";



/******************************************
     jQuery MeanMenu
******************************************/

 /* Mobile Menu */

        jQuery("#jtv-mobile-menu").mobileMenu({
            MenuWidth: 250,
            SlideSpeed: 300,
            WindowsMaxWidth: 767,
            PagePush: !0,
            FromLeft: !0,
            Overlay: !0,
            CollapseMenu: !0,
            ClassName: "jtv-mobile-menu"
        });

/******************************************
     main slider
******************************************/
    jQuery('#mainSlider').nivoSlider({
        directionNav: true,
        animSpeed: 500,
        slices: 18,
        pauseTime: 5000,
        pauseOnHover: false,
        controlNav: false,
        prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
        nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
    });

/******************************************
     wow js active
******************************************/
    new WOW().init();


/******************************************
       Best selling slider
******************************************/

    jQuery("#best-selling-slider .slider-items").owlCarousel({
            items: 2,
            itemsDesktop: [1024, 2],
            itemsDesktopSmall: [990, 3],
            itemsTablet: [640, 2],
            itemsMobile: [400, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: false
        }),

/******************************************
        	Featured products slider
******************************************/

        jQuery("#featured-products-slider .slider-items").owlCarousel({
            items: 2,
            itemsDesktop: [1024, 2],
            itemsDesktopSmall: [990, 3],
            itemsTablet: [640, 2],
            itemsMobile: [400, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: false
        }),

/******************************************
           Best sale  slider
******************************************/
        jQuery("#best-sale-slider .slider-items").owlCarousel({
            items: 1,
            itemsDesktop: [1024, 1],
            itemsDesktopSmall: [768, 3],
            itemsTablet: [640, 1],
            itemsMobile: [360, 1],
            navigation: !0,
            navigationText: false,
            slideSpeed: 500,
            pagination: false,
            autoPlay: true,
            singleItem: true,
            transitionStyle: "backSlide"
        }),



/******************************************
           Add  slider
******************************************/
        jQuery("#add-slider .slider-items").owlCarousel({
            items: 1,
            itemsDesktop: [1024, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [640, 1],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: false,
            slideSpeed: 500,
            pagination: false,
            autoPlay: true,
            singleItem: true,
            transitionStyle: "goDown"
        }),
/******************************************
           Offer slider
******************************************/
        jQuery("#offer-slider .slider-items").owlCarousel({
            items: 1,
            itemsDesktop: [1024, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [640, 1],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: false,
            autoPlay: true,
            singleItem: true,
            transitionStyle: "goDown"
        }),

/******************************************
           Pro1 slider
******************************************/
        jQuery("#pro1-slider .slider-items").owlCarousel({
            items: 1,
            itemsDesktop: [1024, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [640, 1],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: false,
            slideSpeed: 500,
            pagination: false,
            autoPlay: true,
            singleItem: true,
            transitionStyle: "goDown"
        }),

/******************************************
           Pro2 slider
******************************************/
        jQuery("#pro2-slider .slider-items").owlCarousel({
            items: 1,
            itemsDesktop: [1024, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [640, 1],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: false,
            slideSpeed: 500,
            pagination: false,
            autoPlay: true,
            singleItem: true,
            transitionStyle: "goDown"
        }),

/******************************************
           Pro3 slider
******************************************/
        jQuery("#pro3-slider .slider-items").owlCarousel({
            items: 1,
            itemsDesktop: [1024, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [640, 1],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: false,
            slideSpeed: 500,
            pagination: false,
            autoPlay: true,
            singleItem: true,
            transitionStyle: "goDown"
        }),

/******************************************
        	testimonials slider
******************************************/

        jQuery("#testimonials-slider .slider-items").owlCarousel({
            items: 1,
            itemsDesktop: [1024, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [640, 1],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: false,
            slideSpeed: 500,
            pagination: false,
            autoPlay: true,
            singleItem: true,
            transitionStyle: "backSlide"
        }),

/******************************************
        	category description slider
******************************************/

        jQuery("#category-slider .slider-items").owlCarousel({
            items: 1,
            itemsDesktop: [1024, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [640, 1],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: false,
            slideSpeed: 500,
            pagination: false,
            autoPlay: true,
            singleItem: true,
            transitionStyle: "fade"
        }),
/******************************************
        	thumbnail slider slider
******************************************/

        jQuery("#thumbnail-slider .slider-items").owlCarousel({
            items: 4,
            itemsDesktop: [1250, 3],
            itemsDesktopSmall: [980, 3],
            itemsTablet: [640, 3],
            itemsMobile: [360, 2],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: false
        }),

/******************************************
        	thumbnail slider slider1
******************************************/

        jQuery("#thumbnail-slider1 .slider-items").owlCarousel({
            items: 3,
            itemsDesktop: [1250, 3],
            itemsDesktopSmall: [980, 3],
            itemsTablet: [640, 3],
            itemsMobile: [360, 2],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: false
        }),

/******************************************
        	previews products slider
******************************************/

        jQuery("#previews-list-slider .slider-items").owlCarousel({
            items: 1,
            itemsDesktop: [1024, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [640, 1],
            itemsMobile: [480, 1],
            navigation: !0,
            navigationText: false,
            slideSpeed: 500,
            pagination: !1,
            autoPlay: true
        }),



/******************************************
        	Our clients slider
******************************************/

        jQuery("#our-clients-slider .slider-items").owlCarousel({
            items: 4,
            itemsDesktop: [1024, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            itemsMobile: [360, 1],
            navigation: false,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: false,
            autoPlay: true
        }),

/******************************************
        	Latest news slider
******************************************/

        jQuery("#latest-news-slider .slider-items").owlCarousel({
            autoplay: !0,
            items: 3,
            itemsDesktop: [1024, 3],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [640, 2],
            itemsMobile: [360, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1
        }),



/******************************************
           Upsell product slider
******************************************/

        jQuery("#upsell-product-slider .slider-items").owlCarousel({
            items: 4,
            itemsDesktop: [1024, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: false
        }),

/******************************************
        	Related product slider
******************************************/

        jQuery("#related-product-slider .slider-items").owlCarousel({
            items: 4,
            itemsDesktop: [1024, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: true
        }),

/******************************************
        	Related posts
******************************************/

        jQuery("#related-posts .slider-items").owlCarousel({
            items: 3,
            itemsDesktop: [1024, 3],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: true
        }),

/******************************************
        	subDropdown
******************************************/

        jQuery(".subDropdown")[0] && jQuery(".subDropdown").on("click", function() {
            jQuery(this).toggleClass("plus"), jQuery(this).toggleClass("minus"), jQuery(this).parent().find("ul").slideToggle()
        })


/******************************************
        PRICE FILTER
******************************************/

    jQuery('.slider-range-price').each(function() {
        var min = jQuery(this).data('min');
        var max = jQuery(this).data('max');
        var unit = jQuery(this).data('unit');
        var value_min = jQuery(this).data('value-min');
        var value_max = jQuery(this).data('value-max');
        var label_reasult = jQuery(this).data('label-reasult');
        var t = jQuery(this);
        jQuery(this).slider({
            range: true,
            min: min,
            max: max,
            values: [value_min, value_max],
            slide: function(event, ui) {
                var result = label_reasult + " " + unit + ui.values[0] + ' - ' + unit + ui.values[1];
                console.log(t);
                t.closest('.slider-range').find('.amount-range-price').html(result);
            }
        });
    })


/******************************************
        Footer expander
******************************************/

    jQuery(".collapsed-block .expander").on("click", function(e) {
        var collapse_content_selector = jQuery(this).attr("href");
        var expander = jQuery(this);
        if (!jQuery(collapse_content_selector).hasClass("open")) expander.addClass("open").html("&minus;");
        else expander.removeClass("open").html("+");
        if (!jQuery(collapse_content_selector).hasClass("open")) jQuery(collapse_content_selector).addClass("open").slideDown("normal");
        else jQuery(collapse_content_selector).removeClass("open").slideUp("normal");
        e.preventDefault()
    });

/******************************************
        Category sidebar
******************************************/

    jQuery(function() {
        jQuery(".category-sidebar ul > li.cat-item.cat-parent > ul").hide();
        jQuery(".category-sidebar ul > li.cat-item.cat-parent.current-cat-parent > ul").show();
        jQuery(".category-sidebar ul > li.cat-item.cat-parent.current-cat.cat-parent > ul").show();
        jQuery(".category-sidebar ul > li.cat-item.cat-parent").on("click", function() {
            if (jQuery(this).hasClass('current-cat-parent')) {
                var li = jQuery(this).closest('li');
                li.find(' > ul').slideToggle('fast');
                jQuery(this).toggleClass("close-cat");
            } else {
                var li = jQuery(this).closest('li');
                li.find(' > ul').slideToggle('fast');
                jQuery(this).toggleClass("cat-item.cat-parent open-cat");
            }
        });
        jQuery(".category-sidebar ul.children li.cat-item,ul.children li.cat-item > a").on("click", function(e) {
            e.stopPropagation();
        });
    });

//smooth scroll to top
jQueryback_to_top.on('click', function(event) {
    event.preventDefault();
    jQuery('body,html').animate({
        scrollTop: 0,
    }, scroll_top_duration);
});

/******************************************
        colosebut
******************************************/

    jQuery("#colosebut1").on("click", function() {
        jQuery("#div1").fadeOut("slow");
    });
    jQuery("#colosebut2").on("click", function() {
        jQuery("#div2").fadeOut("slow");
    });
    jQuery("#colosebut3").on("click", function() {
        jQuery("#div3").fadeOut("slow");
    });
    jQuery("#colosebut4").on("click", function() {
        jQuery("#div4").fadeOut("slow");
    });

/******************************************
        tooltip
******************************************/


    jQuery('[data-toggle="tooltip"]').tooltip();
})

/******************************************
   totop
   ******************************************/
// browser window scroll (in pixels) after which the "back to top" link is shown
var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    jQueryback_to_top = jQuery('.totop');

//hide or show the "back to top" link
jQuery(window).scroll(function() {
    (jQuery(this).scrollTop() > offset) ? jQueryback_to_top.addClass('totop-is-visible'): jQueryback_to_top.removeClass('totop-is-visible totop-fade-out');
    if (jQuery(this).scrollTop() > offset_opacity) {
        jQueryback_to_top.addClass('totop-fade-out');
    }
	/*  sticky header  */
	jQuery(this).scrollTop() > 120 ? jQuery("nav").addClass("menu-sticky") : jQuery("nav").removeClass("menu-sticky")
});




