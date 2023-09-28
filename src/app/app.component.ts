import { Component } from '@angular/core';
import * as AOS from 'aos';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reinvent';

  constructor() {
    if (window.location.protocol == 'http:') {
      console.log('yes');
      window.location.href =
        window.location.href.replace(
          'http:', 'https:');
    }
  }

  ngOnInit(): void {
    $(window).ready(function () {
      $("#preloader").delay(100).fadeOut("fade");
    }); //dropdown menu hover js

    $("ul.nav li.dropdown").hover(function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeIn(200);
    }, function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeOut(200);
    }); //sticky header

    //   $('ul.nav li.dropdown a .drop-title').on('click', function (e) {
    //     e.stopPropagation();
    // });

    $('ul.nav li.dropdown a .drop-title').on('click', function () {
      $(".dropdown-menu").removeAttr("style");
    });

    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();

      if (scroll < 2) {
        $("nav.sticky-header").removeClass("affix");
      } else {
        $("nav.sticky-header").addClass("affix");
      }
    });

    AOS.init({
      easing: "ease-in-out",
      // default easing for AOS animations
      once: false,
      // whether animation should happen only once - while scrolling down
      duration: 500 // values from 0 to 3000, with step 50ms

    });

    //magnific popup js

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
    $(".popup-with-form").magnificPopup({
      type: "inline",
      preloader: false,
      focus: "#name"
    });
  }
}
