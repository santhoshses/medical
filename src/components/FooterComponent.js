import React from "react";
import { styled } from "styled-components";
import {
  ButtonOutlined,
  ButtonContained,
} from "../components/common/ButtonComponent";

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

const FooterComponent = ({clearCallBack,savecallBack}) => {
  return (
    <FooterPanel>
      <div className="left">
        <ButtonOutlined onClick={()=>{savecallBack(true)}}  variant="outlined">
          Mark for Review & Next
        </ButtonOutlined>
        <ButtonOutlined onClick={()=>clearCallBack()} variant="outlined">Clear Response</ButtonOutlined>
      </div>
      <div className="right">
        <ButtonContained onClick={()=>{savecallBack(false)}}  variant="contained">Save & Next</ButtonContained>
        <ButtonContained variant="contained">Submit</ButtonContained>
      </div>
    </FooterPanel>
  );
};
export default FooterComponent;
