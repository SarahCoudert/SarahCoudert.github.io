$(function() {
    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#']:not([href='#'])").click(function(e) {
        e.preventDefault();
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top - 150 }, 1100);
            }
        }
    });

});
// slide menu

(function () {

  const burgerButton = document.getElementById("burgerButton");
  const container = document.getElementById("main-site");
  const slideCloser = document.getElementById("slideCloser");
  const menu = document.getElementById("menu");


  // switch the slide menu from close to open and reverse

  function toggleSlide() {
    burgerButton.classList.toggle("open");
    container.classList.toggle("open");
    slideCloser.classList.toggle("open");
    menu.classList.toggle("open");
  }

  slideCloser.addEventListener("click", function () {
    toggleSlide()
  });

  // button burger

  burgerButton.addEventListener("click", function () {
    toggleSlide()
  })
    
    $("ul li a").click(function(e) {
        toggleSlide()
    });
})();