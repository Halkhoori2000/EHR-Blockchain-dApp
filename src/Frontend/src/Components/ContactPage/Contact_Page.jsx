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
import { Breadcrumbs, Btn } from "../../AbstractElements";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { insertContactInfo, updateContactInfo } from "../../api/api";

function Contact_Page() {
  const navigate = useNavigate();
  const location = useLocation();

  const [fromTitle, setfromTitle] = useState("");
  const [fromSubtitle, setfromSubtitle] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [latitude, setlatitude] = useState("");
  const [longitude, setlongitude] = useState("");
  const [mapZoom, setmapZoom] = useState("");
  const [address, setaddress] = useState("");

  const saveContactInfo = async () => {
    const dataObj = {
      contactpage_title: fromTitle,
      contactpage_subtitle: fromSubtitle,
      contactpage_email: email,
      contactpage_phone: phone,
      contactpage_latitude: latitude,
      contactpage_longitude: longitude,
      contactpage_mapzoom: mapZoom,
      Contactpage_address: address,
    };

    const res = await insertContactInfo(dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/contact_page_list`);
    } else {
      alert("Error");
    }
  };

  const updateJobPostDataInDB = async (id) => {
    const dataObj = {
      contactpage_title: fromTitle,
      contactpage_subtitle: fromSubtitle,
      contactpage_email: email,
      contactpage_phone: phone,
      contactpage_latitude: latitude,
      contactpage_longitude: longitude,
      contactpage_mapzoom: mapZoom,
      Contactpage_address: address,
    };
    const res = await updateContactInfo(id, dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/contact_page_list`);
    } else {
      alert("Error occured.");
    }
  };

  const pupulateContactInfoFields = () => {
    if (location.state) {
      setfromTitle(location.state.dataObj.contactpage_title);
      setfromSubtitle(location.state.dataObj.contactpage_subtitle);
      setemail(location.state.dataObj.contactpage_email);
      setphone(location.state.dataObj.contactpage_phone);
      setlatitude(location.state.dataObj.contactpage_latitude);
      setlongitude(location.state.dataObj.contactpage_longitude);
      setmapZoom(location.state.dataObj.contactpage_mapzoom);
      setaddress(location.state.dataObj.Contactpage_address);
    }
  };

  useEffect(() => {
    pupulateContactInfoFields();
  }, []);
  return (
    <Fragment>
      <Breadcrumbs
        parent="Content Managment"
        title="Contact Page"
        mainTitle="Contact Page"
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
                        <Label>{" From Title"}</Label>
                        <Input
                          onChange={(e) => setfromTitle(e.target.value)}
                          value={fromTitle}
                          type="text"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>{"From Subtitle"}</Label>
                        <Input
                          onChange={(e) => setfromSubtitle(e.target.value)}
                          value={fromSubtitle}
                          type="text"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Email"}</Label>
                        <Input
                          onChange={(e) => setemail(e.target.value)}
                          value={email}
                          type="email"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Phone "}</Label>
                        <input
                          onChange={(e) => setphone(e.target.value)}
                          value={phone}
                          className="form-control"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      {" "}
                      <FormGroup>
                        <Label>Latitude</Label>

                        <Input
                          onChange={(e) => setlatitude(e.target.value)}
                          value={latitude}
                          type="text"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Longitude"}</Label>
                        <Input
                          onChange={(e) => setlongitude(e.target.value)}
                          value={longitude}
                          type="text"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"12"}>
                      {" "}
                      <FormGroup>
                        <Label>Map Zoom</Label>
                        <Input
                          onChange={(e) => setmapZoom(e.target.value)}
                          value={mapZoom}
                          type="text"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"12"}>
                      <FormGroup className="mb-0">
                        <Label>Address</Label>
                        <Input
                          onChange={(e) => setaddress(e.target.value)}
                          value={address}
                          type="textarea"
                          className="form-control"
                          placeholder="Enter Address"
                          rows="3"
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
                              updateJobPostDataInDB(
                                location.state.dataObj.contactpage_id
                              )
                            }
                            disabled={
                              fromTitle &&
                              fromSubtitle &&
                              email &&
                              phone &&
                              latitude &&
                              longitude &&
                              mapZoom &&
                              address !== ""
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
                            onClick={saveContactInfo}
                            disabled={
                              fromTitle &&
                              fromSubtitle &&
                              email &&
                              phone &&
                              latitude &&
                              longitude &&
                              mapZoom &&
                              address !== ""
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

export default Contact_Page;
