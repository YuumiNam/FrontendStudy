/* eslint-disable */
import logo from './logo.svg';
import {Navbar, Container, Nav} from 'react-bootstrap';
import './App.css';
import {useEffect, useState} from 'react';
import data from './data.js';
import {Routes, Route, Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

function ShoesList(props) {

  const navigate = useNavigate();

  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'}
        width="80%" 
        style={{cursor:'pointer'}}
        onClick={() => {
          navigate('/detail/' + props.i)
        }}></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  )
}

function MainPage() {
  return (
    <>
      <div className='main-bg'></div>
    
      <div className="container">
        <div className="row">
          {
            data.map(function(a, i) {
              return (
                <ShoesList shoes={a} i={i} key={i}></ShoesList>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

function SecondPage(props) {

  // 라우터에서 썼던 url파라미터가 여기에 저장됨
  let {id} = useParams();

  let idNum = parseInt(id);

  // LifeCycle
  // 언제쓰면좋나?
  // 1. 재렌더링마다 코드실행하고 싶으면  useEffect(() => {  })
  // 2. mount시 1회 코드실행하고 싶으면  useEffect(() => {  }, [])
  // 3. useEffect(() => { return () => { unmount시 1회코드실행하고싶으면 } }, [])
  // 4. useEffect실행 전에 뭔가 실행하려면  언제나 return () => {}
  // 5. 특정 state 변경시에만 실행하려면 [state명]
  let [alert, setAlert] = useState(true);
  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);
    console.log(2);

    // useEffect 동작 전에 실행됨
    return () => {
      clearTimeout(a); // 타이머 초기화주는 함수임
      console.log(1);
    }
  }, []); // [] 이렇게 해주면 mount시 한번만 실행됨

  return (
    <div className="container">
      {
        alert == true
        ? <div className='alert alert-warning'>
            2초 이내 구매시 할인
          </div>
        : null
      }
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes"+ (idNum+1) +".jpg"} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div>
  )
}

function App() {

  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" style={{textDecoration: "none"}}>
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to="/detail/0" style={{textDecoration: "none"}}>
              <Nav.Link href="#features">Cart</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
            <MainPage></MainPage>
          }> 
        </Route>
        <Route path='/detail/:id' element={
          <SecondPage shoes={shoes}></SecondPage>
        }></Route>
      </Routes>

      {/* AJAX AXIOS */}
      <button onClick={() => {
        axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((결과) => {
            console.log(결과.data);
          })
          .catch(() => {
            console.log('실패함ㅅㄱ');
          })
      }}>버튼</button>
    </div>
  );
}

export default App;
