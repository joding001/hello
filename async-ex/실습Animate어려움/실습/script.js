/*
	1. 전체 #sushi-list의 width값을 계산하여 넣고 #sushi-list를 1줄로 만들어보세요.
	주의! 스시의 갯수가 늘어나면 늘어난 갯수만큼의 width값이 반영되어야 합니다.

	2. 스시들은 마우스 올릴때 opacity가 1이 되어야 하기 때문에 각각 스시들에 opcity를 0.5로 만들어보세요.
	
	3. 첫 페이지 방문시에 오른쪽에서 스시들이 순차적으로 나오고 있습니다.
	애니메이션을 주기위하여 스시들을 화면밖에 위치하게 해보세요.
	
	4. 스시들이 순차적으로 제자리에 오도록 만들어보세요.
	
	5. 각각 스시들에 마우스를 올리면 스시가 올라오도록 만들어보세요.

	6. .sushi-name을 안보이게 만들고
	각각의 스시에 마우스를 올리면 .sushi-name이 보이면서 그 스시에 맞게 텍스트를 바꿔보세요.

	7. .sushi-name을 각 스시에 맞는 위치에 있도록 해보세요.

	8. 스시들에 마우스를 떼면 원래도록 돌아오도록 만들어보세요.

	9. 화살표를 클릭시 좌우로 500px씩 이동하도록 해보세요.

	10. 화살표를 클릭시 만약 더이상 스시가 없다면 #sushi-list가 원래 위치값으로 돌아오도록 만들어보세요.
*/

$('#header a').on('click', function(){
	if ($(this).index() === 0) {
		$('#sushi-list').stop().animate({left : '-=300px'}, 400, function(){
			if (Number($('#sushi-list').css('left').slice(0, -2)) <= window.innerWidth - ($('#sushi-list ul').children().length * 100)) {
				$('#sushi-list').animate({left : `-${$('#sushi-list ul').children().length * 100 - window.innerWidth}px`}, 300);
			}
		});
	}
	if ($(this).index() === 1) {
		$('#sushi-list').stop().animate({left : '+=300px'}, 400, function(){
			if (Number($('#sushi-list').css('left').slice(0, -2)) > 0) {
				$('#sushi-list').animate({left : '0px'}, 300);
			}
		});
	}
});

$('#sushi-list .sushi-name').hide();
$('#sushi-list').width($('#sushi-list ul').children().length * 100);
$('#sushi-list ul li').css({opacity : '0.5'});
$('#sushi-list ul li').on('mouseenter', function(){
	$(this).stop().animate({
		top : '-200px',
		opacity : '1'
	}, 500);
	$('#sushi-list .sushi-name').css({left : `${$(this).index() * 100}px`}).text($(this).children().attr('title'))
	$('#sushi-list .sushi-name').stop().show().animate({
		top : '-200px'
	}, 500);
}).on('mouseleave', function(){
	$(this).stop().animate({
		top : '0',
		opacity : '0.5'
	}, 500);
	$('#sushi-list .sushi-name').css({left : '0'}).text('Name')
	$('#sushi-list .sushi-name').stop().hide().animate({
		top : '0'
	}, 500);
});