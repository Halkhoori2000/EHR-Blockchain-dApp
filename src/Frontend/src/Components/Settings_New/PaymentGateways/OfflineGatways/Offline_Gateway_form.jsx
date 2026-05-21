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
  Button,
} from "reactstrap";
import { Breadcrumbs, Btn } from "../../../../AbstractElements";
import { useNavigate, Link } from "react-router-dom";

import CKEditors from "react-ckeditor-component";
import { getOfflinePaymentGatewayData, updateOfflinePaymentGatewayInfo } from "../../../../api/api";

function Offline_Gateway_form () {

  const [ offlineResData, setofflineResData ] = useState( [] );
  
  const [ gatewayName, setgatewayName ] = useState( '' );
  const [ serialNumber, setserialNumber ] = useState( '' );
  const [ receipentImage, setreceipentImage ] = useState( '' );
  const [shortDescription, setshortDescription ] = useState( '' );
  const [content, setContent] = useState("content");
  const onChange = (evt) => {
    const newContent = evt.editor.getData();
    setContent(newContent);
  };

  const getMercadopagoTable = async () => {
    const res = await getOfflinePaymentGatewayData();
    setofflineResData( [ ...res.data ] );
    setgatewayName( res.data[ 0 ].offlinepaymentgateway_name);
    setserialNumber( res.data[ 0 ].offlinepaymentgateway_serialnumber);
    setreceipentImage( res.data[ 0 ].offlinepaymentgateway_receiptimage);
    setshortDescription( res.data[ 0 ].offlinepaymentgateway_shortdescription);
    setContent( res.data[ 0 ].offlinepaymentgateway_instructions);
  }

  const updateOfflineGatewayDataInDb = async (data) => {
    const dataObj = {
      offlinepaymentgateway_name: gatewayName,
      offlinepaymentgateway_serialnumber: serialNumber,
      offlinepaymentgateway_receiptimage: receipentImage,
      offlinepaymentgateway_shortdescription: shortDescription,
      offlinepaymentgateway_instructions: content,
      uniqueId: data
    }
    const res = await updateOfflinePaymentGatewayInfo( dataObj );
    if ( res.status === 200 ) {
      alert( "Offline Gateway settings updated." );
    }
    else {
      alert( "Settings update failed" );
    }
  }
  useEffect( () => {
    getMercadopagoTable();
  },[])
  return (
    <Fragment>
      <Breadcrumbs
        parent="Settings"
        title="Offline Gateway"
        mainTitle="Offline Gateway"
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
                      <FormGroup>
                        <Label>{"Name  "}</Label>
                        <Input
                          onChange={(e) => setgatewayName(e.target.value)}
                          value={gatewayName}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Serial Number"}</Label>
                        <input
                          onChange={(e) => setserialNumber(e.target.value)}
                          value={serialNumber}
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
                    <Col md="12">
                      <FormGroup>
                        <Label>{"Receipt Image"}</Label>
                        <Input
                          onChange={(e) => setreceipentImage(e.target.value)}
                          value={receipentImage}
                          type="select"
                          name="issues"
                          placeholder=" Select a Status "
                          className="form-control digits"
                          required
                        >
                          {" "}
                          <option disabled selected>
                            Select
                          </option>
                          <option>Active</option>
                          <option>Deactive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Label>{"Short Description"}</Label>
                        <Input
                          onChange={(e) => setshortDescription(e.target.value)}
                          value={shortDescription}
                          type="textarea"
                          className="form-control"
                          placeholder="Enter Meta Description"
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{"Instructions"}</Label>
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
                            onClick={() => updateOfflineGatewayDataInDb(offlineResData[0].offlinepaymentgateway_id )}
                            disabled={ ( gatewayName && receipentImage && serialNumber && shortDescription && content !== '' ) ? false : true }
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

export default Offline_Gateway_form;
