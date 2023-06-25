import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import {
  ButtonOutlined,
  ButtonContained,
} from "../components/common/ButtonComponent";
import ModalComponent from "./common/modal/ModalComponent";
import BasicModalComponentTemplate from "./common/modal/templates/BasicModalTemplate";

const FooterPanel = styled.div`
  border-top: 1px solid #bababa;
  height: 5vh;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    width: 50vw;
    Button {
      margin-right: 40px;
    }
  }
  .right {
    width: 50vw;
    display: flex;
    justify-content: right;

    Button {
      margin: 0 0px 0px 41px;
    }
  }
`;

const StyledSubmitTestInfoContent = styled.div`
  .info {
    font-size: 20px;
    font-weight: 600;
    padding-left: 10px;
  }
  .info-2 {
    font-size: 15px;
    font-weight: 600;
    padding-left: 10px;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #e5e6e7;
    padding: 11px;
  }
`;

const SubmitTestInfoContent = ({ submitTestCallBack, setOpenCallBack, questionStatusCount }) => {
  return (
    <StyledSubmitTestInfoContent>
      <p className="info">Do you want to submit the test?</p>
      <p className="info-2">You have {questionStatusCount.questionNotAnswered + questionStatusCount.questionNotVisited} unattempted questions</p>
      <div className="footer">
        <ButtonContained
          onClick={() => {
            submitTestCallBack();
            setOpenCallBack(false);
          }}
          variant="contained"
        >
          Submit test
        </ButtonContained>
        <ButtonContained
          variant="contained"
          onClick={() => {
            setOpenCallBack(false);
          }}
        >
          Close
        </ButtonContained>
      </div>
    </StyledSubmitTestInfoContent>
  );
};

const FooterComponent = ({
  clearCallBack,
  savecallBack,
  submitTestCallBack,
  questionStatusCount
}) => {
  const [open, setOpen] = React.useState(false);
  const setOpenCallBack = (status) => {
    setOpen(status);
  };
  console.log(questionStatusCount,'PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP')
  return (
    <FooterPanel>
      <ModalComponent isOpen={open}>
        <BasicModalComponentTemplate
          title="Final Test Submit"
          content={
            <SubmitTestInfoContent
              setOpenCallBack={setOpenCallBack}
              submitTestCallBack={submitTestCallBack}
              questionStatusCount={questionStatusCount}
            />
          }
          onClose={() => setOpen(false)}
        />
      </ModalComponent>
      <div className="left">
        <ButtonOutlined
          onClick={() => {
            savecallBack(true);
          }}
          variant="outlined"
        >
          Mark for Review & Next
        </ButtonOutlined>
        <ButtonOutlined onClick={() => clearCallBack()} variant="outlined">
          Clear Response
        </ButtonOutlined>
      </div>
      <div className="right">
        <ButtonContained
          onClick={() => {
            savecallBack(false);
          }}
          variant="contained"
        >
          Save & Next
        </ButtonContained>
        <ButtonContained
          variant="contained"
          onClick={() => {
            setOpen(true);
          }}
        >
          Submit
        </ButtonContained>
      </div>
    </FooterPanel>
  );
};
export default FooterComponent;
