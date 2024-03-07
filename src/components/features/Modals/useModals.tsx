import { useState } from "react";

const useModals = () => {
  const [isLeftModalOpen, setIsLeftModalOpen] = useState(false);
  const [isRightModalOpen, setIsRightModalOpen] = useState(false);

  const leftModalText =
    "닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.";

  const rightButtonText = `닫기 버튼 1개가 있고,
    외부 영역을 누르면 모달이 닫혀요.`;

  const leftModalButtonProps = {
    type: "small",
    theme: "mint",
  };

  const rightModalButtonProps = {
    type: "large",
    stroke: "false",
    bold: "true",
    fontco: "red",
  };

  return {
    isLeftModalOpen,
    isRightModalOpen,
    leftModalText,
    rightButtonText,
    leftModalButtonProps,
    rightModalButtonProps,
    setIsLeftModalOpen,
    setIsRightModalOpen,
  };
};

export default useModals;