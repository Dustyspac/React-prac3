import styled from "styled-components";
import { BasicInput, PriceInput } from "components/common/Input";
import { Button } from "components/common/Button";
import useInputs from "./useInput";

const Inputs = () => {
  const {
    text,
    price,
    handleTextInputChange,
    handlePriceInputChange,
    handleButtonClick,
  } = useInputs();

  return (
    <InputsLayout>
      <BasicInput title="이름" value={text} onChange={handleTextInputChange} />
      <PriceInput
        title="가격"
        value={price}
        onChange={handlePriceInputChange}
      />
      <Button type="small" theme="mint" onClickFnc={handleButtonClick}>
        저장
      </Button>
    </InputsLayout>
  );
};

export default Inputs;

const InputsLayout = styled.div`
  display: flex;
  gap: 30px;
`;