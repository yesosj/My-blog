/*eslint-disable*/

import React, {useState, useEffect} from 'react';
import logo from './logo.svg';

import {Nav, Navbar, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useHistory, Link, Route, Switch} from 'react-router-dom';

function App() {
 
let [글제목, 글제목변경] = useState('대부도 여행', '선재도 여행' )

  return (
    <div className="App">
      <div className="black-nav">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="/">Action</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/" disabled>
                  Link
                </Nav.Link>
              </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>





        <Nav className="flex-column">
          <Nav.Link as={Link} to="/">전체보기</Nav.Link>
          <ul> 
          <Nav.Link as={Link} to="/">TRAVEL</Nav.Link>
            <li>
              <Nav.Link as={Link} to="/">국내</Nav.Link>
            </li>
            <li>
              <Nav.Link as={Link} to="/">해외</Nav.Link>
            </li>
          </ul>

          <Nav.Link as={Link} to="/">FOOD</Nav.Link>
          <Nav.Link as={Link} to="/">REVIEW & SELL</Nav.Link>

         
          <ul>
            <Nav.Link as={Link} to="/">MEMORIES</Nav.Link>
            <li>
              <Nav.Link as={Link} to="/">SJ & EJ</Nav.Link>
            </li>
          </ul>


          
          <ul>
            <Nav.Link as={Link} to="/">HOBBY</Nav.Link>
            <li>
            <Nav.Link as={Link} to="/">독서</Nav.Link>
            </li>
            <li>
            <Nav.Link as={Link} to="/">시</Nav.Link>
            </li>
            <li>
            <Nav.Link as={Link} to="/">기타</Nav.Link>
            </li>
          </ul>


        </Nav>
      </div>
    </div>
  )}
export default App;
  


//리액트는 state를 변경하면 html은 알아서 재랜더링되어서 html을 어떻게 정렬할까가 아니라
//state를 어떻게 정렬할까 이다. state가 UI의 현재상태를 보관하는 저장소역할을 한다.

//1. css파일이 여러개 적용 되어있는 상태라면 가장 뒤에 있는 파일의 css속성이 우선 적용됩니다!! 


// import를 할 때 위의 순서처럼 해야지만 

// 제 맘대로 수정한 css 속성들이 bootstrap css 속성들을 덮어쓰게 되는거죠.

 

 

// 2. css는 우선순위가 있습니댜!!

 

// css는 기본적으로 가장 나중에 쓴 속성이 우선적용되고, 

// !important > inline style > id > class , 수도클래스 > tag , 수도엘리먼트 순으로 우선순위를 가집니다.

 

 

 

// 3. css는 우선도 점수가 있습니다!!

 

// 인라인 스타일 = 1000점

// id = 100점

// 클래스 , 수도클래스 = 10점

// 태그선택자 , 수도엘리먼트 = 1점

 