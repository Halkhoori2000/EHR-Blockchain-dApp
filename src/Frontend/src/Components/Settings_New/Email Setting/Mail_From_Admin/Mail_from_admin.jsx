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
import { getMailFromAdmin, updateMailFromAdmin } from "../../../../api/api";

function Mail_from_admin () {

  const [ mailFromAdminState, setmailFromAdminState ] = useState( [] );
  
  const [ SMTPhost, setSMTPhost ] = useState( '' );
  const [SMTPport, setSMTPport] = useState( '' );
  const [encryption, setencryption] = useState( '' );
  const [SMTPusername, setSMTPusername] = useState( '' );
  const [SMTPpassword, setSMTPpassword] = useState( '' );
  const [fromEmail, setfromEmail] = useState( '' );
  const [fromName, setfromName] = useState( '' );
  const [ SMTPstatus, setSMTPstatus ] = useState( '' );

  const populateDataFromDB = async () => {
    const res = await getMailFromAdmin();
    setmailFromAdminState( [ ...res.data ] );
    setSMTPhost( res.data[ 0 ].mailfromadmin_SMTPhost );
    setSMTPport( res.data[ 0 ].mailfromadmin_SMTPport );
    setencryption( res.data[ 0 ].mailfromadmin_encryption );
    setSMTPusername( res.data[ 0 ].mailfromadmin_SMTPusername );
    setSMTPpassword( res.data[ 0 ].mailfromadmin_SMTPpassword );
    setfromEmail( res.data[ 0 ].mailfromadmin_fromemail );
    setfromName( res.data[ 0 ].mailfromadmin_fromname );
    setSMTPstatus( res.data[ 0 ].mailfromadmin_SMTPstatus );
  }

  const updateMailFromAdminInDb = async(data) => {
    const dataObj = {
      mailfromadmin_SMTPhost: SMTPhost,
      mailfromadmin_SMTPport: SMTPport,
      mailfromadmin_encryption: encryption,
      mailfromadmin_SMTPusername: SMTPusername,
      mailfromadmin_SMTPpassword: SMTPpassword,
      mailfromadmin_fromemail: fromEmail,
      mailfromadmin_fromname: fromName,
      mailfromadmin_SMTPstatus: SMTPstatus,
      uniqueID: data
    }
    const res = await updateMailFromAdmin(dataObj);
    if ( res.status === 200 ) {
      alert( "Settings updated successfully" );
    }
    else {
      alert( "Settings update failed" );
    }
  }

  useEffect( () => {
    populateDataFromDB();
  },[])
  
  return (
    <Fragment>
      <Breadcrumbs
        parent="Settings"
        title="Mail From Admin"
        mainTitle="Mail From Admin"
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
                    <Col md={"6"}>
                      {" "}
                      <FormGroup>
                        <Label>{"SMTP Host"}</Label>
                        <Input
                          onChange={(e) => setSMTPhost(e.target.value)}
                          value={SMTPhost}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"SMTP Port"}</Label>
                        <Input
                          onChange={(e) => setSMTPport(e.target.value)}
                          value={SMTPport}
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
                        <Label>{"Encryption  "}</Label>
                        <Input
                          onChange={(e) => setencryption(e.target.value)}
                          value={encryption}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"SMTP Username"}</Label>
                        <Input
                          onChange={(e) => setSMTPusername(e.target.value)}
                          value={SMTPusername}
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
                        <Label>{"SMTP Password  "}</Label>
                        <Input
                          onChange={(e) => setSMTPpassword(e.target.value)}
                          value={SMTPpassword}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"From Email "}</Label>
                        <Input
                          onChange={(e) => setfromEmail(e.target.value)}
                          value={fromEmail}
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
                        <Label>{"From Name "}</Label>
                        <Input
                          onChange={(e) => setfromName(e.target.value)}
                          value={fromName}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"SMTP Status"}</Label>
                        <Input
                          onChange={(e) => setSMTPstatus(e.target.value)}
                          value={SMTPstatus}
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Category</option>
                          <option>Active</option>
                          <option selected>DeActive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Button
                            onClick={() => updateMailFromAdminInDb(mailFromAdminState[0].mailfromadmin_id)}
                            disabled={ ( SMTPhost && SMTPport && encryption && SMTPusername && SMTPpassword && fromEmail && fromName && SMTPstatus !== '' ) ? false : true }
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

export default Mail_from_admin;
