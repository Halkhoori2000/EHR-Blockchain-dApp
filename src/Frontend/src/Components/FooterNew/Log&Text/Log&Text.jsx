import React, { Fragment, useContext, useState, useEffect } from "react";
import {
  Container,
  Row,
  Button,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import ProjectContext from "../../../_helper/Project";
import { Breadcrumbs, Btn } from "../../../AbstractElements";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Dropzone from "react-dropzone-uploader";
import CKEditors from "react-ckeditor-component";
import { insertLogoAndText, updateLogoAndText } from "../../../api/api";

function LogText() {
  const [content, setContent] = useState("content");
  const [footerText, setfooterText] = useState("");
  const [newsletterText, setnewsletterText] = useState("");
  const [footerLogo, setfooterLogo] = useState();

  const formData = new FormData();

  const navigate = useNavigate();
  const location = useLocation();
  const project = useContext(ProjectContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getUploadParams = ({ meta }) => {
    return {
      url: "https://httpbin.org/post",
    };
  };

  const onChange = (evt) => {
    const newContent = evt.editor.getData();
    setContent(newContent);
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    setfooterLogo(file);
  };

  const sendingPageData = async () => {
    formData.append("logandtextsection_footer_text", footerText);
    formData.append("logandtextsection_newsletter", newsletterText);
    formData.append("logandtextsection_image", footerLogo);
    formData.append("tbl_logoandtext_copyright", content);
    console.log(footerLogo);
    const res = await insertLogoAndText(formData);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/logtext_list`);
    } else {
      alert("Error occured.");
    }
  };

  const updateLogo = async (id) => {
    formData.append("logandtextsection_footer_text", footerText);
    formData.append("logandtextsection_newsletter", newsletterText);
    formData.append("logandtextsection_image", footerLogo);
    formData.append("tbl_logoandtext_copyright", content);
    const res = await updateLogoAndText(id, formData);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/logtext_list`);
    } else {
      alert("Error occured.");
    }
  };

  const populateData = () => {
    if (location.state) {
      setfooterText(location.state.dataObj.logandtextsection_footer_text);
      setnewsletterText(location.state.dataObj.logandtextsection_newsletter);
      setContent(location.state.dataObj.tbl_logoandtext_copyright);
    }
  };

  useEffect(() => {
    populateData();
  }, []);

  return (
    <Fragment>
      <Breadcrumbs
        parent="Footer"
        title="Update Logo & Text"
        mainTitle="Update Logo & Text"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>{"Footer Text"}</Label>
                        <Input
                          onChange={(e) => setfooterText(e.target.value)}
                          value={footerText}
                          type="text"
                          name="logandtextsection_footer_text"
                          placeholder="Footer Text"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>{"Newsletter Text"}</Label>
                        <Input
                          onChange={(e) => setnewsletterText(e.target.value)}
                          value={newsletterText}
                          type="text"
                          name="logandtextsection_newsletter"
                          placeholder="Newsletter Text "
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{"Image "}</Label>
                        <Dropzone
                          getUploadParams={getUploadParams}
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
                      <FormGroup>
                        <Label>{"Copyright Text"}</Label>
                        <CKEditors
                          activeclassName="p10"
                          content={content}
                          events={{
                            change: onChange,
                          }}
                        />
                        <span style={{ color: "red" }}>
                          {errors.title && "Title is required"}
                        </span>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        {location.state ? (
                          <Button
                            disabled={
                              footerText &&
                              newsletterText &&
                              footerLogo &&
                              content !== null
                                ? false
                                : true
                            }
                            onClick={() =>
                              updateLogo(
                                location.state.dataObj.logandtextsection_id
                              )
                            }
                            className="me-3"
                            color="success"
                          >
                            {"Update"}
                          </Button>
                        ) : (
                          <Button
                            disabled={
                              footerText &&
                              newsletterText &&
                              footerLogo &&
                              content !== null
                                ? false
                                : true
                            }
                            onClick={sendingPageData}
                            className="me-3"
                            color="success"
                          >
                            {"Submit"}
                          </Button>
                        )}
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

export default LogText;
