import { ChangeEvent, memo } from "react";
import styled from "styled-components";

export interface BasicInputProps {
  title: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const BasicInput = memo(({ title, value, onChange }: BasicInputProps) => {
  return (
    <InputLayout>
      <p>{title}</p>
      <InputStyles value={value} onChange={onChange} />
    </InputLayout>
  );
});

export default BasicInput;

const InputLayout = styled.div`
  display: flex;
  align-items: center;
`;

const InputStyles = styled.input`
  width: 200px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #333;
  border-radius: 8px;

  &:focus {
    outline-color: #333;
  }
`;