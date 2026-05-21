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

import { Breadcrumbs, Btn } from "../../../AbstractElements";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { insertSocialLinks, updateSocialLinks } from "../../../api/api";

function Social_Links () {

  const navigate = useNavigate();
  const location = useLocation();

  const [ socialUrl, setsocialUrl ] = useState( '' );
  const [ serialNumber, setserialNumber ] = useState( '' );

  const saveSocialLinks = async () => {

    const dataObj = {
      sociallinks_url: socialUrl,
      Sociallinks_serialnumber: serialNumber
    }
    const res = await insertSocialLinks( dataObj );
    if ( res.status === 200 ) {
      navigate( '/settings/social_links_list' );
    }
    else {
      alert( 'Error' );
    }
  }

  const updateArtclesInfo = async (data) => {
    
    const dataObj = {
      sociallinks_url: socialUrl,
      Sociallinks_serialnumber: serialNumber,
      uniqueID: data
    }
    const res = await updateSocialLinks( dataObj );
    if ( res.status === 200 ) {
      navigate( '/settings/social_links_list' );
    }
    else {
      alert( 'Error occured.' );
    }
  }

  const populateArticlesFields = () => {
    if ( location.state ) {
      setsocialUrl( location.state.dataObj.sociallinks_url );
      setserialNumber( location.state.dataObj.Sociallinks_serialnumber );
    }
  }

  useEffect( () => {
    populateArticlesFields();
  }, [] );
  return (
    <Fragment>
      <Breadcrumbs
        parent="Settings"
        title="Social Links"
        mainTitle="Social Links"
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
                        <Label>{"URL "}</Label>
                        <Input
                          onChange={(e) => setsocialUrl(e.target.value)}
                          value={socialUrl}
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
                    <Col>
                      <FormGroup className="mb-0">
                        { ( location.state )
                          ?
                          <Button
                            onClick={ () => updateArtclesInfo(location.state.dataObj.sociallinks_id) }
                            disabled={(socialUrl && serialNumber !== '') ? false : true}
                            className="me-3"
                            color="success"
                          >
                            { "Update" }
                          </Button>
                          :
                        <Button
                        onClick={saveSocialLinks}
                          disabled={(socialUrl && serialNumber !== '') ? false : true}
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

export default Social_Links;
