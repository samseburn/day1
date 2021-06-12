var feelings = [
	'happy',
	'sad',
	'thirsty',
	'creepy',
	'bored',
	'hungry',
	'horny',
	'nerveous',
	'thrilled',
	'weired',
	'terrified'
]

$('.candle').draggable();
$(".candle").on("click mouseenter", function() {
	$(this).children().addClass("light");
	$(".cube").addClass("stop");
	$(".cube2").addClass("stop");
	$(".cube3").addClass("stop");
});

var feeling = feelings[Math.floor(Math.random() * feelings.length)];
$('<a class="feeling" href="asset/img/image.jpeg" download="image.jpeg">' + feeling + '? </a>').css({
	'color': "white"
}).appendTo("h1");

