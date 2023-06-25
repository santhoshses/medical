import { Grid, Box, Button } from "@mui/material";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import InstructionsComponent from "./InstructionsComponent";
import OtherInstructionsComponent from "./OtherInstructionsComponent";
import BasicModalComponentTemplate from "./common/modal/templates/BasicModalTemplate";
import ModalComponent from "./common/modal/ModalComponent";
import UserImageComponent from './UserImageComponent';

import { useState } from "react";

const StyledInstructionWrapper = styled.div`
    .instruction-navbar {
        height: 64px;
        background-color: #3C5997;
    }
    .instruction-navbar-sub-header {
        background-color: #BCE8F5;
        color: #676568;
        font-size: 22px
    }
    .instruction-container {
        border-right: 1px solid;
        height: calc(100vh - 80px);
    }
    .btn-next-wrapper {
        border-top: 1px solid #CCCCCC;
        padding: 5px;
    }
    .btn-next-wrapper > button {
        text-transform: none;
        color: #000;
        border: 1px solid #C8C8C8;
    }
    .txt-right {
        text-align: right;
    }
    .other-btn-wrapper {
        display: flex;
        justify-content: space-between;
    }
    .other-btn-wrapper > .final-step-btn {
        color: #fff;
        background: #38AAE9;
    }
    .user-img {
        width: 100px;
        height: 100px;
    }
    .img-container {
        text-align: center;
        margin-top: 20px;
    }
`;

const StyledModalWrapper = styled.div`
    position: relative;
    .instruction-txt {
        padding: 18px 35px;
    }
    .footer-content {
        border-top: 1px solid #E5E5E5;
        padding-top: 10px;
        text-align: center;
    }
    .margin-left-btn {
        margin-left: 10px;
    }
    .modal-header {
        color: #000;
        font-size: 25px;
    }
    .footer-content > button {
        color: #000;
        border: 1px solid #E5E5E5;
    }
    .other-footer {
        padding-bottom: 10px;
    }
    .footer-instruction {
        margin-top: 5vh;
    }
    .instruction-txt-margin {
        margin-top: 35px;
    }
`;
const InstructionsWrapperComponent = () => {
    const [showInstructions, setShowInstructions] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [checkBoxChecked, setCheckBoxChecked] = useState(false);
    const navigate = useNavigate();
    const getInstructionContent = () => {
        return (
            <StyledModalWrapper>
                <div className="instruction-txt instruction-txt-margin">
                    Please accept the NON DISCLOSURE AGREEMENT before proceeding.
                </div>
                <div className="footer-content footer-instruction">
                    <Button variant="outlined" onClick={() => setShowModal(false)}>Ok</Button>
                </div>
            </StyledModalWrapper>
        )
    }
    const getOtherInstructionContent = () => {
        return (
            <StyledModalWrapper>
                <div className="instruction-txt">
                    <div className="modal-header">Are you sure you want to start the test?</div>
                    <p>Once started, the timer cannot be paused.</p>
                    <p>Taking the test is only possible either through the Mobile App or a Browser. It is not feasible to use both simultaneously.</p>
                </div>
                <div className="footer-content other-footer">
                    <Button variant="outlined" onClick={() => {navigate('/question/1')}}>Yes</Button>
                    <Button className="margin-left-btn" variant="outlined" onClick={() => setShowModal(false)}>No</Button>
                </div>
            </StyledModalWrapper>
        );
    }
    return (
        <StyledInstructionWrapper>
            <div className="instruction-navbar"></div>
            <div>
                <Grid container>
                    <Grid xs={10} className="instruction-container">
                        <Box className="instruction-navbar-sub-header" px={2} py={1}>{showInstructions ? 'Instructions' : 'Other Important Instructions'}</Box>
                        <Box px={2} py={1}>
                            {showInstructions ? <InstructionsComponent hideNote={true} /> : <OtherInstructionsComponent checkBoxChecked={checkBoxChecked} setCheckBoxChecked={setCheckBoxChecked} />}
                        </Box>
                        {showInstructions ?
                            <Box className='btn-next-wrapper txt-right'>
                                <Button variant="outlined" onClick={()=>setShowInstructions(false)}>Next</Button>
                            </Box>
                            :
                            <Box className='btn-next-wrapper other-btn-wrapper'>
                                <Button variant="outlined" onClick={()=>setShowInstructions(true)}>Previous</Button>
                                <Button className="final-step-btn" variant="contained" onClick={()=>setShowModal(true)}>I am ready to begin</Button>
                            </Box>
                        }
                    </Grid>
                    <Grid xs={2} className="img-container">
                        <UserImageComponent />
                    </Grid>
                </Grid>
            </div>
            <ModalComponent isOpen={showModal}>
                <BasicModalComponentTemplate
                    title="Instructions"
                    content={checkBoxChecked ? getOtherInstructionContent() : getInstructionContent()}
                    onClose={()=>setShowModal(false)} />
            </ModalComponent>
        </StyledInstructionWrapper>
    );
}

export default InstructionsWrapperComponent;