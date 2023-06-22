import React from "react";
import { styled } from "styled-components";
import { Button } from "@mui/material";

const ButtonOutlinedElement = styled(Button)`
  && {
    color: black;
    border: 1px solid;
    font-weight: 700;
    font-size: 12px;
  }
`;

const ButtonContainedElement = styled(Button)`
  && {
    font-size: 16px;
    font-weight: 500;
    font-size: 12px;
  }
`;

export const ButtonOutlined = (props) => {
  return <ButtonOutlinedElement {...props}>{props.children}</ButtonOutlinedElement>;
};

export const ButtonContained = (props) => {
    return <ButtonContainedElement {...props}>{props.children}</ButtonContainedElement>;
  };
