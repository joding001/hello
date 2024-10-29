/*
	1. 각각의 캐릭터(.face안의 li)에 순차적인 이벤트를 주세요.
	-> 새로고침 시에 각각의 캐릭터가 앞에서부터 순서대로 위로 올라왔다가 내려가면 됨

	2. 캐릭터 클릭 시 .contents li가 나타나게 해보세요.

	3. 캐릭터 클릭 시 .contents의 높이를 188로 주세요.

	4. 만약 .contents의 height 값이 유동적으로 바뀐다면?

	2번째 이미지의 height 값은 강제로 높이값을 다르게 해놓은 상태입니다.
	캐릭터 이미지의 높이값만큼 .contents의 높이가 바뀌게 해보세요.
	[디자이너는 안해도됨]

	5. 캐릭터 클릭 시 각각의 캐릭터(.face안의 li)가 나왔다가 들어가는 애니메이션을 만들어보세요.

	6. 처음 페이지 방문 시에 아무것도 클릭이 안되어있는 상태입니다.
	강제로 첫번째 캐릭터를 클릭하게 만드세요.

	7. 자동으로 2초마다 캐릭터가 번갈아가며 클릭되게 해보세요.
*/
$('.wrapper .face li').animate({
	top: '200px'
}, 500);
// setTimeout(function(){
// 	$('.wrapper .face li:first').trigger('click');
// }, 500);
$('.wrapper .face li:first').on('click', function(){
	$('.wrapper .contents li:last').hide();
	$('.wrapper .face li:first').stop(true, true).animate({
		top: '0'
	}, 500, function() {
		$(this).animate({
			top: '200px'
		}, 500);
	});
	$('.wrapper .contents li:first').fadeIn();
	$('.wrapper .contents').height(188);
});
$('.wrapper .face li:last').on('click', function(){
	$('.wrapper .contents li:first').hide();
	$('.wrapper .face li:last').stop(true, true).animate({
		top: '0'
	}, 500, function() {
		$(this).animate({
			top: '200px'
		}, 500);
	});
	$('.wrapper .contents li:last').fadeIn();
	$('.wrapper .contents').height(340);
});
setInterval(() => {
	$('.wrapper .face li:first').trigger('click');
	setTimeout(() => {
		$('.wrapper .face li:last').trigger('click');
	}, 2000)
}, 4000);