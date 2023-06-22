import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import InfoIcon from "@mui/icons-material/Info";
import ModalComponent from "../components/common/modal/ModalComponent";
import InstructionsComponent from "../components/InstructionsComponent"
import BasicModalComponentTemplate from "../components/common/modal/templates/BasicModalTemplate";
const Header = styled.header`
  background: #1b2c58;
  border-bottom: 1px solid #bababa;
  height: 9vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .content {
    padding: 1em;
  }
  .icon,
  .text {
    color: #ffffff;
    cursor: pointer;
  }
  .text {
    position: relative;
    bottom: 5px;
    margin-left: 5px;
  }
`;
const StyledQuestionPaperContent = styled.div`
  padding: 1em;

  .note {
    font-weight: 600;
    font-size: 14px;
    color: #ff0000;
    text-align: center;
  }
  .title {
    font-weight: 700;
    font-size: 18px;
  }
  table,
  th,
  td {
    border: 1px solid black;
  }
  .table-wrapper {
    max-height: 75vh;
    overflow: auto;
  }
`;

const QuestionPaperContent = () => {
  const allQuestionsObj = useSelector((state) => state);
  const questions = allQuestionsObj["allQuestions"]?.questions;
  return (
    <StyledQuestionPaperContent>
      <p className="note">
        Note that timer is running. Kindly close the question paper page to
        attend the questions.
      </p>
      <p className="title"> National NEET Mock - 2023</p>
      <div className="table-wrapper">
        <table style={{ width: "100%" }}>
          {questions.map((item) => {
            return (
              <tr>
                <td style={{ width: "10%" }}>{item.id}</td>
                <td style={{ width: "90%" }}>{item.description}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </StyledQuestionPaperContent>
  );
};

const HeaderContainer = () => {
  const [open, setOpen] = React.useState(false);
  const [openInstruction, setOpenInstruction] = React.useState(false);
  return (
    <Header>
      <ModalComponent isOpen={open}>
        <BasicModalComponentTemplate
          title="Question Paper"
          content={<QuestionPaperContent />}
          onClose={()=>setOpen(false)}
        />
      </ModalComponent>
      <ModalComponent isOpen={openInstruction}>
        <BasicModalComponentTemplate
          title="Instructions"
          content={<InstructionsComponent />}
          onClose={()=>setOpenInstruction(false)}
        />
      </ModalComponent>
      <div className="content">
        <TextSnippetIcon className="icon"></TextSnippetIcon>
        <span className="text" onClick={()=>setOpen(true)}>Question Paper</span>
      </div>
      <div className="content">
        <InfoIcon className="icon"></InfoIcon>
        <span className="text" onClick={()=>setOpenInstruction(true)}>Instructions</span>
      </div>
    </Header>
  );
};
export default HeaderContainer;
