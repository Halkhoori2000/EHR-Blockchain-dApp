import React, { Fragment, useContext, useState, useEffect } from "react";
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
import ProjectContext from "../../../_helper/Project";
import { Breadcrumbs, Btn } from "../../../AbstractElements";
import { useNavigate, Link, useLocation } from "react-router-dom";

import { useForm } from "react-hook-form";
import Dropzone from "react-dropzone-uploader";
import CKEditors from "react-ckeditor-component";
import { insertServices, updateServices } from '../../../api/api';

function Services_Details() {
  const [content, setContent] = useState("content");
  const onChange = (evt) => {
    const newContent = evt.editor.getData();
    setContent(newContent);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const project = useContext(ProjectContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [serialNumber, setserialNumber] = useState("");
  const [metaKeywords, setmetaKeywords] = useState("");
  const [metaDescription, setmetaDescription] = useState("");
  const [summary, setsummary] = useState("");
  const [imageFileData, setimageFileData] = useState("");

  const saveServicesData = async () => {
    const formData = new FormData();
    formData.append("servicesection_title", title);
    formData.append("servicesection_category", category);
    formData.append("servicesection_serialnumber", serialNumber);
    formData.append("servicesection_metakeywords", metaKeywords);
    formData.append("servicesection_metadiscription", metaDescription);
    formData.append("servicesection_summary", summary);
    formData.append("servicesection_copyrighttext", content);
    formData.append("servicesection_image", imageFileData);

    const res = await insertServices(formData);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/services_detail_list`);
    } else {
      alert("Error");
    }
  };

  const updateServicesSection = async (id) => {
    const formData = new FormData();

    formData.append("servicesection_title", title);
    formData.append("servicesection_category", category);
    formData.append("servicesection_serialnumber", serialNumber);
    formData.append("servicesection_metakeywords", metaKeywords);
    formData.append("servicesection_metadiscription", metaDescription);
    formData.append("servicesection_summary", summary);
    formData.append("servicesection_copyrighttext", content);
    formData.append("servicesection_image", imageFileData);

    const res = await updateServices(id, formData);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/services_detail_list`);
    } else {
      alert("Error occured.");
    }
  };

  const populateCategoryItem = () => {
    if (location.state) {
      settitle(location.state.dataObj.servicesection_title);
      setcategory(location.state.dataObj.servicesection_category);
      setserialNumber(location.state.dataObj.servicesection_serialnumber);
      setmetaKeywords(location.state.dataObj.servicesection_metakeywords);
      setmetaDescription(location.state.dataObj.servicesection_metadiscription);
      setsummary(location.state.dataObj.servicesection_summary);
      setContent(location.state.dataObj.servicesection_copyrighttext);
    }
  };

  useEffect(() => {
    populateCategoryItem();
  }, []);

  const getUploadParams = ({ meta }) => {
    return {
      url: "https://httpbin.org/post",
    };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    setimageFileData(file);
  };
  return (
    <Fragment>
      <Breadcrumbs parent="Services" title="Services" mainTitle="Services" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form
                  className="theme-form"
                >
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Title  "}</Label>
                        <Input
                          onChange={(e) => settitle(e.target.value)}
                          value={title}
                          type="text"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Category "}</Label>
                        <Input
                          onChange={(e) => setcategory(e.target.value)}
                          value={category}
                          type="select"
                          placeholder=" Select a Category "
                          className="form-control digits"
                          required
                        >
                          {" "}
                          <option>Select a status</option>
                          <option>Web design</option>
                          <option>Web development</option>
                          <option>Graphic design</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>{"Serial Number"}</Label>
                        <input
                          onChange={(e) => setserialNumber(e.target.value)}
                          value={serialNumber}
                          className="form-control"
                          type="number"
                          placeholder="Serial Number"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Meta Keywords"}</Label>
                        <input
                          onChange={(e) => setmetaKeywords(e.target.value)}
                          value={metaKeywords}
                          className="form-control"
                          type="Text"
                          placeholder="Enter meta keywords"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description"}</Label>
                        <Input
                          onChange={(e) => setmetaDescription(e.target.value)}
                          value={metaDescription}
                          type="textarea"
                          className="form-control"
                          placeholder="Enter meta discription"
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Label>{"Summary"}</Label>
                        <Input
                          onChange={(e) => setsummary(e.target.value)}
                          value={summary}
                          type="textarea"
                          className="form-control"
                          placeholder="Enter Summary"
                          rows="3"
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
                            onClick={() =>
                              updateServicesSection(
                                location.state.dataObj.servicesection_id
                              )
                            }
                            disabled={
                              title &&
                              category &&
                              metaKeywords &&
                              metaDescription &&
                              summary !== "" &&
                              serialNumber &&
                              imageFileData !== null
                                ? false
                                : true
                            }
                            className="me-3"
                            color="success"
                          >
                            {"Update"}
                          </Button>
                        ) : (
                          <Button
                            onClick={saveServicesData}
                            disabled={
                              title &&
                              category &&
                              metaKeywords &&
                              metaDescription &&
                              summary !== "" &&
                              serialNumber &&
                              imageFileData !== null
                                ? false
                                : true
                            }
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

export default Services_Details;
