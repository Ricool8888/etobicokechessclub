// Meeting maps on the home page.
//
// A Google Maps embed is a third-party request made on the club's behalf, so
// the map is a button until the visitor asks for it. Clicking swaps the button
// for the iframe it describes, which keeps the address readable and the page
// free of third-party requests for anyone who never opens a map.
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll("[data-map-facade]");

    Array.prototype.forEach.call(buttons, function (button) {
      button.addEventListener("click", function () {
        var frame = document.createElement("iframe");
        frame.className = "meeting-map";
        frame.loading = "lazy";
        frame.title = button.getAttribute("data-map-title") || "Map";
        frame.src = button.getAttribute("data-map-src") || "";

        // Focus moves to the map that just appeared instead of being lost
        // with the button that was removed.
        frame.tabIndex = -1;

        button.parentNode.replaceChild(frame, button);
        frame.focus();
      });
    });
  });
})();
