let sectionOneHeight = document.querySelector('#section01').offsetHeight * 4;

document.addEventListener("DOMContentLoaded", () => {
  const imageSequence = document.querySelector('#section01 #imageSequence');
  imageSequence.style.backgroundRepeat = 'no-repeat';
  imageSequence.style.backgroundSize = 'cover';
  imageSequence.style.backgroundPosition = 'center center';

  document.querySelector('#section01').style.height = sectionOneHeight + 'px';

  let lastScrollY = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateImageSequence();
        ticking = false;
      });
      ticking = true;
    }
  });

  function updateImageSequence() {
    const scrollRatio = getScrollRatio();
    const imageIndex = Math.round(scrollRatio * 110).toString().padStart(5, '0');
    imageSequence.style.backgroundImage = `url('images/001/large_${imageIndex}.jpg')`;

    // 이미지가 서서히 사라지도록 하는 애니메이션
    if (scrollRatio >= 0.95) {
      imageSequence.style.transition = 'opacity 0.5s ease';
      imageSequence.style.opacity = 0;
    } else {
      imageSequence.style.transition = 'opacity 0.5s ease';
      imageSequence.style.opacity = 1;
    }
  }
});

function getScrollRatio() {
  const scrollTop = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  return scrollTop / documentHeight;
}
