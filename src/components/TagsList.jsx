import React, { Component } from "react";
import styled from "styled-components";
import * as styledConstants from "../style-constants";
const TagContainer = styled.div`
  min-width: 150px;
  max-width: 240px;
  height: 30px;
  border: 1px solid ${styledConstants.secondaryColor};
  border-radius: 5px;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 17px;

  &::before {
    content: "#";
    font-size: 22px;
    margin: 0 4px;
    color: rgba(0, 0, 0, 0.4);
  }
`;

const TagCount = styled.span`
  font-size: 24px;
  padding: 0 8px;
  border-left: 1.5px solid #eee;
  margin-left: auto;
  color: rgba(0, 0, 0, 0.4);
`;

const PostCount = styled.span`
  font-size: 14px;
  margin-left: 8px;
  color: rgba(0, 0, 0, 0.4);
`;

function Tag({ name, count, postCount }) {
  return (
    <TagContainer>
      <span>{name}</span>
      <PostCount>{postCount}</PostCount>
      <TagCount>{count}</TagCount>
    </TagContainer>
  );
}

export default class TagsList extends Component {
  render() {
    return (
      <div>
        <Tag name="hola" count="153" />
      </div>
    );
  }
}
