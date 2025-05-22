import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate.jsx';  // .jsx 확장자 추가
import TodoHead from './components/TodoHead.jsx';          // .jsx 확장자 추가
import TodoList from './components/TodoList.jsx';          // .jsx 확장자 추가
import TodoCreate from './components/TodoCreate.jsx';      // .jsx 확장자 추가

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
