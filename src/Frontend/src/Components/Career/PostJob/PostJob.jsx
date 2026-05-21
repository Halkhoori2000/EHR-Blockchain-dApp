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
import CKEditors from "react-ckeditor-component";
import { insertPostJobData, updateJobPostData } from "../../../api/api";
function PostJob () {

  const location = useLocation();
  const navigate = useNavigate();
  
  const [ title, settitle ] = useState( '' );
  const [ category, setcategory ] = useState( '' );
  const [ employementStatus, setemployementStatus ] = useState( '' );
  const [ vacancy, setvacancy ] = useState( '' );
  const [ deadline, setdeadline ] = useState( '' );
  const [ experienceInYears, setexperienceInYears ] = useState( '' );
  const [ jobLocation, setjobLocation ] = useState( '' );
  const [ email, setemail ] = useState( '' );
  const [ serialNum, setserialNum ] = useState( '' );
  const [ metaKeywords, setmetaKeywords ] = useState( '' );
  const [ metaDescription, setmetaDescription ] = useState( '' );
  const [jobResponsibilities, setjobResponsibilities] = useState('')
  const [educationalRequirements, seteducationalRequirements] = useState('')
  const [experienceRequirements, setexperienceRequirements] = useState('')
  const [additionalRequirements, setadditionalRequirements] = useState('')
  const [salary, setsalary] = useState('')
  const [benifits, setbenifits] = useState('')
  const [ readBefore, setreadBefore ] = useState( '' )
  

  const saveJobPost = async () => {

    const dataObj = {
      postjobsection_title: title,
      postjobsection_category: category,
      postjobsection_employmenstatus: employementStatus,
      postjobsection_vacancy: vacancy,
      postjobsection_applicationdeadline: deadline,
      postjobsection_experienceinyears: experienceInYears,
      postjobsection_joblocation: jobLocation,
      postjobsection_email: email,
      postjobsection_serialnumber: serialNum,
      postjobsection_metakeywords: metaKeywords,
      postjobsection_metadescription: metaDescription,
      postjobsection_jobresponsibilities: jobResponsibilities,
      postjobsection_educationalrequirements: educationalRequirements,
      postjobsection_experiencerequirements: experienceRequirements,
      postjobsection_additionalrequirements: additionalRequirements,
      postjobsection_salary: salary,
      postjobsection_benefits: benifits,
      postjobsection_readbeforeapply: readBefore
    }

    const res = await insertPostJobData( dataObj );
    if ( res.status === 200 ) {
      navigate( '/viho/hero_section/post_job_list' );
    }
    else {
      alert( 'Error' );
    }
  };

  const updateJobPostDataInDB = async (data) => {
    
    const dataObj = {
      postjobsection_title: title,
      postjobsection_category: category,
      postjobsection_employmenstatus: employementStatus,
      postjobsection_vacancy: vacancy,
      postjobsection_applicationdeadline: deadline,
      postjobsection_experienceinyears: experienceInYears,
      postjobsection_joblocation: jobLocation,
      postjobsection_email: email,
      postjobsection_serialnumber: serialNum,
      postjobsection_metakeywords: metaKeywords,
      postjobsection_metadescription: metaDescription,
      postjobsection_jobresponsibilities: jobResponsibilities,
      postjobsection_educationalrequirements: educationalRequirements,
      postjobsection_experiencerequirements: experienceRequirements,
      postjobsection_additionalrequirements: additionalRequirements,
      postjobsection_salary: salary,
      postjobsection_benefits: benifits,
      postjobsection_readbeforeapply: readBefore,
      uniqueId: data
    }
    const res = await updateJobPostData( dataObj );
    if ( res.status === 200 ) {
      navigate( '/viho/hero_section/post_job_list' );
    }
    else {
      alert( 'Error occured.' );
    }
  }

  const populateJobPostFields = () => {
    if ( location.state ) {
      settitle( location.state.dataObj.postjobsection_title );
      setcategory( location.state.dataObj.postjobsection_category );
      setemployementStatus( location.state.dataObj.postjobsection_employmenstatus );
      setvacancy( location.state.dataObj.postjobsection_vacancy );
      setdeadline( location.state.dataObj.postjobsection_applicationdeadline );
      setexperienceInYears( location.state.dataObj.postjobsection_experienceinyears );
      setjobLocation( location.state.dataObj.postjobsection_joblocation );
      setemail( location.state.dataObj.postjobsection_email );
      setserialNum( location.state.dataObj.postjobsection_serialnumber );
      setmetaKeywords( location.state.dataObj.postjobsection_metakeywords );
      setmetaDescription( location.state.dataObj.postjobsection_metadescription );
      seteducationalRequirements( location.state.dataObj.postjobsection_educationalrequirements );
      setjobResponsibilities( location.state.dataObj.postjobsection_jobresponsibilities );
      setexperienceRequirements( location.state.dataObj.postjobsection_experiencerequirements );
      setadditionalRequirements( location.state.dataObj.postjobsection_additionalrequirements );
      setsalary( location.state.dataObj.postjobsection_salary );
      setbenifits( location.state.dataObj.postjobsection_benefits );
      setreadBefore( location.state.dataObj.postjobsection_readbeforeapply );
    }
  }

  useEffect( () => {
    populateJobPostFields();
  }, [] );
  

  return (
    <Fragment>
      <Breadcrumbs parent="Career" title="Post Job" mainTitle="Post Job" />
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
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Title"}</Label>
                        <Input
                          onChange={(e) => settitle(e.target.value)}
                          value={title}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>{"Category"}</Label>
                        <Input
                          onChange={(e) => setcategory(e.target.value)}
                          value={ category }
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled selected>
                            {" "}
                            Select a Category
                          </option>
                          <option>Active</option>
                          <option>Deactive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Employment Status"}</Label>
                        <Input
                          onChange={(e) => setemployementStatus(e.target.value)}
                          value={employementStatus}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Vacancy "}</Label>
                        <input
                          onChange={(e) => setvacancy(e.target.value)}
                          value={vacancy}
                          className="form-control"
                          type="number"
                          name="rate"
                          placeholder="Vacancy "
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      {" "}
                      <FormGroup>
                        <Label>Application Deadline</Label>

                        <Input
                          onChange={(e) => setdeadline(e.target.value)}
                          value={ deadline }
                          className="form-control digits"
                          type="date"
                          defaultValue="2022-01-01"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Experience in Years"}</Label>
                        <Input
                          onChange={(e) => setexperienceInYears(e.target.value)}
                          value={ experienceInYears}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      {" "}
                      <FormGroup>
                        <Label>Job Location </Label>

                        <Input
                          onChange={(e) => setjobLocation(e.target.value)}
                          value={ jobLocation}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Email "}</Label>
                        <Input
                          onChange={(e) => setemail(e.target.value)}
                          value={ email}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      {" "}
                      <FormGroup>
                        <Label>Serial Number </Label>

                        <input
                          onChange={(e) => setserialNum(e.target.value)}
                          value={ serialNum}
                          className="form-control"
                          type="number"
                          name="rate"
                          placeholder="Serial Number"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Meta Keywords "}</Label>
                        <Input
                          onChange={(e) => setmetaKeywords(e.target.value)}
                          value={ metaKeywords}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"12"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description "}</Label>
                        <Input
                          onChange={(e) => setmetaDescription(e.target.value)}
                          value={ metaDescription}
                          type="textarea"
                          className="form-control"
                          placeholder="Enter Meta Description "
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Job Responsibilities "}</Label>
                        <CKEditors
                          activeclassName="p10"
                          content={jobResponsibilities}
                          events={{
                            change: (e) => setjobResponsibilities( e.editor.getData() ) ,
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Educational Requirements "}</Label>
                        <CKEditors
                          activeclassName="p10"
                          content={educationalRequirements}
                          events={{
                            change: (e) => seteducationalRequirements( e.editor.getData() ) ,
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Experience Requirements "}</Label>
                        <CKEditors
                          activeclassName="p10"
                          content={experienceRequirements}
                          events={{
                            change: (e) => setexperienceRequirements( e.editor.getData() ) ,
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>"Additional Requirements"</Label>
                        <CKEditors
                          activeclassName="p10"
                          content={additionalRequirements}
                          events={{
                            change: (e) => setadditionalRequirements( e.editor.getData() ) ,
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Salary"}</Label>
                        <CKEditors
                          activeclassName="p10"
                          content={salary}
                          events={{
                            change: (e) => setsalary( e.editor.getData() ) ,
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Benefits"}</Label>
                        <CKEditors
                          activeclassName="p10"
                          content={benifits}
                          events={{
                            change: (e) => setbenifits( e.editor.getData() ) ,
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>Read Before Apply</Label>
                        <CKEditors
                          activeclassName="p10"
                          content={readBefore}
                          events={{
                            change: (e) => setreadBefore( e.editor.getData() ) ,
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        { ( location.state )
                          ?
                          <Button
                            onClick={ () => updateJobPostDataInDB(location.state.dataObj.postjobsection_id ) }
                            disabled={(category && deadline && email && employementStatus && experienceInYears && jobLocation && metaDescription && metaKeywords && serialNum && title && vacancy && jobResponsibilities && educationalRequirements && experienceRequirements && additionalRequirements && salary && benifits && readBefore !== '' ) ? false : true}
                            className="me-3"
                            color="success"
                          >
                            { "Update" }
                          </Button>
                          :
                        <Button
                          onClick={saveJobPost}
                          disabled={(category && deadline && email && employementStatus && experienceInYears && jobLocation && metaDescription && metaKeywords && serialNum && title && vacancy && jobResponsibilities && educationalRequirements && experienceRequirements && additionalRequirements && salary && benifits && readBefore !== '' ) ? false : true}
                          className="me-3"
                          color="success"
                        >
                            {"Submit"}
                        </Button>
                        }
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

export default PostJob;
