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
  InputGroup,
  InputGroupText,
  Button,
} from "reactstrap";

import { Breadcrumbs, Btn } from "../../../../AbstractElements";
import { getMailToAdmin, updateMailToAdmin } from "../../../../api/api";

function Mail_To_Admin () {

  const [ mailToAdminData, setmailToAdminData ] = useState( [] );
  
  const [ emailAddressVal, setemailAddressVal ] = useState( '' );

  const getEmailFromDb = async () => {
    const res = await getMailToAdmin();
    setmailToAdminData( [ ...res.data ] );
    setemailAddressVal( res.data[ 0 ].Mailtoadmin_emailaddress );
  }

  const updateMailToAdminFromDb = async(data) => {
    const dataObj = {
      Mailtoadmin_emailaddress: emailAddressVal,
      uniqueID: data
    }
    const res = await updateMailToAdmin(dataObj);
    if ( res.status === 200 ) {
      alert( "Settings updated successfully" );
    }
    else {
      alert( "Settings update failed" );
    }
  }

  useEffect( () => {
    getEmailFromDb();
  },[])
  return (
    <Fragment>
      <Breadcrumbs
        parent="Settings"
        title="Mail To Admin"
        mainTitle="Mail To Admin"
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
                      {" "}
                      <FormGroup>
                        <Label>{"Email Address"}</Label>
                        <Input
                          onChange={(e) => setemailAddressVal(e.target.value)}
                          value={emailAddressVal}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Button
                            onClick={() => updateMailToAdminFromDb(mailToAdminData[0].mailtoadmin_id)}
                            disabled={ ( emailAddressVal !== '' ) ? false : true }
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

export default Mail_To_Admin;
