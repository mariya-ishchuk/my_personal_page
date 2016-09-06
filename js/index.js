$(function() {
    $('#button').click(sendForm);
});

function sendForm (e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/mariya.ishchuk@me.com", 
        method: "POST",
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        },
        dataType: "json",
        success: function() {
            $('form')[0].reset();
            $('#thanks').html('Thank you for contacting!');
        }
    });
}

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$('html, body').animate({
    scrollTop: $("#elementID").offset().top
}, 2000);