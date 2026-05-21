import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { insertSliderVersionAPI } from "../../../../api/api";
import { Button, Col, Form, FormGroup, Label, Row } from "reactstrap";
import Dropzone from "react-dropzone-uploader";

const Create = () => {
  const history = useNavigate();
  const [title, setTitle] = useState("");
  const [titleFontSize, setTitleFontSize] = useState("");
  const [text, setText] = useState("");
  const [textFontSize, setTextFontSize] = useState("");
  const [textButton, setButton] = useState("");
  const [textButtonFontSize, setButtonFontSize] = useState("");
  const [textButtonUrl, setButtonUrl] = useState("");
  const [textSerialNumber, setSerialNumber] = useState("");
  const [imgFile, setImgFile] = useState("");
  const handleSubmitChangeStatus = ({ meta, file }, status) => {
    setImgFile(file);
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("sliderversionslider_title", title);
    formData.append("sliderversionslider_titlefontsize", titleFontSize);
    formData.append("sliderversionslider_text", text);
    formData.append("sliderversionslider_textfontsize", textFontSize);
    formData.append("sliderversionslider_buttontext", textButton);
    formData.append("sliderversionslider_buttonfontsize", textButtonFontSize);
    formData.append("sliderversionslider_buttonURL", textButtonUrl);
    formData.append("sliderversionslider_serialnumber", textSerialNumber);
    formData.append("sliderversionslider_image", imgFile);

    console.log(formData, "form");
    await insertSliderVersionAPI(formData);
    history(`${process.env.PUBLIC_URL}/hero_section/slider_list`, {
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
                type="text"
                className="form-control"
                name="sliderversionslider_title"
                placeholder="Add heading *"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={"6"}>
            <FormGroup>
              <Label>{"Title Font Size"}</Label>
              <input
                type="number"
                className="form-control"
                name="sliderversionslider_titlefontsize"
                placeholder="Enter project Rate"
                value={titleFontSize}
                onChange={(e) => setTitleFontSize(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={"6"}>
            <FormGroup>
              <Label>{"Text"}</Label>
              <input
                className="form-control"
                type="text"
                name="sliderversionslider_text"
                placeholder="Add heading *"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={"6"}>
            <FormGroup>
              <Label>{"Text Font Size"}</Label>
              <input
                className="form-control"
                type="number"
                name="sliderversionslider_textfontsize"
                placeholder="Enter project Rate"
                value={textFontSize}
                onChange={(e) => setTextFontSize(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <FormGroup>
              <Label>{"Button Text"}</Label>
              <input
                type="text"
                name="sliderversionslider_buttontext"
                className="form-control digits"
                required
                value={textButton}
                onChange={(e) => setButton(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={"6"}>
            <FormGroup>
              <Label>{"Button Font Size"}</Label>
              <input
                className="form-control"
                type="number"
                name="sliderversionslider_buttonfontsize"
                placeholder="Enter project Rate"
                value={textButtonFontSize}
                onChange={(e) => setButtonFontSize(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormGroup>
              <Label>{"Button URL"}</Label>
              <input
                type="text"
                name="sliderversionslider_buttonURL"
                placeholder="Btn Url"
                className="form-control digits"
                required
                value={textButtonUrl}
                onChange={(e) => setButtonUrl(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormGroup>
              <Label>{"Serial Number"}</Label>
              <input
                type="number"
                name="sliderversionslider_serialnumber"
                placeholder="number"
                className="form-control digits"
                required
                value={textSerialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{"Image "}</Label>
              <Dropzone
                onChangeStatus={handleSubmitChangeStatus}
                maxFiles={1}
                multiple={false}
                canCancel={false}
                inputContent="Drop A File"
                styles={{
                  dropzone: { width: "100%", height: 50 },
                  dropzoneActive: { borderColor: "green" },
                }}
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
