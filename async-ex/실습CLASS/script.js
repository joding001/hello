/*
    [ Class를 이용하여 jQuery 만들기 ]

    1. Array를 Extends하는 jQuery라는 Class를 만드세요.
    
    2. 생성자함수를 이용하여 요소들을 받아오고 [] 안에 받아온 요소들을 전부 push하세요.
    
    3. $라는 변수를 선언하여 인자로 요소들을 받아오고 그걸 jQuery인스턴스에 전달하여 return되게 만들어보세요.
    
    ------------------------------------------------------------------
    아래 코드가 동작하게 만들어보세요.

    4. $('.logo').fadeIn(1000); 가 작동되도록 만들어보세요.
   
    5. $("h1").removeClass("mario").removeClass("luigi").removeClass("kino"); 가 작동되도록 만들어보세요.
    
    6. const attr = $(".mario").attr("class"); $("h1").addClass(attr);이 작동되도록 만들어보세요.
    
    7. contains라는 메서드를 이용하면 특정 클래스가 존재하는지 확인 가능합니다.
    element.classList.contains('클래스이름'); 이걸 활용하여
    
    if ($("h1").hasClass("kino")) {$(".logo")[0].style.opacity = 0;} 가 작동되도록 만들어보세요.


*/

function $(){
  
}

$(".logo").fadeIn(1000);

$(".logo")[0].addEventListener("click", () => {
  $(".mario").fadeIn(500);
  $(".luigi").fadeIn(1000);
  $(".kino").fadeIn(1500);
});

$(".mario")[0].addEventListener("click", () => {
  $("h1").removeClass("mario").removeClass("luigi").removeClass("kino");
  const attr = $(".mario").attr("class");
  $("h1").addClass(attr);
  $("h1")[0].innerText = attr;
});

$(".luigi")[0].addEventListener("click", () => {
  $("h1").removeClass("mario").removeClass("luigi").removeClass("kino");
  const attr = $(".luigi").attr("class");
  $("h1").addClass(attr);
  $("h1")[0].innerText = attr;
});

$(".kino")[0].addEventListener("click", () => {
  $("h1").removeClass("mario").removeClass("luigi").removeClass("kino");
  const attr = $(".kino").attr("class");
  $("h1").addClass(attr);
  $("h1")[0].innerText = attr;

  if ($("h1").hasClass("kino")) {
    $(".logo")[0].style.opacity = 0;
  }
});
