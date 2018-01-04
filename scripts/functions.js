(function() {
  $(function() {
    var currentYear, year;
    $(".section.sub-project").waypoint((function(direction) {
      var el;
      el = $(this).find('.project-body-figure');
      if (direction === "down") {
        return el.addClass('active');
      } else {
        return el.removeClass('active');
      }
    }), {
      offset: "100%"
    });
    year = new Date().getFullYear();
    currentYear = document.querySelector(".currentYear");
    return currentYear.innerHTML = "©" + year + " ";
  });

}).call(this);
