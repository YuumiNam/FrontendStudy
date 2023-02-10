/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import {useState } from 'react';

// 컴포넌트 만드는 법
// 1. function 만들고 (App() 바깥쪽에다)
// 2. return() 안에 html 담기
// 3. <함수명></함수명> 쓰기

// props로 부모 -> 자식 state 전송하는법
// 1. 자식컴포넌트 사용하는 곳에 가서 <작명={state이름} />
// 2. 자식컴포넌트 만드는 function으로 가서 props라는 파라미터 등록 후 props.작명 사용
function Modal(props) {
  return (
    <div className='modal'>
        <h4>{props.글제목[props.title] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}


function App() {
  // 데이터바인딩
  // document.getElementsByClassName('App')[0].insertAdjacentHTML('beforeend', post);
  // 자바스크립트를 사용해서 HTML 사이에 코드를 입력하려면 위의 코드처럼 복잡하게 쳤어야했는데
  // react에서는 변수를 {중괄호} 안에 넣기만 하면 알아서 됨
  let post = '강남 우동 맛집';



  // useState(보관할자료)
  // 변수에 자료를 보관하기 말고도 state에 보관할수도 있음

  // Q. 왜, 언제 state써야함?? 변수있는데
  // 변수가 가변적이면 값이 바뀔때마다 일일이 값을 바꿔줘야함 
  // -> 변동시 자동으로 html에 반영되게 만들고싶으면 state쓰셈
  let [글제목, 글제목변경 ] = useState(['남자코트 추천', '여자코트 추천', '강남우동 맛집' ]);
  let [따봉, 따봉변경 ] = useState([0, 0, 0]);
  let [modal, setModal] = useState('닫힘');
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');



  // array를 반복문에 활용하기
  /*
  [1,2,3].map(function(a)) {
    console.log(1); // array자료 개수만큼 1 출력
    console.log(a); // 함수의 파라미터 a는 array안에 있는 자료임

    return '123'  // return에 뭐 적으면 array로 담아줌 => [123, 123, 123]
  }

  */


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'white', fontSize: '16px', cursor: 'pointer' } }>ReactBlog</h4>
      </div>



      {/* 반복문으로 축약할거라 주석처리 */}
      {/* <div className="list">
        <h4>{글제목[0] } <span style={{cursor: 'pointer' } } onClick={() => {따봉변경(따봉++) } }>👍</span> {따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}
      

      {
        // 반복문 (html중간에 반복문을 쓰려면 map()함수를 활용하자)
        글제목.map(function(a, i){
          return (
            <div className="list" key={i }>
              <h4 style={{cursor: 'pointer'} } onClick={() => {if(modal == '닫힘') {setModal('열림')} else {setModal('닫힘')}; setTitle(i)}}>{글제목[i]}
                <span 
                  style={{cursor: 'pointer' } } 
                  onClick={(e) => {e.stopPropagation(); let copy = [...따봉]; copy[i]++; 따봉변경(copy) } // stopPropagation() 이벤트버블링 막아줌
                  }>👍</span> {따봉[i] }
              </h4>
              <p style={{display: 'inline-block'}}>2월 17일 발행</p>
              <button className='btn' style={{padding:'5px'}} onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1); // array자료에서 원하는 항목 삭제

                글제목변경(copy);
              }}>글삭제</button>
            </div>
          )
        })
      }

      

      {/* <button className='btn' onClick={() => {
        // 원본은 보존
        // 기존 state가 array&object라면
        // 글제목과 copy는 변수가 같기 때문에 컴퓨터는 기존 state와 달라진게없다고 인식함
        // 그래서 [...] 을 써주면 독립적인 array가 생성된다
        
        let copy = [...글제목];

        copy[0] = '학생코트 추천';
        글제목변경(copy);
        } }>학생코트추천</button>

        <button className='btn' onClick={() => {
          let copy = [...글제목];

          copy.sort();
          글제목변경(copy);
         } }>가나다순정렬</button> */}

      

      {/* input에 쓰이는 다양한 이벤트 => onChange={} onInput={} onMouseOver={} onScroll={} */}
      <span><strong>글제목 : </strong></span>
      <input type="text" style={{borderRadius:'5px'}} onChange={(e) => {입력값변경(e.target.value)}}></input>
      <button className='btn' onClick={() => {
        let copy = [...글제목];

        if(입력값 != '') {
          copy.unshift(입력값); // array에 자료 끼워넣기
        }

        글제목변경(copy);
      }}>발행</button>



      {/* 동적인 UI 만드는 step */}
      {/* 1. html css로 미리 디자인완성 */}
      {/* 2. UI의 현재 상태를 state로 저장 */}
      {/* 3. state에 따라 UI가 어떻게 보일지 작성 */}
      {
        // 삼항연산자 (html중간에 조건문을 쓰려면 삼항연산자를 활용하자)
        // 조건식 ? 참일때실행할코드 : 거짓일때실행할코드
        modal == '열림' ? <Modal title={title } 글제목={글제목 }></Modal> : null
      }

    </div>
  );
}

export default App;
