/* $(".slideshow").load(function() {
	slideToggle("slow");
});
*/

/*
function pauseCarousel() {
	$('#playButton').click(function() {
		$('#image-carousel').carousel('cycle');
	});
	$('#pauseButton').click(function() {
		$('#image-carousel').carousel('pause');
	});
};
*/

/*
$('#playButton').click(function() {
	$('#image-carousel').carousel('cycle');
});

$('#pauseButton').click(function() {
	$('#image-carousel').carousel('pause');
});
*/


/*
$(function(){
    $('#image-carousel.slide').carousel({
        interval: 5000,
        pause: "click"
    });

    $('input').focus(function(){
       $("#image-carousel").carousel('pause');
    }).blur(function() {
       $("#image-carousel").carousel('cycle');
    });
});
*/



$(function () {
    $('#image-carousel').carousel({
        pause: "false"
    });
    $('#playButton').click(function () {
        $('#image-carousel').carousel('cycle');
    });
    $('#pauseButton').click(function () {
        $('#image-carousel').carousel('pause');
    });
});