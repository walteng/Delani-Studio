$(document).ready(function (){$(".imag").click(function() {
  $('.imag').hide();
  $(".parag").toggle();
});
$(".parag").click(function() {
  $(".parag").hide();
  $(".imag").toggle();
});
$(".parg").click(function() {
  $(".parg").hide();
  $(".img").toggle();
});
$(".par").click(function() {
  $(".par").hide();
  $(".im").toggle();
});

$(".img").click(function() {
  $('.img').hide();
  $(".parg").toggle();
});

$(".im").click(function() {
  $('.im').hide();
  $(".par").toggle();
});
$('#work4').mouseenter(function() {
  $('.work4').show();
}).mouseleave(function() {
  $('.work4').hide();
});
$('#work3').mouseenter(function() {
  $('.work3').show();
}).mouseleave(function() {
  $('.work3').hide();
});

$('#work2').mouseenter(function() {
  $('.work2').show();
}).mouseleave(function() {
  $('.work2').hide();
});

$('#work1').mouseenter(function() {
  $('.work1').show();
}).mouseleave(function() {
  $('.work1').hide();
});

$('#work5').mouseenter(function() {
  $('.work5').show();
}).mouseleave(function() {
  $('.work5').hide();
});

$('#work6').mouseenter(function() {
  $('.work6').show();
}).mouseleave(function() {
  $('.work6').hide();
});
$('#work7').mouseenter(function() {
  $('.work7').show();
}).mouseleave(function() {
  $('.work7').hide();
});

$('#work8').mouseenter(function() {
  $('.work8').show();
}).mouseleave(function() {
  $('.work8').hide();
});
$('#contact').submit(function(e) {
  // prevent empty fields
  e.preventDefault();
  $(".mail, .name").each(function() {
    if ($.trim(this.value) == "") {
      alert('you did not fill out one of the fields');
    } else {
      // Submit
      $("button").click(function(e) {
        var name = $(".name").val();
        return confirm(name + " we have received your message. Thank you for reaching out to us.");
        e.preventDefault();
      });

    }
  })
});
});
