import styled from "styled-components";
import FeaturesContainer from "components/layout/FeaturesContainer";
import Inputs from "components/features/Inputs";
import Modals from "components/features/Modals";
import SelectSection from "components/features/Selects";
import ButtonSection from "components/features/Buttons";

function App() {
  return (
    <AppLayout>
      <FeaturesContainer title="Button">
        <ButtonSection />
      </FeaturesContainer>
      <FeaturesContainer title="Input">
        <Inputs />
      </FeaturesContainer>
      <FeaturesContainer title="Modal">
        <Modals />
      </FeaturesContainer>
      <FeaturesContainer title="Select" outlined>
        <SelectSection />
      </FeaturesContainer>
    </AppLayout>
  );
}

export default App;

const AppLayout = styled.div`
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;