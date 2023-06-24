import { Container, Grid, Box, Tab, Card } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import cardIcon from "../assets/png/Group.svg";
import { GetCourseStatus } from "../util";

const HomeCardComponent = ({handleChange, testData, handleClick}) => {
    return (
        <TabContext value={"1"}>
        <div className="heading-background-tabs">
          <Container>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab className="tab-header" label="Grand Tests" value="1" />
                {/* <Tab className='tab-header' label="New Tests" value="2" /> */}
              </TabList>
            </Box>
          </Container>
        </div>
        <TabPanel value="1">
          {testData?.topics?.map((data) => {
            return (
              <div onClick={()=>handleClick(data.status)} className="card-main-container">
                <div className="card-container">
                  <Card variant="outlined">
                    <Grid container className="card-content">
                      <Grid className="card-img-container">
                        <img src={cardIcon} className="card-img" alt='no-img' />
                      </Grid>
                      <Grid className="card-main-content">
                        <div className="card-main-content-header">
                          {data.title}
                        </div>
                        <div className="card-main-content-sub-header">
                          {data.qcount} MCQs | {data.duration} mins
                        </div>
                        <div className="card-main-content-link">
                          {
                            GetCourseStatus(
                              data.status,
                              data.start_time,
                              data.end_time,
                              data.progress.starttime,
                              data.progress.endtime
                            )?.dateText
                          }
                        </div>
                      </Grid>
                    </Grid>
                    <div className={`card-badge badge-${data.status}`}>
                      {
                        GetCourseStatus(
                          data.status,
                          data.start_time,
                          data.end_time,
                          data.progress.starttime,
                          data.progress.endtime
                        )?.status
                      }
                    </div>
                  </Card>
                </div>
              </div>
            );
          })}
        </TabPanel>
        {/* <TabPanel value="2">Item Two</TabPanel> */}
      </TabContext>
    );
}

export default HomeCardComponent;