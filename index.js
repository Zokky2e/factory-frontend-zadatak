$(document).ready(function () {
  let topFirst = $("#top .media-element:first-of-type");
  let topLast = $("#top .media-element:last-of-type");
  let botFirst = $("#bottom .media-element:first-of-type");
  let botLast = $("#bottom .media-element:last-of-type");
  let topMedia = $("#top");
  let botMedia = $("#bottom");
  $(".arrow-buttons button").prop("disabled", false);
  $(".arrow-buttons button").css("cursor", "pointer");

  $(".buttonRight").on("click", function () {
    $(".arrow-buttons button").prop("disabled", true);
    $(".arrow-buttons button").css("cursor", "not-allowed");
    const imageWidthTop = topLast.width();
    const imageWidthBottom = botLast.width();
    const imageWidth =
      imageWidthTop > imageWidthBottom ? imageWidthTop : imageWidthBottom;
    $("#scroller")
      .delay("slow")
      .animate(
        {
          scrollLeft: `-=${imageWidth}px`,
        },
        "slow"
      );
    topLast.hide();
    botLast.hide();
    let tempTop = topLast.detach();
    let tempBot = botLast.detach();
    tempTop.hide();
    tempBot.hide();
    botMedia.prepend(tempBot);
    topMedia.prepend(tempTop);
    tempTop.fadeIn(500);
    tempBot.fadeIn(500);
    $(".arrow-buttons button").prop("disabled", false);
    $(".arrow-buttons button").css("cursor", "pointer");
    topFirst = $("#top .media-element:first-of-type");
    topLast = $("#top .media-element:last-of-type");
    botFirst = $("#bottom .media-element:first-of-type");
    botLast = $("#bottom .media-element:last-of-type");
  });

  $(".buttonLeft").on("click", function () {
    $(".arrow-buttons button").prop("disabled", true);
    $(".arrow-buttons button").css("cursor", "not-allowed");
    const imageWidthTop = topFirst.width();
    const imageWidthBottom = botFirst.width();
    const imageWidth =
      imageWidthTop > imageWidthBottom ? imageWidthTop : imageWidthBottom;
    $("#scroller")
      .delay("slow")
      .animate(
        {
          scrollLeft: `+=${imageWidth}px`,
        },
        "slow"
      );
    topFirst.hide();
    botFirst.hide();
    let tempTop = topFirst.detach();
    let tempBot = botFirst.detach();
    tempTop.hide();
    tempBot.hide();
    topMedia.append(tempTop);
    botMedia.append(tempBot);
    tempTop.fadeIn(500);
    tempBot.fadeIn(500);
    $(".arrow-buttons button").prop("disabled", false);
    $(".arrow-buttons button").css("cursor", "pointer");
    topFirst = $("#top .media-element:first-of-type");
    topLast = $("#top .media-element:last-of-type");
    botFirst = $("#bottom .media-element:first-of-type");
    botLast = $("#bottom .media-element:last-of-type");
  });
});
