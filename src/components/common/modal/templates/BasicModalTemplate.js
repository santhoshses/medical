import React from "react";
import { styled } from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 40vh;
  width: 50vw;
`;
const Title = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #FFFFFF;
  margin-left: 13px;
`;
const ModalHeader = styled.div`
  /* flex: 1; */
  border-bottom: 1px solid #585858;
  display: flex;
  justify-content: space-between;
  background: #3b5998;
  height:7vh;
  align-items: center;
  .close {
    color: #FFFFFF;
    position: relative;
    right: 8px;
    cursor: pointer;
  }
`;
const ModalBody = styled.div`
  flex: 1;
  border-bottom: 1px solid #585858;
  overflow: auto;
`;

export const BasicModalComponentTemplate = ({title,content,onClose}) => {
   
  return (
    <ModalContainer>
      <ModalHeader>
        <Title>{title}</Title>
        <CloseIcon onClick={onClose} className="close" />
      </ModalHeader>
      <ModalBody>
        {content}
      </ModalBody>
    </ModalContainer>
  );
};

export default BasicModalComponentTemplate;
