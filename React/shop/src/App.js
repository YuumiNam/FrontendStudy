/* eslint-disable */
import logo from './logo.svg';
import {Navbar, Container, Nav} from 'react-bootstrap';
import './App.css';
import {useState} from 'react';
import data from './data.js';
import {Routes, Route, Link} from 'react-router-dom'

function ShoesList(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+ props.i +'.jpg'} width="80%"></img>
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
                <ShoesList shoes={a} i={i+1} key={i}></ShoesList>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

function SecondPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
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
            <Link to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to="/detail">
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
        <Route path='/detail' element={
          <SecondPage></SecondPage>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
