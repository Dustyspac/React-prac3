import { ReactNode } from "react";
import styled from "styled-components";

interface FeaturesContainerProps {
  title: string;
  children: ReactNode;
  outlined?: boolean;
}

const FeaturesContainer = ({
  children,
  title,
  outlined,
}: FeaturesContainerProps) => {
  return (
    <Layout $outlined={outlined}>
      <Paragragh>{title}</Paragragh>
      {children}
    </Layout>
  );
};

export default FeaturesContainer;

const Layout = styled.div<{ $outlined?: boolean }>`
  ${({ $outlined }) => $outlined && `border: 4px solid #ddd; padding-top: 20px`}
`;

const Paragragh = styled.p`
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: bold;
`;
