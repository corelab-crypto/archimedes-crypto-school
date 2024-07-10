(function ($) {
  new WOW().init();

  jQuery(window).load(function () {
    jQuery("#preloader").delay(100).fadeOut("slow");
    jQuery("#load").delay(100).fadeOut("slow");
  });

  //jQuery to collapse the navbar on scroll
  //	$(window).scroll(function() {
  //		if ($(".navbar").offset().top > 350) {
  //			$(".navbar-fixed-top").addClass("top-nav-collapse");
  //		} else {
  //			$(".navbar-fixed-top").removeClass("top-nav-collapse");
  //		}
  //	});

  
function adjustContainerMargin() {
  const navbar = document.getElementById('navbar');
  const container = document.getElementById('home');
  const navbarHeight = navbar.offsetHeight;
  container.style.paddingTop = `${navbarHeight + 20}px`;
}

// Adjust the margin on page load
window.onload = adjustContainerMargin;

// Adjust the margin on window resize
window.onresize = adjustContainerMargin;

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function () {
    $(".navbar-nav li a").bind("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top,
          },
          1500,
          "easeInOutExpo"
        );
      event.preventDefault();
    });
    $(".page-scroll a").bind("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top,
          },
          1500,
          "easeInOutExpo"
        );
      event.preventDefault();
    });
  });
})(jQuery);

function uncheck() {
  // Uncheck all checkboxes on page load
  $("input:checkbox:checked").attr("checked", false);
  console.log("uncheck");
}

$("#talk").click(function () {
  $("#talk1").slideToggle(this.checked);
});

$(document).ready(function () {
  var form = $("#form");
  var submit = $("#submit");
  var alert = $(".alert");

  form.on("submit", function (e) {
    e.preventDefault();

    $.ajax({
      url: "conn.php",
      type: "POST",
      dataType: "html",
      data: form.serialize(),
      beforeSend: function () {
        alert.fadeOut();
        submit.html("Sending....");
      },
      success: function (data) {
        alert.html(data).slideDown();
        form.trigger("reset");
        submit.html("Register");
        $("#talk1").slideUp();
      },
      error: function (e) {
        console.log(e);
      },
    });
  });
});

function toggle(id) {
  $("#" + id).slideToggle("slow");
  return false;
}

function exp() {
  $("#pdf").slideToggle("slow");
  $("#click").html(
    $("#click").html() == '<a href="#" onclick="return exp();">(contract)</a>'
      ? '<a href="#" onclick="return exp();">(expand &darr;)</a>'
      : '<a href="#" onclick="return exp();">(contract)</a>'
  );
  return false;
}

$("#italianodetails").on("shown.bs.modal", function () {
  $("#myInput").focus();
});
