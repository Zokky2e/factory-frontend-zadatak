function scrollToLeft() {
  $("#scroller").animate(
    {
      scrollLeft: "-=100px",
    },
    500
  );
}
function scrollToRight() {
  $("#scroller").animate(
    {
      scrollLeft: "+=100px",
    },
    500
  );
}
