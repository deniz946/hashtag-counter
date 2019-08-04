import React, { Component } from "react";
import styled from "styled-components";
import * as styleConstants from "../style-constants";
import TagsList from "./TagsList";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  height: calc(100vh - ${styleConstants.headerHeight});
`;
const LeftContainer = styled.div`
  border-right: 1px solid #d8d8d8;
  margin-left: 16px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  color: ${styleConstants.secondaryColor};
  font-weight: 600;
  margin: 16px 16px 16px 0;
  padding: 0;
`;

const SectionSubtitle = styled.h2`
  font-size: 18px;
  color: ${styleConstants.secondaryColor};
  font-weight: 200;
  padding: 0;
`;

const Textarea = styled.textarea`
  width: 90%;
  height: 240px;
  font-family: ${styleConstants.defaultFontFamily};

  &::placeholder {
  }
`;

const Hint = styled.p`
  font-weight: 300;
  font-size: 14px;
  font-style: italic;
  color: ${styleConstants.secondaryColor};
`;

const AddButton = styled.button`
  text-align: center;
  width: 110px;
  height: 40px;
  color: white;
  background-color: ${styleConstants.primaryColor};
  border-radius: 25px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.75);
  outline: none;

  &:focus {
    box-shadow: 1.5px 1.5px rgba(0, 0, 0, 0.75);
  }
  &:active {
    box-shadow: 2px 2px rgba(0, 0, 0, 0.75);
  }
`;

export default class MainContainer extends Component {
  constructor() {
    super();

    this.state = {
      hashtagsList: [],
      hashtagsInput: "#hola"
    };

    this.processHashtags.bind(this);
  }

  processHashtags() {
    const tags = this.state.hashtagsInput.split(",");
    const tagsToAdd = [];
    tags.forEach(tag => {
      const [symbol, ...tagName] = tag;
      if (!tagsToAdd.includes(tagName)) {
        tagsToAdd.push(tagName);
      }
      this.setState({ hashtagsList: tagsToAdd });
    });

    console.log(this.state.hashtagsList);
  }

  render() {
    return (
      <Container>
        <LeftContainer>
          <SectionTitle>Hashtags a procesar</SectionTitle>
          <SectionSubtitle>
            Pega aquí todos los hashtags que te gustaría procesar
          </SectionSubtitle>
          <Textarea
            value={this.state.hashtagsInput}
            onChange={event =>
              this.setState({ hashtagsInput: event.target.value })
            }
            placeholder="Añade los hashtags que quieras procesar"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: styleConstants.doubleMargin
            }}
          >
            <AddButton onClick={() => this.processHashtags()}>Añadir</AddButton>
          </div>
        </LeftContainer>
        <div style={{ marginLeft: "16px" }}>
          <SectionTitle>Hashtags procesados</SectionTitle>
          <SectionSubtitle>
            Lista de los hashtags que has añadido con el número de ocurrencias
          </SectionSubtitle>

          <Hint>Añade algunos hashtags para saber el conteo</Hint>
          <TagsList />
        </div>
      </Container>
    );
  }
}
