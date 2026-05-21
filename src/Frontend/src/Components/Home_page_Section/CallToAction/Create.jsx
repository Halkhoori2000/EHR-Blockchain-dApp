import React, { useState } from "react";
import Dropzone from "react-dropzone-uploader";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, Label, Row } from "reactstrap";
import { insertCallToActionAPI } from "../../../api/api";

const Create = () => {
  const history = useNavigate();
  const [text, setText] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [buttonUrl, setButtonUrl] = useState("");
  const [saveFile, setSaveFile] = useState("");

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    setSaveFile(file);
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Calltoactionsection_title", text);
    formData.append("calltoactionsection_buttontext", buttonText);
    formData.append("calltoactionsection_buttonURL", buttonUrl);
    formData.append("calltoactionsection_image", saveFile);
    await insertCallToActionAPI(formData);
    history(`${process.env.PUBLIC_URL}/hero_section/call_to_action_list`, {
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
          <Col md={"12"}>
            <FormGroup>
              <Label>{"Text"}</Label>
              <input
                placeholder="Text"
                name="text"
                className="form-control"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col sm="6">
            <FormGroup>
              <Label>{"Button Text"}</Label>
              <input
                placeholder="Add Text"
                name="button text"
                className="form-control"
                value={buttonText}
                onChange={(e) => setButtonText(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={"6"}>
            <FormGroup>
              <Label>{"Button URL"}</Label>
              <input
                placeholder="Text"
                name="buttonurl"
                className="form-control"
                value={buttonUrl}
                onChange={(e) => setButtonUrl(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{"Image "}</Label>
              <Dropzone
                onChangeStatus={handleChangeStatus}
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
