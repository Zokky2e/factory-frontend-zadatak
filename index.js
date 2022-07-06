$(document).ready(function () {
  $(".arrow-buttons button").prop("disabled", false);
  $(".arrow-buttons button").css("cursor", "pointer");
  let counterFirstLeft = 6;
  let counterLastLeft = 10;
  $(".buttonRight").on("click", function () {
    $(".arrow-buttons button").prop("disabled", true);
    $(".arrow-buttons button").css("cursor", "not-allowed");
    $("#scroller").animate(
      {
        scrollLeft: `-=400px`,
      },
      500,
      function () {
        $(".arrow-buttons button").prop("disabled", false);
        $(".arrow-buttons button").css("cursor", "pointer");
      }
    );
  });
  $(".buttonLeft").on("click", function () {
    $(".arrow-buttons button").prop("disabled", true);
    $(".arrow-buttons button").css("cursor", "not-allowed");
    $("#scroller").animate(
      {
        scrollLeft: `+=200px`,
      },
      500,
      function () {
        $(".arrow-buttons button").prop("disabled", false);
        $(".arrow-buttons button").css("cursor", "pointer");
      }
    );
  });
});
