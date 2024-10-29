/*
	1. .icons a를 클릭하였을때 active라는 class를 활성하고 나머지 .icons a는 비활성화해보세요.

	2. 
	디자이너 : .icons a를 클릭하였을때 슬라이드가 960크기 만큼 움직이게 해보세요.
	개발자 : .icons a를 클릭하였을때 .hero-slide li의 width값만큼 슬라이드가 움직이게 해보세요.

	3. 페이지 방문시에 첫번째 슬라이드가 active 되게 해보세요.

	4. prev와 next를 클릭시 동작되게 해보세요.

	5. prev와 next를 클릭시 슬라이드가 끝에 도달했을때 다시 처음이나 마지막 슬라이드로 가도록 만들어보세요.
	마지막 슬라이드에서 right 클릭 : 첫 슬라이드
	첫 슬라이드에서 left 클릭 : 마지막 슬라이드

	6. prev와 next를 하나의 click이벤트로 묶어서 작성해보세요.
	$('.prev, .next').click

	7. prev, next 이벤트와 .icons a를 연동시켜보세요.
	.icons a의 아무곳이나 클릭하고 prev, next 동작시에 다음 슬라이드로 잘 작동해야 합니다.

*/

// let select = 0;

// $('.icons a').on('click', function(){
// 	select = $(this).index();
// 	$(this).addClass('active');
// 	$(this).siblings().removeClass('active');
// 	$('ul.hero-slide').stop().animate({right : `${select * $('.hero-slide li').width()}px`}, 400);
// });


// $('.arrow a').on('click', function(){
// 	if ($(this).index() === 0) {
// 		select -= (select == 0 ? -4 : 1);
// 		$(`.icons a.icon0${select + 1}`).addClass('active');
// 		$(`.icons a.icon0${select + 1}`).siblings().removeClass('active');
// 		$('.main ul.hero-slide').stop().animate({right : `${select * $('.hero-slide li').width()}px`}, 400);
// 	}
// 	if ($(this).index() === 1) {
// 		select += (select == 4 ? -4 : 1);
// 		$(`.icons a.icon0${select + 1}`).addClass('active');
// 		$(`.icons a.icon0${select + 1}`).siblings().removeClass('active');
// 		$('.main ul.hero-slide').stop().animate({right : `${select * $('.hero-slide li').width()}px`}, 400);
// 	}
// });

// $('.icons a.icon01').trigger('click');

// // 계속 움직이는 코드
// setInterval(function(){
// 	$('.arrow a.next').trigger('click');
// }, 2000);

let select = 0;

Element.prototype.index = function() {
	const parent = this.parentNode;
	const children = Array.from(parent.children);
	return children.indexOf(this);
};

Element.prototype.trigger = function(eventType) {
    if ('createEvent' in document) {
        let event = document.createEvent('HTMLEvents');
        event.initEvent(eventType, true, false);
        this.dispatchEvent(event);
    } else { // IE9 이하 지원
        let event = document.createEventObject();
        this.fireEvent('on' + eventType, event);
    }
};
	
document.querySelector('ul.hero-slide').style.transition = 'right 400ms ease-in-out';

document.querySelector('.icons a.icon01').classList.add('active');

for (let i = 0; i < document.querySelectorAll('.icons a').length; i++) {
	document.querySelector(`.icons a.icon0${i + 1}`).addEventListener('click', function(){
		select = this.index();
		this.classList.add('active');
		for (let i = 0; i < document.querySelectorAll('.icons a').length - 1; i++) {
			Array.from(this.parentNode.children).filter(element => element !== this)[i].classList.remove('active')
		}
		document.querySelector('ul.hero-slide').style.right = `${select * document.querySelector('.hero-slide li').offsetWidth}px`
	});
}

for (let i = 0; i < document.querySelectorAll('.arrow a').length; i++) {
	document.querySelector(`.arrow a:nth-child(${i + 1})`).addEventListener('click', function(){
		if (this.index() === 0) {
			select -= (select == 0 ? -4 : 1);
			document.querySelector(`.icons .icon0${select + 1}`).trigger('click');
		}
		if (this.index() === 1) {
			select += (select == 4 ? -4 : 1);
			document.querySelector(`.icons .icon0${select + 1}`).trigger('click');
		}
	});
}

// $('.arrow a').on('click', function(){
// 	if ($(this).index() === 0) {
// 		select -= (select == 0 ? -4 : 1);
// 		$(`.icons a.icon0${select + 1}`).addClass('active');
// 		$(`.icons a.icon0${select + 1}`).siblings().removeClass('active');
// 		$('.main ul.hero-slide').stop().animate({right : `${select * $('.hero-slide li').width()}px`}, 400);
// 	}
// 	if ($(this).index() === 1) {
	// 		select += (select == 4 ? -4 : 1);
	// 		$(`.icons a.icon0${select + 1}`).addClass('active');
// 		$(`.icons a.icon0${select + 1}`).siblings().removeClass('active');
// 		$('.main ul.hero-slide').stop().animate({right : `${select * $('.hero-slide li').width()}px`}, 400);
// 	}
// });

// $('.icons a.icon01').trigger('click');

// // 계속 움직이는 코드
// setInterval(function(){
// 	$('.arrow a.next').trigger('click');
// }, 2000);