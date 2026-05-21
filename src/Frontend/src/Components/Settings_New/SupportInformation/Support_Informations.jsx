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

import { Breadcrumbs, Btn } from "../../../AbstractElements";
import { useNavigate, Link } from "react-router-dom";
import { getSupportInfo, updateSupportInfo } from "../../../api/api";

function Support_Informations () {
  
  const [ supportDBData, setsupportDBData ] = useState( [] );

  const [ supportEmail, setsupportEmail ] = useState( '' );
  const [ supportPhone, setsupportPhone ] = useState( '' );

  const getSupportInfoFromDb = async () => {
    const res = await getSupportInfo();
    setsupportDBData( [ ...res.data ] );
    setsupportEmail( res.data[ 0 ].supportinformations_email );
    setsupportPhone( res.data[ 0 ].Supportinformations_phone );
  }

  const updateSupportDetails = async ( data ) => {
    
    const dataObj = {
      supportinformations_email: supportEmail,
      Supportinformations_phone: supportPhone,
      uniqueID: data
    }
    const res = await updateSupportInfo( dataObj );
    if ( res.status === 200 ) {
      alert( 'Successfully updated' );
    }
  }

  useEffect( () => {
    getSupportInfoFromDb();
  },[])
  return (
    <Fragment>
      <Breadcrumbs
        parent=" Settings"
        title="Support Informations"
        mainTitle="Support Informations"
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
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Email"}</Label>
                        <Input
                          onChange={(e) => setsupportEmail(e.target.value)}
                          value={supportEmail}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Col md={"12"}>
                    <FormGroup>
                      <Label>{"Phone"}</Label>
                      <Input
                        onChange={(e) => setsupportPhone(e.target.value)}
                        value={supportPhone}
                        type="text"
                        name="progress_level"
                        className="form-control digits"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Row></Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Button
                            onClick={() => updateSupportDetails(supportDBData[0].supportinformations_id)}
                            disabled={ ( supportEmail && supportPhone !== '' ) ? false : true }
                            className="me-3"
                            color="success"
                          >
                            { "Update" }
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

export default Support_Informations;
