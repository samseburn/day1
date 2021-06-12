$('.namebox').click(function(){
	$(this).fadeOut();
})

$('.titlebox').click(function(){
	$(this).fadeOut();
})

$('.statementbox').click(function(){
	$(this).slideUp(3000);
})

var secHand = document.querySelector('.second-hand');
var minHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');

setInterval(setDate, 1000);
setDate();

function setDate() {
	var now = new Date();

	var seconds = now.getSeconds();
	var secondsDegrees = ((seconds / 60) * 360) + 90;
	secHand.style.transform = `rotate(${secondsDegrees}deg)`;

	var mins = now.getMinutes(); 
	var minsDegrees = ((mins / 60) * 360) + 90;
	minHand.style.transform = `rotate(${minsDegrees}deg)`;

	var hours = now.getHours();
	var hoursDegrees = ((hours / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}


function handleOnClick() {
	alert('다운로드하시겠습니까?');
}

$('.preface').click(function(){
	$(this).slideUp(1000);
});


var $card = $(".card");

$card.on("click", function() {
	activation();
})

// function activation
function activation() {
	var iscardRotate = $card.hasClass("cardRotate"); 
	 
	if(iscardRotate){
	   $card.removeClass("cardRotate").addClass("backRotate"); 
	} else {
	   $card.removeClass("backRotate").addClass("cardRotate"); 
	   
	}
 }

$('.iphone').click(function(){
	alert('전시장에서 직접 확인하세요.');
});

$('.receipt').draggable();





/** 아날로그 시계 왜 안되는 것인가? 
const secondHand = document.querySelector('.sec-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = 'rotate(${secondsDegrees}deg)';

	const mins = now.getMinutes();
	const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
	minsHand.style.transform = 'rotate(${minsDegrees}deg)';

	const hour = now.getHours();
	const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
	hourHand.style.transform = 'rotate(${hourDegrees}deg)';
};

setInterval(setDate, 1000);

setDate();
**/








/**
$(document).ready(function() {

setTimeout(function(){
	alert('무슨일이 일어났다 확인해보시 겠습니까?');
	location.href="event/day2/day2.html"
	},7000)

});
**/
