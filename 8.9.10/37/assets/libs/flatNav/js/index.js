jQuery('.sub-menu ul').hide();
jQuery(".sub-menu a").click(function () {
  jQuery(this).parent(".sub-menu").children("ul").slideToggle("100");
  jQuery(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});
