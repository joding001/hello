/*
	1. 페이지 방문시에 .gallery li 이미지 각각의 요소가 나타나게 만드세요.
	단! 순차적으로 나타나야 합니다.

	2. li.type-a에 마우스 올리면
	border값을 2로 변경하고 이미지의 opacity를 1로 만들어보세요.

	3. li.type-a에 마우스 떼면
	원래 상태로 만들어보세요.

	4. li.type-b에 마우스 올리면 이미지의 top값과 opacity값을 변경하고,
	li.type-b에 마우스 떼면 이미지를 원래 상태로 만들어보세요.

	5. li.type-c에 마우스 올리면 이미지가 올라오고 떼면 원래 사태로 만들어보세요.
	단! li.type-c안의 이미지는 각각 높이가 다릅니다. 이 점을 유의하여 작성해보세요.
*/
for (let i = 0; i < $('.gallery').children().size() / 2; i++) {
	setTimeout(() => {
		$(`.gallery li:nth-child(${i + 1})`).fadeIn();
	}, i * 100);
}
setTimeout(function(){
	$('li.type-a').on('mouseenter', function(){
		$(this).css({border : '2px solid black'});
		$(this).children().css({opacity : '1'})
	}).on('mouseleave', function(){
		$(this).css({border: '5px solid black'});
		$(this).children().css({opacity : '0.5'})
	});
	
	$('li.type-b').on('mouseenter', function(){
		$(this).children().stop().animate({top : '0', opacity : '1'}, 250)
	}).on('mouseleave', function(){
		$(this).children().stop().animate({top : '-40px', opacity : '0.5'}, 250)
	});
	
	$('li.type-c').on('mouseenter', function(){
		$(this).css({backgroundColor : 'white'})
		$(this).stop().animate({letterSpacing : '20px', textIndent:'20'});
		$(this).children().children().stop().animate({bottom : '0'})
	}).on('mouseleave', function(){
		$(this).css({backgroundColor : '#999999'})
		$(this).stop().animate({letterSpacing : '0'});
		$(this).children().children().stop().animate({bottom : '-400px'})
	});
}, 1100)