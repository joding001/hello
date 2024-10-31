/*
    [ 랜덤 사진 라이브러리 ]
    새로고침마다 각각 랜덤한 사진src, 스피드, 시작시간, z-index가 달라짐

    1. 아래 코드들이 작동하도록
    export.js를 만들고 MakeImg라는 생성자함수를 만드세요.
    new MakeImg(1) -> 1번 이미지가 나와야 함

    2. 아래 코드들이 작동하도록
    export.js에서 MakeImg의 prototype으로 speedImg, zImg 함수를 만드세요.

    speedImg(speed, time) -> 속도값과 생성되는 시간을 받아와서 해당 img를 움직여보세요.
    zImg(z) -> z-index값을 받아와서 해당 img에 z-index값이 들어가도록 해보세요.


*/

import { MakeImg } from './export.js';


let div0 = new MakeImg(parseInt(Math.random() * 24) + 1);
div0.speedImg(10, 10);
div0.zImg(20);

/*
let div1 = new MakeImg(parseInt(Math.random() * 24) + 1);
let div2 = new MakeImg(parseInt(Math.random() * 24) + 1);
let div3 = new MakeImg(parseInt(Math.random() * 24) + 1);
let div4 = new MakeImg(parseInt(Math.random() * 24) + 1);
let div5 = new MakeImg(parseInt(Math.random() * 24) + 1);
let div6 = new MakeImg(parseInt(Math.random() * 24) + 1);

div1.speedImg(parseInt(Math.random()*10),parseInt(Math.random()*10000));
div1.zImg(parseInt(Math.random()*10));
div2.speedImg(parseInt(Math.random()*10),parseInt(Math.random()*10000));
div2.zImg(parseInt(Math.random()*10));
div3.speedImg(parseInt(Math.random()*10),parseInt(Math.random()*10000));
div3.zImg(parseInt(Math.random()*10));
div4.speedImg(parseInt(Math.random()*10),parseInt(Math.random()*10000));
div4.zImg(parseInt(Math.random()*10));
div5.speedImg(parseInt(Math.random()*10),parseInt(Math.random()*10000));
div5.zImg(parseInt(Math.random()*10));
div6.speedImg(parseInt(Math.random()*10),parseInt(Math.random()*10000));
div6.zImg(parseInt(Math.random()*10));
*/

/*
    export.js 다 작성후에 작성하세요.
    
    3. 각각 인스턴스를 만들기 귀찮으므로
    MakeDivs라는 함수를 만들어서 인스턴스를 만들어주는 기능을 하도록 해보세요.
    MakeDivs(6) -> 6개의 인스턴스가 생성되어야 함
    MakeDivs 함수안에 각각 인스턴스들이 speedImg, zImg도 다르게 세팅되게 해보세요.

    4. 클릭시 #bg가 display:block으로 변하고 이미지가 화면 가운데 #detail에 생기게 해보세요.
    #detail은 현재 display:none적용되어있음

    5. #bg 클릭시 #bg가 display:none으로 변하고 #detail의 이미지가 없어지게 해보세요.

*/
