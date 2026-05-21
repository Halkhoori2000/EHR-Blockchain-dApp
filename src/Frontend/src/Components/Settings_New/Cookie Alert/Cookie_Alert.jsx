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
import CKEditors from "react-ckeditor-component";
import { getCookieAlertData, updateCookieAlertInfo } from "../../../api/api";
function Cookie_Alert () {
  
  const [ cookieAlertStatus, setcookieAlertStatus ] = useState( '' );
  const [cookieAlertButtonText, setcookieAlertButtonText ] = useState( '' );
  const [ content, setContent ] = useState( "content" );

  const [ cookieResData, setcookieResData ] = useState( [] );

  const getAndPopulateData = async () => {
    const res = await getCookieAlertData();
    setcookieResData( [ ...res.data ] );
    setcookieAlertStatus( res.data[ 0 ].updatecookiealert_cookiealertstatus );
    setcookieAlertButtonText( res.data[ 0 ].updatecookiealert_cookiealertbuttontext );
    setContent( res.data[ 0 ].Updatecookiealert_cookiealerttext );
  }

  const updateCookieAlertDataInDb = async (data) => {
    const dataObj = {
      updatecookiealert_cookiealertstatus: cookieAlertStatus,
      updatecookiealert_cookiealertbuttontext: cookieAlertButtonText,
      Updatecookiealert_cookiealerttext: content,
      uniqueId: data
    }
    const res = await updateCookieAlertInfo( dataObj );
    if ( res.status === 200 ) {
      alert( "Cookie settings updated." );
    }
    else {
      alert( "Settings update failed" );
    }
  }

  useEffect( () => {
    getAndPopulateData();
  },[])
  
  const onChange = (evt) => {
    const newContent = evt.editor.getData();
    setContent(newContent);
  };
  return (
    <Fragment>
      <Breadcrumbs
        parent="Settings"
        title="Update Cookie Alert"
        mainTitle="Update Cookie Alert"
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
                        <Label>{"Cookie Alert Status "}</Label>
                        <Input
                          onChange={(e) => setcookieAlertStatus(e.target.value)}
                          value={ cookieAlertStatus }
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Category</option>
                          <option selected>Active</option>
                          <option>DeActive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Label>{"Cookie Alert Button Text"}</Label>
                        <Input
                          onChange={(e) => setcookieAlertButtonText(e.target.value)}
                          value={ cookieAlertButtonText }
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{"Cookie Alert Text "}</Label>
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
                        <Button
                            onClick={() => updateCookieAlertDataInDb(cookieResData[0].updatecookiealert_id)}
                            disabled={ ( cookieAlertStatus && cookieAlertButtonText && content !== '') ? false : true }
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

export default Cookie_Alert;
