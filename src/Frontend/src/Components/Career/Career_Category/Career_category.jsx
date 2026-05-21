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
import { insertCareerCategory, updateCareerLinkItem } from "../../../api/api";

function Career_category () {
  
  const navigate = useNavigate();
  const location = useLocation();

  const [ careerCategName, setcareerCategName ] = useState( '' );
  const [ careerCategStatus, setcareerCategStatus ] = useState( '' );
  const [ careerCategSrNum, setcareerCategSrNum ] = useState( '' );
  
  const saveCareerCategories = async () => {

    const dataObj = {
      categorysection_name: careerCategName,
      categorysection_status: careerCategStatus,
      Categorysection_serialnumber: careerCategSrNum,
    }

    const res = await insertCareerCategory( dataObj );
    if ( res.status === 200 ) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/carrer_category_list`);
    }
    else {
      alert( 'Error' );
    }
  };

  const updateCareerLinkInDB = async (id) => {
    
    const dataObj = {
      categorysection_name: careerCategName,
      categorysection_status: careerCategStatus,
      Categorysection_serialnumber: careerCategSrNum,
    }
    const res = await updateCareerLinkItem(id, dataObj);
    if ( res.status === 200 ) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/carrer_category_list`);
    }
    else {
      alert( 'Error occured.' );
    }
  }

  const populateCareerFields = () => {
    if ( location.state ) {
      setcareerCategName( location.state.dataObj.categorysection_name );
      setcareerCategStatus( location.state.dataObj.categorysection_status );
      setcareerCategSrNum( location.state.dataObj.Categorysection_serialnumber );
    }
  }

  useEffect( () => {
    populateCareerFields();
  }, [] );

  return (
    <Fragment>
      <Breadcrumbs parent="FAQ" title="Categories" mainTitle="Categories" />
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
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Name "}</Label>
                        <Input
                          onChange={ ( e ) => setcareerCategName( e.target.value ) }
                          value={careerCategName}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>{"Status"}</Label>
                        <Input
                          onChange={ ( e ) => setcareerCategStatus( e.target.value ) }
                          value={careerCategStatus}
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled selected>
                            {" "}
                            Select a status
                          </option>
                          <option>Active</option>
                          <option>Deactive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Serial Number"}</Label>
                        <input
                          onChange={(e) => setcareerCategSrNum(e.target.value)}
                          value={careerCategSrNum}
                          className="form-control"
                          type="number"
                          name="rate"
                          defaultValue="10"
                          placeholder="Serial Number"
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
                            onClick={ () => updateCareerLinkInDB(location.state.dataObj.categorysection_id ) }
                            disabled={(careerCategName && careerCategStatus && careerCategSrNum !== '' ) ? false : true}
                            className="me-3"
                            color="success"
                          >
                            { "Update" }
                          </Button>
                          :
                        <Button
                          onClick={saveCareerCategories}
                          disabled={(careerCategName && careerCategStatus && careerCategSrNum !== '' ) ? false : true}
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

export default Career_category;
