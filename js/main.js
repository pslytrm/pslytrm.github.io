/*
  Template Name: NIAG - Multipurpose Landing Page Template
  Author: MIRAJU
  Author URL: https://themeforest.net/user/miraju
  Version: 1.0.0
  Website: www.1stwebcoder.com/themes/niag
  Tags: Landing Page, Multipurpose Landing page, one page, creative template, html5 template, business template, html5, css, Bootstrap, responsive, corporate, project
*/

/*
 ==============================================================
     TABLE OF CONTENTS
 ==============================================================

    ## SIDENAV
    ## TEXT ROTATOR
    ## SMOTH SCROOL
    ## SCROLLSPY
    ## ISOTOPE
    ## STICK NAVBAR
    ## MAGNIFIC POPUP
    ## WOW
    ## BACK TO TOP
    
==============================================================
*/

$(function($) {
  
    "use strict";

        // SIDENAV
         var navbars = {
            sideNavBar: function () {
                $('.side-menu-button').on('click', function () {
                    $('.sideNav').toggleClass("mySideBar");
                    $(this).toggleClass("actives");
                    $('.side-menu-button > i').toggleClass("fa-bars");
                    $('.side-menu-button > i').toggleClass("fa-times");
                });
                $('.sideNav ul >li a').on('click', function () {
                    $('.sideNav').removeClass("mySideBar");
                    $('.side-menu-button').removeClass("actives");
                    $('.side-menu-button > i').toggleClass("fa-bars");
                    $('.side-menu-button > i').toggleClass("fa-times");
                });
            }
        }  
        navbars.sideNavBar();
        // END SIDENAV
    
    
        //  TEXT ROTATOR
            $(".typed").typed({
              strings: ["digital creative <strong>agency</strong>", "we design <strong>websites</strong>", "we develop <strong>websites</strong>"],
              typeSpeed: 100,
              loop: true
            });
          
      // END TEXT ROTATOR

        // SMOOTH SCROLL
                $('a.smooth-scroll').on('click', function(event) {
                  var $anchor = $(this);
                    var headerH = '30';
                  $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
                  }, 1000, 'easeInOutExpo');
                  event.preventDefault();
                });
        // END SMOOTH SCROLL

        // SCROLLSPY

            $('body').scrollspy({target: ".navbar", offset: 50});   

        // END SCROLLSPY

        // ISOTOPE

          $(".portfolio-active").isotope({
                  itemSelector: '.single-portfolio',
                  layoutMode: 'fitRows'
              });
              
              $('.portfolio-filter li').on('click', function(){ 
                  
                $(".portfolio-filter li").removeClass("active");
                $(this).addClass("active");        

                  var selector = $(this).attr('data-filter'); 
                  $(".portfolio-active").isotope({ 
                      filter: selector, 
                      animationOptions: { 
                          duration: 1500,
                          easing: 'linear',
                          queue: false
                      } 
                  }); 
                return false; 
              });  

        // END ISOTOPE
    
        // STICK NAVBAR

        $(window).scroll(function() {
          if ($(document).scrollTop() > 100) {
            $('nav').addClass('scroll-bg');
          } else {
            $('nav').removeClass('scroll-bg');
          }
        });

        // END STICK NAVBAR

        // MAGNIFIC POP UP

        $('.work-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
                mainClass: 'mfp-with-zoom',
            gallery: {
              enabled: true
            }
        });

        // END MAGNIFIC POP UP
        // MAGNIFIC POP UP

          $('.our-video').magnificPopup({type:'video'});

        // END MAGNIFIC POP UP

        // WOW 

           new WOW().init();

        // END WOW JS

        // BACK-TO-TOP

          $(window).on('scroll',function(){
                if ($(this).scrollTop() > 200) {
                    $('.back-to-top').fadeIn();
                } else {
                    $('.back-to-top').fadeOut();
                }
              });

              $('.scrollUpButton').on('click',function(){
                  $("html, body").animate({ scrollTop: 0 }, 1500);
                  return false;
          });    

      // END BACK-TO-TOP

 })(jQuery);
