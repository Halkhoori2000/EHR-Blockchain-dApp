import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone-uploader";
import { useLocation, useNavigate } from "react-router-dom";
import { Col, Form, FormGroup, Label, Button, Row } from "reactstrap";
import { updateIntroSectionApI } from "../../../api/api";

const UpdateIntro = ({ listId }) => {
  const history = useNavigate();

  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [textButtonUrl, setButtonUrl] = useState("");
  const [textButton, setButton] = useState("");
  const [text, setText] = useState("");
  const [imgFile, setImgFile] = useState("");

  const thelocation = useLocation();
  const ifExists = thelocation.state;

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    setImgFile(file);
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("introsection_title", title);
    formData.append("introsection_videolink", videoUrl);
    formData.append("introsection_buttontext", textButton);
    formData.append("introsection_buttonURL", textButtonUrl);
    formData.append("introsection_text", text);
    formData.append("introsection_image", imgFile);
    console.log(formData, "form");
    await updateIntroSectionApI(listId, formData);
    history(`${process.env.PUBLIC_URL}/hero_section/intro_section_list`, {
      replace: true,
    });
  };
  const populateData = () => {
    if (ifExists) {
      setTitle(ifExists?.dataObj.introsection_title);
      setText(ifExists?.dataObj.introsection_videolink);
      setVideoUrl(ifExists?.dataObj.introsection_videolink);
      setButton(ifExists?.dataObj.introsection_buttontext);
      setButtonUrl(ifExists?.dataObj.introsection_buttonURL);
      setImgFile(ifExists?.dataObj.videoversionslider_image);
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
          <Col md={"6"}>
            <FormGroup>
              <Label>{"Title"}</Label>
              <input
                type="text"
                className="form-control"
                name="introsection_title"
                placeholder="Add heading *"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={"6"}>
            <FormGroup>
              <Label>{"Video Link"}</Label>
              <input
                type="text"
                name="introsection_videolink"
                className="form-control digits"
                required
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
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
                name="introsection_buttontext"
                className="form-control digits"
                required
                value={textButton}
                onChange={(e) => setButton(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={"6"}>
            <FormGroup>
              <Label>{"Button URL"}</Label>
              <input
                type="text"
                name="introsection_buttonURL"
                className="form-control digits"
                required
                value={textButtonUrl}
                onChange={(e) => setButtonUrl(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={"12"}>
            <FormGroup>
              <Label>{"Text"}</Label>
              <input
                type="text"
                name="introsection_text"
                className="form-control digits"
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
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

export default UpdateIntro;
