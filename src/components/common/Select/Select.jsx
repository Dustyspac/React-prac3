import { useState } from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row; /* 가로로 배치 */
  align-items: flex-start;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: white;
  position: relative;
  width: 300px;
  height: 40px;
  padding: 0px 28px;
  cursor: pointer;
  text-align: left; /* 텍스트를 왼쪽 정렬 */
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const DropdownIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;

const List = styled.ul`
  display: ${({ $show }) => ($show ? "flex" : "none")};
  flex-direction: column;
  margin-top: 5px;
`;

const ListContainer = styled.div`
  border-radius: 12px;
  ${({ $show }) => $show && "border: 1px solid rgb(221, 221, 221);"}
  overflow: hidden;
  background-color: white;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
  z-index: 2;
`;

const OptionButton = styled.button`
  width: 100%;
  height: 40px;
  padding: 0px 28px;
  background: none;
  cursor: pointer;
  margin-right: 5px;
  border: none; /* 버튼의 border 제거 */
  text-align: left; /* 텍스트를 왼쪽 정렬 */
  &:hover {
    background-color: #f0f0f0;
  }
`;

const StyledButton = styled(Button)`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
`;

const Select = (props) => {
  const [selectBtn, setSelectBtn] = useState("리액트");
  const selectList = ["리액트", "자바", "스프링", "리액트네이티브"];

  const clickHandler = (item) => {
    setSelectBtn(item);
    props.setShowOptions(false);
  };

  return (
    <div>
      <ButtonContainer>
        <StyledButton onClick={() => props.showOptions(!props.show)}>
          {selectBtn} <DropdownIcon>▼</DropdownIcon>
        </StyledButton>
      </ButtonContainer>
      <ListContainer $show={props.show}>
        <List $show={props.show}>
          {selectList.map((item, index) => (
            <ListItem key={index}>
              <OptionButton onClick={() => clickHandler(item)}>{item}</OptionButton>
            </ListItem>
          ))}
        </List>
      </ListContainer>
    </div>
  );
};

export default Select;
