$(document).ready(function () {
  let t = $("#top .media-element:first-of-type"),
    e = $("#top .media-element:last-of-type"),
    o = $("#bottom .media-element:first-of-type"),
    n = $("#bottom .media-element:last-of-type"),
    r = $("#top"),
    a = $("#bottom");
  $(".arrow-buttons button").prop("disabled", !1),
    $(".arrow-buttons button").css("cursor", "pointer"),
    $(".buttonRight").on("click", function () {
      $(".arrow-buttons button").prop("disabled", !0),
        $(".arrow-buttons button").css("cursor", "not-allowed");
      const d = e.width(),
        s = n.width(),
        i = d > s ? d : s;
      $("#scroller").delay("slow").animate({ scrollLeft: "-=px" }, "slow"),
        e.hide(),
        n.hide();
      let l = e.detach(),
        p = n.detach();
      l.hide(),
        p.hide(),
        a.prepend(p),
        r.prepend(l),
        l.fadeIn(500),
        p.fadeIn(500),
        $(".arrow-buttons button").prop("disabled", !1),
        $(".arrow-buttons button").css("cursor", "pointer"),
        (t = $("#top .media-element:first-of-type")),
        (e = $("#top .media-element:last-of-type")),
        (o = $("#bottom .media-element:first-of-type")),
        (n = $("#bottom .media-element:last-of-type"));
    }),
    $(".buttonLeft").on("click", function () {
      $(".arrow-buttons button").prop("disabled", !0),
        $(".arrow-buttons button").css("cursor", "not-allowed");
      const d = t.width(),
        s = o.width(),
        i = d > s ? d : s;
      $("#scroller").delay("slow").animate({ scrollLeft: "+=px" }, "slow"),
        t.hide(),
        o.hide();
      let l = t.detach(),
        p = o.detach();
      l.hide(),
        p.hide(),
        r.append(l),
        a.append(p),
        l.fadeIn(500),
        p.fadeIn(500),
        $(".arrow-buttons button").prop("disabled", !1),
        $(".arrow-buttons button").css("cursor", "pointer"),
        (t = $("#top .media-element:first-of-type")),
        (e = $("#top .media-element:last-of-type")),
        (o = $("#bottom .media-element:first-of-type")),
        (n = $("#bottom .media-element:last-of-type"));
    });
});
