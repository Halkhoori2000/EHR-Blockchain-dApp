import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, Label, Row } from "reactstrap";
import { insertApproachSectionAPI } from "../../../api/api";

const Create = () => {
  const history = useNavigate();
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [shotText, setShotText] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [buttonUrl, setButtonUrl] = useState("");

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    await insertApproachSectionAPI({
      title,
      subTitle,
      shotText,
      serialNumber,
      buttonText,
      buttonUrl,
    });
    history(`${process.env.PUBLIC_URL}/hero_section/approach_section_list`, {
      replace: true,
    });
  };
  return (
    <>
      <Form
        className="theme-form"
        onSubmit={onHandleSubmit}
        method="post"
        encType="multipart/form-data"
      >
        <Row>
          <Col md={"6"}>
            <FormGroup>
              <Label>{"Title"}</Label>
              <input
                placeholder="Title"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                name={"title"}
              />
            </FormGroup>
          </Col>
          <Col md={"6"}>
            <FormGroup>
              <Label>{"Subtitle"}</Label>
              <input
                placeholder="Subtitle"
                className="form-control"
                value={subTitle}
                onChange={(e) => setSubTitle(e.target.value)}
                name={"subtitle"}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={"6"}>
            <FormGroup>
              <Label>{" Short Text"}</Label>
              <input
                placeholder="Short Text"
                className="form-control"
                value={shotText}
                onChange={(e) => setShotText(e.target.value)}
                name={"shorttext"}
              />
            </FormGroup>
          </Col>
          <Col md={"6"}>
            <FormGroup>
              <Label>{"Serial Number"}</Label>
              <input
                placeholder="Serial Number"
                className="form-control"
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
                name={"serialnumber"}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <FormGroup>
              <Label>{"Button Text"}</Label>
              <input
                placeholder="Short Text"
                className="form-control"
                value={buttonText}
                onChange={(e) => setButtonText(e.target.value)}
                name={"buttontext"}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>{"Button URL"}</Label>
              <input
                placeholder="Button Url"
                className="form-control"
                value={buttonUrl}
                onChange={(e) => setButtonUrl(e.target.value)}
                name={"buttonurl"}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup className="mb-0">
              <Button type="submit" color="success">
                Submit
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Create;
