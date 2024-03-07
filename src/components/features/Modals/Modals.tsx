import styled from "styled-components";
import { Button } from "components/common/Button";
import { Modal } from "components/common/Modal";
import useModals from "./useModals";

const Modals = () => {
  const {
    isLeftModalOpen,
    isRightModalOpen,
    leftModalText,
    rightButtonText,
    leftModalButtonProps,
    rightModalButtonProps,
    setIsLeftModalOpen,
    setIsRightModalOpen,
  } = useModals();

  const handleLeftModalOpen = () => setIsLeftModalOpen(!isLeftModalOpen);

  const handleRightModalOpen = () => setIsRightModalOpen(!isRightModalOpen);

  return (
    <>
      <ButtonBox>
        <Button onClickFnc={handleLeftModalOpen} {...leftModalButtonProps}>
          open modal
        </Button>
        <Button onClickFnc={handleRightModalOpen} {...rightModalButtonProps}>
          open modal
        </Button>
      </ButtonBox>

      <Modal isOpen={isLeftModalOpen}>
        <LeftModalStyles>
          <p>{leftModalText}</p>
          <ButtonBoxInModal>
            <Button
              type="small"
              theme="coral"
              fontco="red"
              onClickFnc={handleLeftModalOpen}
            >
              닫기
            </Button>
            <Button
              type="small"
              theme="mint"
              onClickFnc={() => console.log("on!")}
            >
              확인
            </Button>
          </ButtonBoxInModal>
        </LeftModalStyles>
      </Modal>
      <Modal isOpen={isRightModalOpen} handleClose={handleRightModalOpen}>
        <RightModalStyles>
          <p>{rightButtonText}</p>
          <ButtonInRightModal onClick={handleRightModalOpen}>
            X
          </ButtonInRightModal>
        </RightModalStyles>
      </Modal>
    </>
  );
};

export default Modals;

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

const LeftModalStyles = styled.div`
  padding: 24px;
  border-radius: 12px;
  background-color: #fff;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
`;

const ButtonBoxInModal = styled.div`
  gap: 5px;
  display: flex;
  justify-content: flex-end;
`;

const RightModalStyles = styled(LeftModalStyles)`
  width: 300px;
  height: 200px;
  white-space: pre-line;
  position: relative;
`;

const ButtonInRightModal = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 40px;
  height: 40px;
  background: #eee;
  border: 1px solid #ddd;
  border-radius: 25px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border: 1px solid #333;
  }
`;