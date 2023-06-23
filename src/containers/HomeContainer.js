import React, { useEffect, useState } from "react";
import {Container, Grid, Box, Tab, Card} from '@mui/material';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import logo from "../assets/png/logo.png";
import cardIcon from "../assets/png/Group.svg";
import { setCourseDetails } from "../redux/actions/questionActions";

const StyledHomeContent = styled.div`
    
    .header-container {
        
    }
    .toolBar-right {
        margin-left: auto
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
        color: #646E82;
        /*font-family: 'Inter';*/
    }
    .img-container {
        height: 45px;
        width: 45px;
        border-radius: 50%;
        margin: 0 30px;
    }
    .logout-link {
        color: #3369D6;
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
        color: #040C1B;
    }
    .heading-background {
        background-color: #E5ECFA;
        padding: 25px 0;
    }
    .heading-background-tabs {
        background-color: #E5ECFA;
        padding: 0;
    }
    .tab-header {
        /*font-family: 'Inter';*/
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: left;
        color: #040C1B;
    }
    .Mui-selected{
        color: #040C1B !important;
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
        border: 1px solid #E6E6E9;
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
        color: #040C1B;
    }
    .card-main-content-sub-header{
        /*font-family: 'Inter';*/
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 12px;
        color: #646E82;
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
        color: #FFFFFF;
        float: right;
        margin-right: 24px;
    }
    .card-main-container {
        margin: 8px 0;
    }
    .badge-0 {
        background: #E95757;
    }
    .badge-5 {
        background: #E95757;
    }
    .badge-4 {
        background: #646E82;
        opacity: 0.6;
    }
    .badge-3 {
        background: #15AF5B;
        opacity: 0.6;
    }
    .badge-6 {
        background: #F37559;
        opacity: 0.6;
    }
`;

const HomeContainer = () => {
    // const [value, setValue] = React.useState('1');
    const storeData = useSelector((state) => state);
    const testData = storeData.testDetails?.courseTestDetail?.testTopics;
    console.log(storeData.testDetails.courseTestDetail.testTopics)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setCourseDetails());
    }, [])
    

    const handleChange = (event, newValue) => {
        // setValue(newValue);
    };

    const examArr = [
        {heading: 'Grand Test-1', subHeading: '200 MCQs  |  180 mins ', timeLine: '', status: 'Live'},
        {heading: 'Mock Test-3 (All India NExT)', subHeading: '21 MCQs  |  20 mins', timeLine: 'Expires on 14 July, 2023', status: 'Upcoming'},
        {heading: 'Grand Test-2', subHeading: '200 MCQs  |  180 mins', timeLine: 'Live on 14 July, 2023', status: 'Completed'},
        {heading: 'Mock Test-4 (All India NExT)', subHeading: '21 MCQs  |  20 mins  t', timeLine: 'Expires by 5.00 PM, 14 June, 2023', status: 'Expired'}
    ];
    return (
        <StyledHomeContent>
            <Container>
                <Grid container alignItems="center">
                    <Grid xs={9}>
                        <img src={logo} />
                    </Grid>
                    <Grid xs={3}>
                        <Grid container>
                            <Grid>
                                <div className='name-container'><span className='font-bold'>Hello'</span> Narendranath</div>
                                <div className='name-sub-container'>Paraclinic Year I</div>
                            </Grid>
                            <Grid>
                                <img src={cardIcon} className='img-container' />
                            </Grid>
                            <Grid>
                                <a className='logout-link' href='#'>
                                    Logout
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid> 
            </Container>
            <div className='heading-background'>
                <Container className='page-sub-heading'>
                    Scheduled Tests
                </Container>
            </div>
                <TabContext value={'1'}>
                    <div className='heading-background-tabs'>
                        <Container>
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab className='tab-header' label="Grand Tests" value="1" />
                                    {/* <Tab className='tab-header' label="New Tests" value="2" /> */}
                                </TabList>
                            </Box>
                        </Container>
                    </div>
                        <TabPanel value="1">
                            {testData?.topics?.map((data) => {
                                return (
                                    <div className='card-main-container'>
                                        <div className='card-container'>
                                            <Card variant="outlined">
                                                <Grid container className='card-content'>
                                                    <Grid className='card-img-container'>
                                                        <img src={cardIcon} className='card-img' />
                                                    </Grid>
                                                    <Grid className='card-main-content'>
                                                        <div className='card-main-content-header'>{data.title}</div>
                                                        <div className='card-main-content-sub-header'>{data.qcount} MCQs | {data.duration} mins</div>
                                                        <div className='card-main-content-link'>{data.qcount}</div>
                                                    </Grid>
                                                </Grid>
                                                <div className={`card-badge badge-${data.status}`}>{"Live"}</div>
                                            </Card>
                                        </div>
                                    </div>
                                )
                            })}
                        </TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                </TabContext>
            

        </StyledHomeContent>
    )
}

export default HomeContainer;