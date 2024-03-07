# Component Practice

항해99 리액트 3차 과제
[배포링크](https://vjiji.github.io/react-prac3/)

## 컴포넌트 구조

1. App.js : 각각의 Feature컴포넌트를 렌더링하는 메인 페이지
2. components
   - common : 재사용 가능한 Button, Input, Modal, Select 컴포넌트
   - features : 메인페이지 내 각 요소를 기능 단위로 묶은 컴포넌트
   - layout : features 컴포넌트를 렌더링할 때 적용되는 레이아웃 컴포넌트
3. utils : 프로젝트에 사용되는 함수
4. GlobalStyle : 프로젝트에서 공통으로 사용할 수 있는 스타일

## 질문

1. feeatures/Modals.tsx
- 모달의 각각 UI가 다르고, 앞으로도 다양할 수 있을 것 이라고 생각해서 모달 UI는 필요할 때 직접 만들고, 백그라운드만 공통으로 받을 수 있도록 했습니다. 이 접근이 맞을까요?
- useState 훅을 Modal컴포넌트 안에서 사용하고 싶어 고민했는데, 부모 컴포넌트에서 렌더링되는 모달 안에 함수를 전달할 방법을 찾지 못했습니다. 혹시 방법이 있을지 궁금합니다.
- 컴포넌트의 로직과 렌더링 분리를 위해 커스텀 훅을 사용했는데, 그 중에서 handleModalOpen 함수는 해당 컴포넌트에서 관심사가 큰 것 같아 훅에서 선언하지 않고 Modals컴포넌트에서 선언했습니다. 이런 방법은 어떻게 생각하실지 궁금합니다.


2. features/button.jsx
- overview : ishidden을 State로 선언해서 true인지 false인지 판별한 후 true라면 ishidden을 적용하는 방식으로 구현하였는데, 더 효율적인 방법이 있는지 궁금합니다.


3. common/Button.jsx
- styled-component : switch문으로 요소 하나하나를 검사해서 조건별로 styled을 적용하는 방법을 사용했는데 다른 방법이 있을까요?
