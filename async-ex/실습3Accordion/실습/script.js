/*
	1. .tt를 클릭하면 클릭한 .tt요소안에 h2에 open 클래스가 붙도록 만드세요.

	2. .tt를 클릭하면 클릭한 .tt요소안에 h2에만 open 클래스가 붙고 나머지는 없어지게 만들어보세요.

	3. .tt를 클릭하면 클릭한 .tt요소의 아코디언 메뉴가 아래로 열리게 해보세요.

	4. .tt를 클릭하면 클릭한 .tt요소의 아코디언 메뉴만 열리고 나머지는 닫히게 해보세요.

	5. .tt를 클릭하면 나머지 이미지 요소는 안보이고 클릭한 .tt요소의 이미지만 생성되게 해보세요.

	[ 여기까지가 디자이너들 목표! ]

	6. this를 활용하면 전체 코드를 10줄미만으로 작성가능합니다. 코드를 간략하게 만들어보세요.
*/
$('.tt').css({})
$('.tt').on('click', function(){
	$(this).siblings().children('img').fadeOut();
	$(this).siblings().children('p').slideUp();
	$(this).siblings().children('h2').removeClass('open');
	$(this).children('h2').toggleClass('open');
	if ($(this).hasClass() == 'open') {
		$('.tt').children('img').fadeOut();
		$('.tt').children('p').slideUp();
		$(this).children('img').fadeIn();
		$(this).children('p').slideDown();
	} else {
		$(this).children('img').fadeOut();
		$(this).children('p').slideUp();
	}
});