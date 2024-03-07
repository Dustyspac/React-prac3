import Select from "components/common/Select";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row; /* 가로로 배치 */
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
  height: 120px;
  margin-bottom: 10px;
  ${({ $isHidden }) => $isHidden && "overflow : hidden;"}
`;

const SelectSection = () => {
  const [showOptions1, setShowOptions1] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const toggleOptions1 = () => {
    if (showOptions2) setShowOptions2(false);
    setShowOptions1(!showOptions1);
    setIsHidden(false);
  };

  const toggleOptions2 = () => {
    if (showOptions1) setShowOptions1(false);
    setShowOptions2(!showOptions2);
    setIsHidden(true);
  };

  const handleOptionClick1 = (item) => {
    toggleOptions1();
  };

  const handleOptionClick2 = (item) => {
    toggleOptions2();
  };

  return (
    <Container $isHidden={isHidden}>
      <Select show={showOptions1} showOptions={toggleOptions1} onClick={handleOptionClick1} setShowOptions={setShowOptions1} />
      <Select show={showOptions2} showOptions={toggleOptions2} onClick={handleOptionClick2} setShowOptions={setShowOptions2} />
    </Container>
  );
};

export default SelectSection;
