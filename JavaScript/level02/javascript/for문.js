/**
 * 버튼0 누르면
 * 
 * - 모든 버튼에 붙은 orange 클래스명 제거
 * - 버른0에 orange 클래스명 추가
 * 
 * - 모든 div에 붙은 show 클래스명 제거
 * - div0에 show 클래스명 추가
 * 
 */

// for반복문의 변수는 var가 아닌 let으로 써야함
// for 안에서 var의 범위면에서 for 바깥에 생성되기때문




// 함수화

function titleButton(메뉴) {
    // html에 존재하는 class의 개수
    let 버튼개수 = document.getElementsByClassName('tab-button').length;

    // 클릭시 모든 버튼에 붙은 orange 클래스명 제거
    // 클릭시 모든 div에 붙은 show 클래스명 제거
    for(let i = 0; i < 버튼개수; i++) {
        document.getElementsByClassName('tab-button')[i].classList.remove('orange');
        document.getElementsByClassName('tab-content')[i].classList.remove('show');
    }

    // 클릭시 클래스명 orange 추가
    document.getElementsByClassName('tab-button')[메뉴].classList.add('orange');

    // 클릭시 클래스명 show 추가
    document.getElementsByClassName('tab-content')[메뉴].classList.add('show');
}




// 기본적인 자바스크립트 노가다방식

// 버튼0
// document.getElementsByClassName('tab-button')[0].addEventListener('click', function(){
//     // // 클릭시 모든 버튼에 붙은 orange 클래스명 제거
//     // // 클릭시 모든 div에 붙은 show 클래스명 제거
//     // for(let i = 0; i < 3; i++) {
//     //     document.getElementsByClassName('tab-button')[i].classList.remove('orange');
//     //     document.getElementsByClassName('tab-content')[i].classList.remove('show');
//     // }

//     // // 클릭시 클래스명 orange 추가
//     // document.getElementsByClassName('tab-button')[0].classList.add('orange');

//     // // 클릭시 클래스명 show 추가
//     // document.getElementsByClassName('tab-content')[0].classList.add('show');

//     titleButton(0);
// })


// 버튼1
// document.getElementsByClassName('tab-button')[1].addEventListener('click', function(){
//     // // 클릭시 모든 버튼에 붙은 orange 클래스명 제거
//     // // 클릭시 모든 div에 붙은 show 클래스명 제거
//     // for(let i = 0; i < 3; i++) {
//     //     document.getElementsByClassName('tab-button')[i].classList.remove('orange');
//     //     document.getElementsByClassName('tab-content')[i].classList.remove('show');
//     // }
    
//     // // 클릭시 클래스명 orange 추가
//     // document.getElementsByClassName('tab-button')[1].classList.add('orange');

//     // // 클릭시 클래스명 show 추가
//     // document.getElementsByClassName('tab-content')[1].classList.add('show');

//     titleButton(1);
// })


// 버튼2
// document.getElementsByClassName('tab-button')[2].addEventListener('click', function(){
//     // // 클릭시 모든 버튼에 붙은 orange 클래스명 제거
//     // // 클릭시 모든 div에 붙은 show 클래스명 제거
//     // for(var i = 0; i < 3; i++) {
//     //     document.getElementsByClassName('tab-button')[i].classList.remove('orange');
//     //     document.getElementsByClassName('tab-content')[i].classList.remove('show');
//     // }
    
//     // // 클릭시 클래스명 orange 추가
//     // document.getElementsByClassName('tab-button')[2].classList.add('orange');

//     // // 클릭시 클래스명 show 추가
//     // document.getElementsByClassName('tab-content')[2].classList.add('show');

//     titleButton(2);
// })




// 이벤트버블링을 활용한 방법

// 각 버튼마다 addEventListener()를 안만들어줘도 가능할듯?
// 즉, 이벤트버블링을 활용하면 이벤트리스너가 많이 필요없음!!
// document.getElementsByClassName('list')[0].addEventListener('click', function(e){
//     // 지금 클릭한게 버튼0이면 탭열기(0)
//     if(e.target == document.querySelectorAll('.tab-button')[0]) {
//         titleButton(0);
//     }

//     // 지금 클릭한게 버튼0이면 탭열기(1)
//     if(e.target == document.querySelectorAll('.tab-button')[1]) {
//         titleButton(1);
//     }

//     // 지금 클릭한게 버튼0이면 탭열기(2)
//     if(e.target == document.querySelectorAll('.tab-button')[2]) {
//         titleButton(2);
//     }
// })




// dataset을 활용한 방법

// 위의 이벤트버블링을 활용해도 if문의 중복이 너무많기때문에 사용하는 방법
// (필수사항) 각 메뉴 <li>에 data-id=""를 써서 값을 숨겨줌

document.getElementsByClassName('list')[0].addEventListener('click', function(e){
    // titleButton(지금 누른 버튼에 숨겨져있는 data-id)
    titleButton(e.target.dataset.id);
})