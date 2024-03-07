import { ChangeEvent, MouseEventHandler, useCallback, useState } from "react";

const useInputs = () => {
  const [text, setText] = useState("");
  const [price, setPrice] = useState("0");

  const handleTextInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.currentTarget.value);
    },
    [text]
  );

  const handlePriceInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPrice(e.currentTarget.value);
    },
    [price]
  );

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (!(text && price)) {
      window.alert("이름과 가격을 모두 입력해주세요.");
      return;
    }
    window.alert(`name: ${text},price: ${price}`);
  };

  return {
    text,
    price,
    handleTextInputChange,
    handlePriceInputChange,
    handleButtonClick,
  };
};

export default useInputs;