import React from 'react'
//# React

// 컴포넌트 기반 아키텍처
// Virtual DOM
// 단방향 데이터 흐름

//! React 기본 개념
// component(컴포넌트): js(ts)함수나 클래스로 작성, 입력을 받아 화면에 표시될 요소를 반환
// Props: properties의 줄임말, 컴포넌트 간에 데이터를 전달하는 데 사용
// State: 컴포넌트 내에서 관리되는 데이터, 변경 가능
//        (State가 변경되면 해당 컴포넌트는 재렌더링됩니다.)
// Lifecycle methods
// Hooks: 함수형 컴포넌트에서 React state와 lifecycle 기능을 연결할 수 있게 해주는 기능

//! React의 필요성
// 유지 보수 용이
// 성능 향상
// 커뮤니티와 생태계
// 다양한 플랫폼에서의 사용

// JSX: Javascript + XML
// UI구조를 직관적이고 명확하게 표현 가능

// JSX
// 1. 닫힘 태그가 반드시 있어야 한다.
// 2. 자바스크립트의 표현식 사용 가능: 중괄호 안에 js 표현식 작성 가능
// 3. 스타일과 클래스 지정: style속성은 js객체로 전달되어야 하고, class 대신 className을 사용용
// 4. 자식요소: 태그 사이에 존재하는 내용은 모두 자식요소로 간주

export default function index() {
  return (
    <>
    </>
  );
}
