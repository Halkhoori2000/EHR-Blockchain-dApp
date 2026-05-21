import React, { Fragment, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { Breadcrumbs } from "../../../../AbstractElements";
import { useLocation, useNavigate } from "react-router-dom";

import Dropzone from "react-dropzone-uploader";
import { updateStaticVerisonAPI } from "../../../../api/api";

function StaticListUpdate({ listId }) {
  const history = useNavigate();
  const thelocation = useLocation();
  const ifExists = thelocation.state;

  const [title, setTitle] = useState("");
  const [titleFontSize, setTitleFontSize] = useState("");
  const [text, setText] = useState("");
  const [textFontSize, setTextFontSize] = useState("");
  const [textButton, setButton] = useState("");
  const [textButtonFontSize, setButtonFontSize] = useState("");
  const [textButtonUrl, setButtonUrl] = useState("");
  const [imgFile, setImgFile] = useState("");

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    setImgFile(file);
  };

  const updateData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("staticversionslider_title", title);
    formData.append("staticversionslider_titlefontsize", titleFontSize);
    formData.append("staticversionslider_text", text);
    formData.append("staticversionslider_textfontsize", textFontSize);
    formData.append("staticversionslider_buttontext", textButton);
    formData.append("staticversionslider_buttonfontsize", textButtonFontSize);
    formData.append("staticversionslider_buttonURL", textButtonUrl);
    formData.append("staticversionslider_image", imgFile);

    console.log(formData, "formupdateing");
    await updateStaticVerisonAPI(listId, formData);
    history(`${process.env.PUBLIC_URL}/hero_section/static_list`, {
      replace: true,
    });
  };

  const populateData = () => {
    if (ifExists) {
      setTitle(ifExists?.dataObj.staticversionslider_title);
      setTitleFontSize(ifExists?.dataObj.staticversionslider_titlefontsize);
      setText(ifExists?.dataObj.staticversionslider_text);
      setTextFontSize(ifExists?.dataObj.staticversionslider_textfontsize);
      setButton(ifExists?.dataObj.staticversionslider_buttontext);
      setButtonFontSize(ifExists?.dataObj.staticversionslider_buttonfontsize);
      setButtonUrl(ifExists?.dataObj.staticversionslider_buttonURL);
      setImgFile(ifExists?.dataObj.staticversionslider_image);
    }
  };

  useEffect(() => {
    populateData();
  }, []);

  return (
    <Fragment>
      <Breadcrumbs
        parent="Hero Section"
        title="Static Version"
        mainTitle="Static Version"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form
                  className="theme-form"
                  method={"POST"}
                  onSubmit={updateData}
                  encType="multipart/form-data"
                >
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Title"}</Label>
                        <input
                          type="text"
                          className="form-control"
                          name="staticversionslider_title"
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
                          name="staticversionslider_titlefontsize"
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
                          name="staticversionslider_text"
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
                          name="staticversionslider_textfontsize"
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
                        <Input
                          type="text"
                          name="staticversionslider_buttontext"
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
                          name="staticversionslider_buttonfontsize"
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
                        <Input
                          type="text"
                          name="staticversionslider_buttonURL"
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
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default StaticListUpdate;
