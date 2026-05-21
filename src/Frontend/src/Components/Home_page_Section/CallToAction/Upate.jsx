import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone-uploader";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, Label, Row } from "reactstrap";
import { updateCallToActionAPI } from "../../../api/api";

const Upate = ({ listId }) => {
  const history = useNavigate();
  const [text, setText] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [buttonUrl, setButtonUrl] = useState("");
  const [saveFile, setSaveFile] = useState("");

  const thelocation = useLocation();
  const ifExists = thelocation.state;


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
    await updateCallToActionAPI(listId, formData);
    history(`${process.env.PUBLIC_URL}/hero_section/call_to_action_list`, {
      replace: true,
    });
  };
  const populateData = () => {
    if (ifExists) {
      setText(ifExists?.dataObj.Calltoactionsection_title);
      setButtonText(ifExists?.dataObj.calltoactionsection_buttontext);
      setButtonUrl(ifExists?.dataObj.calltoactionsection_buttonURL);
      setSaveFile(ifExists?.dataObj.calltoactionsection_image);
    }
  };

  useEffect(() => {
    populateData();
  }, []);
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
                Update
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Upate;
