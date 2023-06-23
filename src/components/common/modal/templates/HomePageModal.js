import { Modal, Box, Typography } from '@mui/material';
import { styled } from "styled-components";
import completedLogo from '../../../../assets/svg/done.svg';
import expiredLogo from '../../../../assets/svg/expired.svg';
import { ButtonOutlined } from '../../../common/ButtonComponent';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '12px',
    p: 4,
    "&:focus": {
        outline: "none"
      }
  };
  const StyledHomeModal = styled.div`
    .modal-img-container {
        text-align: center;
    }
    .login-btn {
        color: #FFFFFF;
        border-radius: 32px;
        background: linear-gradient(350deg, #052A74 0%, #0161F3 96.30%);
        padding: 10px 30px;
        margin: 10px 0;
        font-size: 14px;
    }
    #modal-modal-description {
        font-size: 14px;
        color: #646E82;
    }
    #modal-modal-title {
        font-weight: bold;
        color: #040C1B;
    }
  `;
const HomePageModal = ({open, handleClose, modalType}) => {
    const modalObj = {
        "0": {
            header: "Exam is Submited!",
            subHeader: "Login to the Mobile App for viewing the Answers and Analysis.",
            icon: completedLogo
        },
        "6": {
            header: "Exam is Expired!",
            subHeader: "Login to the Mobile App for Test Attempt.",
            icon: expiredLogo
        },
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <StyledHomeModal>
                    <Box sx={style}>
                        <div className='modal-img-container'>
                            <img src={modalObj[modalType]?.icon} alt='completed' />
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                {modalObj[modalType]?.header}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {modalObj[modalType]?.subHeader}
                            </Typography>
                            <ButtonOutlined onClick={handleClose} className="login-btn">Close</ButtonOutlined>
                        </div>
                    </Box>
                </StyledHomeModal>
        </Modal>
    )
}

export default HomePageModal;