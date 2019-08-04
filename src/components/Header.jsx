import React, { Component } from "react";
import styled from "styled-components";
import * as styleConstants from "../style-constants";

const HeaderDiv = styled.div`
  height: ${styleConstants.headerHeight};
  background-color: ${styleConstants.primaryColor};
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 20px;
  color: white;
  margin-left: ${styleConstants.singleMargin};
`;

export default class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <Title>Hashtag Counter</Title>
      </HeaderDiv>
    );
  }
}
