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
import { Breadcrumbs, Btn, H5, H6, P } from "../../../AbstractElements";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { getSpecificData } from "../../../api/api";

function ViewJobDetails () {

    const navigate = useNavigate();
    const location = useLocation();


    return (
        <Fragment>
            <Breadcrumbs parent="Career" title="Job Details" mainTitle="Job Details" />
            <Container fluid={ true }>
                {/* <Row></Row> */}
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col md={ "6" }>
                                        <H6>Title</H6>
                                        <P>{location.state.dataObj.postjobsection_title}</P>
                                    </Col>
                                    <Col md={ "6" }>
                                        <H6>Category</H6>
                                        <P>{location.state.dataObj.postjobsection_category}</P>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={ "6" }>
                                        <H6>Employment Status</H6>
                                        <P>{location.state.dataObj.postjobsection_employmenstatus}</P>
                                    </Col>
                                    <Col md={ "6" }>
                                        <H6>Vacancy</H6>
                                        <P>{location.state.dataObj.postjobsection_vacancy}</P>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={ "6" }>
                                        <H6>Application Deadline</H6>
                                        <P>{location.state.dataObj.postjobsection_applicationdeadline}</P>
                                    </Col>
                                    <Col md={ "6" }>
                                        <H6>Experience in Years</H6>
                                        <P>{location.state.dataObj.postjobsection_experienceinyears}</P>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={ "6" }>
                                        <H6>Job Location</H6>
                                        <P>{location.state.dataObj.postjobsection_joblocation}</P>
                                    </Col>
                                    <Col md={ "6" }>
                                        <H6>Email</H6>
                                        <P>{location.state.dataObj.postjobsection_email}</P>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={ "6" }>
                                        <H6>Serial Number</H6>
                                        <P>{location.state.dataObj.postjobsection_serialnumber}</P>
                                    </Col>
                                    <Col md={ "6" }>
                                        <H6>Meta Keywords</H6>
                                        <P>{location.state.dataObj.postjobsection_metakeywords}</P>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={ "12" }>
                                        <H6>Meta Description</H6>
                                        <P>{location.state.dataObj.postjobsection_metadescription}</P>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={ "12" }>
                                        <H6>Job Responsibilities</H6>
                                        {location.state.dataObj.postjobsection_jobresponsibilities}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={ "12" }>
                                        <H6>Educational Requirements</H6>
                                        <P>{location.state.dataObj.postjobsection_educationalrequirements}</P>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={ "12" }>
                                        <H6>Experience Requirements</H6>
                                        <P>{location.state.dataObj.postjobsection_experiencerequirements}</P>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={ "12" }>
                                        <H6>Additional Requirements</H6>
                                        <P>{location.state.dataObj.postjobsection_additionalrequirements}</P>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={ "12" }>
                                        <H6>Salary</H6>
                                        <P>{location.state.dataObj.postjobsection_salary}</P>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={ "12" }>
                                        <H6>Benefits</H6>
                                        <P>{location.state.dataObj.postjobsection_benefits}</P>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={ "12" }>
                                        <H6>Read Before Apply</H6>
                                        <P>{location.state.dataObj.postjobsection_readbeforeapply}</P>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
export default ViewJobDetails;
