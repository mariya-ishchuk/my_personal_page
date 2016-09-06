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