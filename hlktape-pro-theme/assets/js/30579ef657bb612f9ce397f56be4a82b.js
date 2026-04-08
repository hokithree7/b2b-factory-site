$(document).on("click", ".f_ly", function () {
    $(".qili-universal").slideDown("400");
});
$(document).on("click", ".qili-universal .close", function () {
    $(".qili-universal").slideUp("400");
});
function GoTop() {
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
}

$(function() {
    $('.qili-universal input[required]').on('invalid', function (evt) {
        evt.target.setCustomValidity('This field is required.');
    });
    $('.qili-universal input[required]').on('input', function (evt) {
        evt.target.setCustomValidity('');
    });
})