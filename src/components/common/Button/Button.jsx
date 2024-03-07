import styled, { css } from "styled-components";

const BtnLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 10px;
`;

const ButtonStyle = styled.button`
  ${({ type }) => {
    switch (type) {
      case "large":
        return css`
          width: 200px;
          height: 50px;
        `;
      case "medium":
        return css`
          width: 130px;
          height: 45px;
        `;
      case "small":
        return css`
          width: 100px;
          height: 40px;
        `;
      default:
        return;
    }
  }};

  background-color: ${({ theme }) => {
    switch (theme) {
      case "mint":
        return "var(--color-mint)";
      case "coral":
        return "var(--color-coral)";
      default:
        return "white";
    }
  }};

  border: ${({ stroke }) => {
    switch (stroke) {
      case "true":
        return "3px solid var(--color-mint)";
      case "false":
        return "3px solid var(--color-coral)";
      default:
        return "none";
    }
  }};

  font-weight: ${({ bold }) => {
    switch (bold) {
      case "true":
        return "bold";
      default:
        return "none";
    }
  }};

  color: ${({ fontco }) => {
    switch (fontco) {
      case "red":
        return "var(--color-red)";
      default:
        return "black";
    }
  }};

  border-radius: 8px;
  padding: 1px 6px;
  cursor: pointer;
  &:active {
    opacity: 0.7;
  }
`;

function Button({ children, onClickFnc, ...props }) {
  return (
    <ButtonStyle onClick={onClickFnc} {...props}>
      {children}
    </ButtonStyle>
  );
}
export { Button, BtnLayout };
