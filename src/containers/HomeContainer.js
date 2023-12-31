import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import HomePageModal from '../components/common/modal/templates/HomePageModal';
import logo from "../assets/png/logo.png";
import cardIcon from "../assets/png/Group.svg";
import { setCourseDetails, startTest } from "../redux/actions/courseActions";
import { useNavigate } from "react-router-dom";
import HomeCardComponent from "../components/HomeCardComponent";

const StyledHomeContent = styled.div`
  .header-container {
  }
  .toolBar-right {
    margin-left: auto;
  }
  .font-bold {
    font-weight: bold;
  }
  .name-container {
    color: #404349;
    /*font-family: 'Inter';*/
  }
  .name-sub-container {
    font-size: 10px;
    color: #646e82;
    /*font-family: 'Inter';*/
  }
  .img-container {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    margin: 0 30px;
  }
  .logout-link {
    color: #3369d6;
    /*font-family: 'Inter';*/
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
  }
  .page-sub-heading {
    /*font-family: 'Inter';*/
    font-size: 28px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    color: #040c1b;
  }
  .heading-background {
    background-color: #e5ecfa;
    padding: 25px 0;
  }
  .heading-background-tabs {
    background-color: #e5ecfa;
    padding: 0;
  }
  .tab-header {
    /*font-family: 'Inter';*/
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: #040c1b;
  }
  .Mui-selected {
    color: #040c1b !important;
  }
  .card-container {
    margin: auto;
  }
  @media (min-width: 560px) {
    .card-container {
      width: 560px;
    }
  }
  .card-img-container {
    margin: 10px 16px;
    height: 68px;
    width: 68px;
    background: rgba(150, 181, 255, 0.1);
    border: 1px solid #e6e6e9;
    border-radius: 12px;
  }
  .card-img {
    margin: 20%;
  }
  .card-main-content {
    margin-top: auto;
    margin-bottom: auto;
  }
  .card-main-content-header {
    /*font-family: 'Inter';*/
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #040c1b;
  }
  .card-main-content-sub-header {
    /*font-family: 'Inter';*/
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #646e82;
  }
  .card-main-content-link {
    /*font-family: 'Inter';*/
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #002878;
  }
  .card-badge {
    gap: 10px;
    border-radius: 8px 8px 0px 0px;
    width: 59px;
    /*font-family: 'Inter';*/
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    color: #ffffff;
    float: right;
    margin-right: 24px;
  }
  .card-main-container {
    margin: 8px 0;
    cursor: pointer;
  }
  .badge-0 {
    background: #e95757;
  }
  .badge-5 {
    background: #e95757;
  }
  .badge-4 {
    background: #646e82;
    opacity: 0.6;
  }
  .badge-3 {
    background: #15af5b;
    opacity: 0.6;
  }
  .badge-6 {
    background: #f37559;
    opacity: 0.6;
  }
`;

const HomeContainer = () => {
  // const [value, setValue] = React.useState('1');
  const storeData = useSelector((state) => state);
  const accessTokenData = useSelector(
    (state) => state?.authDetails.accessToken
  );
  const testData = storeData.testDetails?.courseTestDetail?.testTopics;
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  let topicData=[];
  if(testData?.topics && testData.topics.length){
    topicData = testData.topics[0];
  }
   const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCourseDetails());
  }, []);

  const handleChange = (event, newValue) => {
    // setValue(newValue);
  };
  const handleClick = (status) => {
    dispatch(startTest(topicData.id,topicData.progress.id));
    if(status.toString() === '0' || status.toString() === '5') {
      navigate('/instructions');
    }
    setModalType(status);
    setShowModal(true);
    // navigate("/question/1");
}
useEffect(() => {
  if (accessTokenData) {
    localStorage.setItem("AccessToken", accessTokenData);
  }
}, [accessTokenData]);

  return (
    <StyledHomeContent>
      <Container>
        <Grid container alignItems="center">
          <Grid xs={9}>
            <img src={logo} alt='no-img' />
          </Grid>
          <Grid xs={3}>
            <Grid container>
              <Grid>
                <div className="name-container">
                  <span className="font-bold">Hello'</span> Narendranath
                </div>
                <div className="name-sub-container">Paraclinic Year I</div>
              </Grid>
              <Grid>
                <img src={cardIcon} className="img-container" alt='no-img' />
              </Grid>
              <Grid>
                <a className="logout-link" href="#">
                  Logout
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div className="heading-background">
        <Container className="page-sub-heading">Scheduled Tests</Container>
      </div>
      <HomeCardComponent handleChang={handleChange} testData={testData} handleClick={handleClick} />
      <HomePageModal open={showModal} handleClose={()=>setShowModal(false)} modalType={modalType} />
    </StyledHomeContent>
  );
};

export default HomeContainer;
