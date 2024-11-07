let sectionOneHeight = document.querySelector('#section01').offsetHeight * 5;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#section01 #imageSequence').style.backgroundRepeat = 'no-repeat';
  document.querySelector('#section01 #imageSequence').style.backgroundSize = 'cover';
  document.querySelector('#section01 #imageSequence').style.backgroundPositon = 'center center';
  /*
    스크롤에 따라 이미지가 변경되는 애니메이션을 만들어보세요.

    마지막에 WEB Animation API를 사용하여 스크롤의 비율이 0.95 이상이면
    이미지가 서서히 사라지는 애니메이션을 만들어보세요.
  */
  document.querySelector('#section01').style.height = sectionOneHeight + 'px';

  window.addEventListener('scroll', function() {
    document.querySelector('#section01 #imageSequence').style.backgroundImage = `url('images/001/large_${Math.round(getScrollRatio() * 110).toString().padStart(5, '0')}.jpg')`;
  });
});

function getScrollRatio() {
  const scrollTop = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  return scrollTop / documentHeight;
}