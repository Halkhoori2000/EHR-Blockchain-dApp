import React, { Fragment, useContext, useEffect, useState } from "react";
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
import ProjectContext from "../../_helper/Project";
import { Breadcrumbs, Btn } from "../../AbstractElements";
import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from "axios";

import { useForm } from "react-hook-form";
import Dropzone from "react-dropzone-uploader";
import CKEditors from "react-ckeditor-component";
import { insertAddPortfolios, updateAddPortfolios } from "../../api/api";

function AddPortfolio() {
  const [content, setContent] = useState("content");
  const location = useLocation();
  const onChange = (evt) => {
    const newContent = evt.editor.getData();
    setContent(newContent);
  };

  const [title, setTitle] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [status, setStatus] = useState('');
  const [clientName, setClientName] = useState('');
  const [services, setServices] = useState('');
  const [tags, setTags] = useState('');
  const [startData, setStartDate] = useState('');
  const [submissionDate, setSubmissionDate] = useState('');
  const [websiteLinks, setWebsiteLinks] = useState('');
  const [metaKeyword, setMetaKeywords] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [featuredImgs, setFeaturedImages] = useState('');
  const [sliderImgs, setSlidersImages] = useState('');

  const navigate = useNavigate();
  const handleSubmitData = async () => {
    const formData = new FormData();
    formData.append('portfoliosection_title', title);
    formData.append('portfoliosection_serialnumber', serialNumber);
    formData.append('portfoliosection_status', status);
    formData.append('portfoliosection_clientname', clientName);
    formData.append('portfoliosection_service', services);
    formData.append('portfoliosection_tags', tags);
    formData.append('portfoliosection_startdate', startData)
    formData.append('portfoliosection_submissiondate', submissionDate)
    formData.append('portfoliosection_websitelink', websiteLinks)
    formData.append('portfoliosection_metakeywords', metaKeyword)
    formData.append('portfoliosection_metadescription', metaDescription)
    formData.append('multiple_images', sliderImgs)
    formData.append('multiple_images', featuredImgs)
    formData.append('portfoliosection_copyrighttext', content);

    const res = await insertAddPortfolios(formData);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/add_porfolio_list`);
    } else {
      alert("Error");
    }
  };
  const handleUpdateData = async (id) => {
    const formData = new FormData();
    formData.append('portfoliosection_title', title);
    formData.append('portfoliosection_serialnumber', serialNumber);
    formData.append('portfoliosection_status', status);
    formData.append('portfoliosection_clientname', clientName);
    formData.append('portfoliosection_service', services);
    formData.append('portfoliosection_tags', tags);
    formData.append('portfoliosection_startdate', startData)
    formData.append('portfoliosection_submissiondate', submissionDate)
    formData.append('portfoliosection_websitelink', websiteLinks)
    formData.append('portfoliosection_metakeywords', metaKeyword)
    formData.append('portfoliosection_metadescription', metaDescription)
    formData.append('multiple_images', sliderImgs)
    formData.append('multiple_images', featuredImgs)
    formData.append('portfoliosection_copyrighttext', content);

    const res = await updateAddPortfolios(id, formData);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/add_porfolio_list`);
    } else {
      alert("Error");
    }
  };

  const handleSliderImages = ({ meta, file }, status) => {
    setSlidersImages(file);
  };
  const handleFeaturedImages = ({ meta, file, status }) => {
    setFeaturedImages(file);
  };

  const populateData = () => {
    if (location.state) {
      setTitle(location.state.dataObj.portfoliosection_title);
      setSerialNumber(location.state.dataObj.portfoliosection_serialnumber);
      setStatus(location.state.dataObj.portfoliosection_status);
      setClientName(location.state.dataObj.portfoliosection_clientname);
      setServices(location.state.dataObj.portfoliosection_service);
      setTags(location.state.dataObj.portfoliosection_tags);
      setStartDate(location.state.dataObj.portfoliosection_startdate);
      setSubmissionDate(location.state.dataObj.portfoliosection_submissiondate);
      setWebsiteLinks(location.state.dataObj.portfoliosection_websitelink);
      setMetaKeywords(location.state.dataObj.portfoliosection_metakeywords);
      setMetaDescription(location.state.dataObj.portfoliosection_metadescription);
      setSlidersImages(location.state.dataObj.portfoliosection_sliderimages);
      setFeaturedImages(location.state.dataObj.Portfoliosection_featuredimages);
      setContent(location.state.dataObj.portfoliosection_copyrighttext);
    }
  }

  useEffect(()=> {
    populateData();
  },[])

  return (
    <Fragment>
      <Breadcrumbs
        parent="Portfolios"
        title="Create Portfolio"
        mainTitle="Create Portfolio"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form className="theme-form">
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Title"}</Label>
                        <Input
                          type="text"
                          className="form-control digits"
                          required
                          value={title}
                          onChange={(e)=> setTitle(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Serial Number"}</Label>
                        <input
                          className="form-control"
                          type="number"
                          placeholder="Serial Number"
                          value={serialNumber}
                          onChange={(e)=> setSerialNumber(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>{"Status"}</Label>
                        <Input
                          type="select"
                          placeholder=" Select a Status "
                          className="form-control digits"
                          required
                          value={status}
                          onChange={(e)=> setStatus(e.target.value)}
                        >
                          {" "}
                          <option>Select a status</option>
                          <option>Web design</option>
                          <option>Web development</option>
                          <option>Graphic design</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Client Name"}</Label>
                        <input
                          className="form-control"
                          type="Text"
                          placeholder="Enter Client Name"
                          value={clientName}
                          onChange={e => setClientName(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>{"Service "}</Label>
                        <Input
                          type="select"
                          placeholder=" Select a Category "
                          className="form-control digits"
                          required
                          value={services}
                          onChange={(e)=> setServices(e.target.value)}
                        >
                          {" "}
                          <option>Select a Service</option>
                          <option>Web design</option>
                          <option>Web development</option>
                          <option>Graphic design</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Tags "}</Label>
                        <input
                          className="form-control"
                          type="Text"
                          value={tags}
                          onChange={(e)=> setTags(e.target.value)}
                          placeholder="Enter Tags"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Start Date</Label>
                        <Input
                          className="form-control digits"
                          type="date"
                          placeholder="Start Date"
                          value={startData}
                          onChange={(e)=> setStartDate(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>Submission Date</Label>
                        <Input
                          className="form-control digits"
                          type="date"
                          placeholder="Submission Date"
                          value={submissionDate}
                          onChange={(e)=> setSubmissionDate(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Label>{"Website Link"}</Label>
                        <Input
                          type="text"
                          className="form-control"
                          placeholder="Enter Url Website"
                          value={websiteLinks}
                          onChange={(e)=> setWebsiteLinks(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Meta Keywords"}</Label>
                        <input
                          className="form-control"
                          type="Text"
                          placeholder="Enter meta keywords"
                          value={metaKeyword}
                          onChange={(e)=> setMetaKeywords(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description"}</Label>
                        <Input
                          type="textarea"
                          className="form-control"
                          placeholder="Enter Meta Description"
                          rows="3"
                          value={metaDescription}
                          onChange={(e)=> setMetaDescription(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{"Slider Images"}</Label>
                        <Dropzone
                          onChangeStatus={handleSliderImages}
                          maxFiles={3}
                          multiple={true}
                          canCancel={true}
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
                        <Label>{"Featured Image "}</Label>
                        <Dropzone
                          onChangeStatus={handleFeaturedImages}
                          maxFiles={3}
                          multiple={true}
                          canCancel={true}
                          inputContent="Drop A File"
                          styles={{
                            dropzone: { width: "100%", minHeight: 50 },
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
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <FormGroup className="mb-0">
                        {location.state ? (
                          <Button
                            onClick={() =>
                              handleUpdateData(
                                location.state.dataObj.portfoliosection_id
                              )
                            }
                            className="me-3"
                            color="success"
                          >
                            {"Update"}
                          </Button>
                        ) : (
                          <Button
                            onClick={handleSubmitData}
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

export default AddPortfolio;
