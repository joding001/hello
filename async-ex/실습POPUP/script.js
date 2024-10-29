/*
    1.
    현재 #popup에는 display:none이 적용되어있으니 참고해주세요.
    data-hide-duration='num'에 넣는 수치에 따라 'num'초 동안보지 않기 문구가 뜨게 해주세요.

    2. #closePopup을 클릭하면 팝업을 닫아주세요.

    3. #hidePopup을 클릭하면 현재 시간을 가져와 dataset의 시간(*1000ms)을 더해 로컬스토리지에 저장하고 팝업을 안보이게 해주세요.

    4. showPopup 이라는 함수를 만드세요.
    로컬스토리지에서 시간을 비교해 현재시간이 저장된 시간보다 지났으면 팝업을 display를 block으로 바꿔주세요.
*/

let dataHideDuration = 10;

let nowTime = new Date();

setInterval(showPopup, 10);


document.querySelector('#popup').style.display = 'none';

document.querySelector('#popup #hidePopup #dataText').innerText = dataHideDuration;
document.querySelector('#popup #hidePopup').addEventListener('click', function(){
    localStorage.setItem('dataset', getNowTime(nowTime));
    document.querySelector('#popup').style.display = 'none';
});

document.querySelector('#popup #closePopup').addEventListener('click', function(){
    localStorage.setItem('isClickClose', 'false');
    document.querySelector('#popup').style.display = 'none';
});

function getNowTime(time) {
    let now = time;

    let year = now.getFullYear();
    let month = String(now.getMonth() + 1).padStart(2, '0');
    let day = String(now.getDate()).padStart(2, '0');
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    return Number(`${year}${month}${day}${hours}${minutes}${seconds}`);
}

function getDataHideDurationTime(time, duration) {
    let now = time;

    let futureTime = new Date(now.getTime() + duration * 1000);

    let year = futureTime.getFullYear();
    let month = String(futureTime.getMonth() + 1).padStart(2, '0');
    let day = String(futureTime.getDate()).padStart(2, '0');
    let hours = String(futureTime.getHours()).padStart(2, '0');
    let minutes = String(futureTime.getMinutes()).padStart(2, '0');
    let seconds = String(futureTime.getSeconds()).padStart(2, '0');

    return Number(`${year}${month}${day}${hours}${minutes}${seconds}`);
}

function numberToDate(dateNumber) {
    let dateStr = String(dateNumber);

    let year = parseInt(dateStr.slice(0, 4), 10);
    let month = parseInt(dateStr.slice(4, 6), 10) - 1;
    let day = parseInt(dateStr.slice(6, 8), 10);
    let hours = parseInt(dateStr.slice(8, 10), 10);
    let minutes = parseInt(dateStr.slice(10, 12), 10);
    let seconds = parseInt(dateStr.slice(12, 14), 10);

    return new Date(year, month, day, hours, minutes, seconds);
}

function stringToBoolean(str) {
    return str.toLowerCase() === 'true';
}

function showPopup() {
    nowTime = new Date();

    if (localStorage.getItem('isClickClose') === null) {
        localStorage.setItem('isClickClose', 'true');
    }
    if (getDataHideDurationTime(numberToDate(localStorage.getItem('dataset')), dataHideDuration) <= getNowTime(nowTime)) {
        if (localStorage.getItem('isClickClose') === 'true') {
            document.querySelector('#popup').style.display = 'block';
        }
    } else if (localStorage.getItem('dataset') === null) {
        document.querySelector('#popup').style.display = 'block';
    }
}