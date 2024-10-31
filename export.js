/*
    [ import $ export ]
    - 자바스크립트를 다른 파일로 나누는 코드
    - 원하는 변수, 함수, class만 다른 파일로 보낼 수 있음
    - import해온 변수, 함수는 사용가능, 수정불가
*/
/*
    [ export ]
    - 변수, 함수, class 등을 다른 파일에서 사용할 수 있도록 내보내는 것
    - 한 파일에서 여러개 사용가능
    - {변수명1, 변수명2, ...} 안에 변수명 작성
    - export 뒤에 변수명 작성
*/

export let a = 10;
export let b = 20;
// export { a, b };

export const add = (a,b) => {
    return a + b
}

/*
    [ export default ]
    - 한 파일에서 한번만 사용가능
*/

const PI = 3.141592;
export default PI
