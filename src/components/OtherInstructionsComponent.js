import { styled } from "styled-components";

const StyledInstructionsContent = styled.div`
  padding: 1em;
  p, div>ol>li, div>ol>li>div, div>ol>li>div>span, div>ol>li>ul>li {
    font-family: 'Times';
    font-style: normal;
    font-size: 16px;
  }
  .note {
    font-weight: 600;
    font-size: 14px;
    color: #ff0000;
    text-align: center;
  }
  .text-center {
    text-align: center;
  }
  .table-wrapper {
    max-height: 55vh;
    overflow: auto;
  }
  .title {
    font-weight: 700;
    font-size: 18px;
    text-decoration: underline;
  }
  .font-sub-heading {
    font-size: 18px;
    text-align: center;
  }
  .icon-container {
    display: flex;
  }
  .txt-red {
    color: red
  }
  .instruction-wrapper{
    margin: 0;
  }
  .instruction-table-wrapper {
    max-height: 57vh;
  }
  .checkbox-container {
    border-top: 1px solid #E6E6E9;
    padding-top: 10px;
  }
`;

const OtherInstructionsComponent = ({checkBoxChecked, setCheckBoxChecked}) => {
    return (
      <StyledInstructionsContent>
        <p className={`font-sub-heading instruction-wrapper`}>Please read the instructions carefully</p>
        
        <div className={`table-wrapper instruction-table-wrapper`}>
            <p className="title"> Instructions for Mock Test</p>
            <div>
                <ol className="">
                    <li>This is a Mock test. The Questions displayed are for practice purpose only. Under no circumstances should this be presumed as sample questions.</li>
                    <li>Mock test is meant for creating awareness about the test delivery system. Contents are for sample only and actual content will be different on the day of examination.</li>
                    <li>The Question Palette displayed on the right side of screen will show the status of each question using one of the following symbols:</li>
                </ol>
            </div>
            <p className="title">Some important instructions for the exam are as follows:</p>
            <div>
                <ol className="">
                    <li> Pen, Pencil, Cell phones, pagers, calculators, Pen Drives, Tablets or any electronic devices are strictly prohibited. Violation will lead to expulsion from the examination. No arrangements have been made at the exam centres for their custody. Candidates are advised not to bring them at the exam centre.</li>
                    <li>Improper conduct will entail expulsion from the examination. Failure to comply with the instructions will entail expulsion/ cancellation of candidature including appropriate legal action.</li>
                    <li>Follow the instruction given before or after any screen during the computer based exam.</li>
                    <li>Use of keyboard during the exam is strictly prohibited. Wherever use of keyboard is needed a virtual keyboard will appear on screen automatically.</li>
                    <li>Always maintain peace, discipline and silence during the examination process.</li>
                    <li>NBE reserves all rights to verify identity and genuineness of each candidate at the exam centre by taking thumb impression and photograph of the candidate or by any other means.</li>
                    <li>Late entry and/or early exit is not permitted.</li>
                    <li>Please read the information bulletin carefully.</li>
                </ol>
            </div>
            <div className="checkbox-container">
                <input type="checkbox" checked={checkBoxChecked} onChange={(e)=>{setCheckBoxChecked(!checkBoxChecked)}} />
                <label>NON DISCLOSURE AGREEMENT (MedAce) - NEET-PG</label>
                <p>This test is confidential and proprietary. MedAce expressly prohibits you from disclosing, publishing, reproducing or transmitting this test, in whole or in part, in any form or by any means verbal or written, electronic or mechanical and for any purpose.</p>
                <p>No content of this test must be shared with friends, acquaintances or third parties including sharing through online means or via social media. Social media includes but not limited to SMS, WhatsApp, Facebook, Twitter, Hangouts, Blogs etc. using either one’s own account or proxy account(s).</p>
                <p>Any violation of the same shall be liable for penal action as per the MedAce guidelines.</p>
            </div>
        </div>
      </StyledInstructionsContent>
    );
  };

export default OtherInstructionsComponent;