import { MdArrowForwardIos } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { BtnLayout, Button } from "components/common/Button";

function ButtonSection() {
  const handleAlert = () => {
    alert("버튼을 만들어보세요");
  };

  const handlePrompt = () => {
    prompt("어렵나요?", "");
  };

  return (
    <>
      <BtnLayout>
        <Button type="large" onClickFnc={handleAlert} stroke="true" bold="true">
          Large Primary Button <MdArrowForwardIos />
        </Button>
        <Button type="medium" theme="mint">
          Medium
        </Button>
        <Button type="small" theme="mint">
          Small
        </Button>
      </BtnLayout>
      <BtnLayout>
        <Button type="large" onClickFnc={handlePrompt} stroke="false" bold="true" fontco="red">
          Large Negative Button <FaBell />
        </Button>
        <Button type="medium" theme="coral" fontco="red">
          Medium
        </Button>
        <Button type="small" theme="coral" fontco="red">
          Small
        </Button>
      </BtnLayout>
    </>
  );
}

export default ButtonSection;
