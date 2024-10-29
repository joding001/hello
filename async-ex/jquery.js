function $(selector) {
    let elements = document.querySelectorAll(selector);
    return {
        elements,
        fadeOut: function (time = 400) {
            const totalFrames = 60;
            const fadeOutStep = 1 / (time / (1000 / totalFrames));
            elements.forEach(element => {
                if (getComputedStyle(element).display === 'none') return;
                let currentOpacity = 1;
                element.style.opacity = currentOpacity;
                const animateFadeOut = (timestamp) => {
                    if (currentOpacity > 0) {
                        currentOpacity -= fadeOutStep;
                        if (currentOpacity < 0) currentOpacity = 0;
                        element.style.opacity = currentOpacity;
                    } else {
                        element.style.display = 'none';
                        return;
                    }
                    requestAnimationFrame(animateFadeOut);
                };
                requestAnimationFrame(animateFadeOut);
            });
            return this;
        },
        fadeIn: function (time = 400) {
            const totalFrames = 60;
            const fadeInStep = 1 / (time / (1000 / totalFrames));
            elements.forEach(element => {
                if (getComputedStyle(element).display !== 'none') return;
                let currentOpacity = 0;
                element.style.opacity = currentOpacity;
                element.style.display = '';
                const animateFadeIn = (timestamp) => {
                    if (currentOpacity < 1) {
                        currentOpacity += fadeInStep;
                        if (currentOpacity > 1) currentOpacity = 1;
                        element.style.opacity = currentOpacity;
                    } else {
                        return;
                    }
                    requestAnimationFrame(animateFadeIn);
                };
                requestAnimationFrame(animateFadeIn);
            });
            return this;
        },
        hide: function () {
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = 'none';
            }
            return this;
        },
        show: function () {
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = '';
            }
            return this;
        },
        parent: function () {
            const parentElements = Array.from(elements).map(element => element.parentElement).filter(parent => parent !== null);
            return $(Array.from(parentElements).map(parent => parent.tagName.toLowerCase()));
        },
        on: function (moveType, func) {
            if (moveType === 'click') {
                for (let i = 0; i < elements.length; i++) {
                    elements[i].addEventListener('click', func());
                }
            }
        }
    }
}
