$(function () {
  $(".menu-button").on("click", function () {
    $(".menu").toggleClass("menu--active");
    $("body").toggleClass("overflow-hidden");
    $(".menu-layout").toggleClass("menu-layout--active");
    let link = $(".menu__list-link");
    let logo = $(".logo");
    let menuLayout = $(".menu-layout");
    let closeMenu = $(".menu__close-btn");
    function click(element) {
      element.on("click", function () {
        $(".menu").removeClass("menu--active");
        $("body").removeClass("overflow-hidden");
        $(".menu-layout").removeClass("menu-layout--active");
      });
    }
    click(link);
    click(logo);
    click(menuLayout);
    click(closeMenu);
  });

  var w = $(window).width();
  if (w <= 576) {
    $(".hero__button").html("Меню");
    $(".hero__title--first-line").html("Добро пожаловать");
    $(".hero__title--second-line").html("В наш ресторан");
  }

  $(window).on("resize", function () {
    var win = $(this); //this = window
    if (win.width() <= 576) {
      $(".hero__button").html("Меню");
      $(".hero__title--first-line").html("Добро пожаловать");
      $(".hero__title--second-line").html("В наш ресторан");
    }
    if (win.width() > 576) {
      $(".hero__button").html("Посмотреть меню");
      $(".hero__title--first-line").html("Добро пожаловать в");
      $(".hero__title--second-line").html("Наш ресторан");
    }
  });
});
