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
import axios from "axios";
import { Breadcrumbs, Btn } from "../../../AbstractElements";
import { useNavigate, Link } from "react-router-dom";
import { Typeahead } from "react-bootstrap-typeahead";
import { TypeaheadDataApi } from "../../../api";
import { getGeneralSettings, updateGeneralSettings } from "../../../api/api";
function General_Settings() {
  const multiple = false;
  const [ options, setOptions ] = useState( [] );

  const [ updateData, setupdateData ] = useState( [] );

  const [ websiteTitle, setwebsiteTitle ] = useState( '' );
  const [ timeZoneVal, settimeZoneVal ] = useState( '' );
  const [ baseCurrencySymbol, setbaseCurrencySymbol ] = useState( '' );
  const [ baseCurrencySymbolPosition, setbaseCurrencySymbolPosition ] = useState( '' );
  const [ baseCurrencyText, setbaseCurrencyText ] = useState( '' );
  const [ baseCurrencyTextPosition, setbaseCurrencyTextPosition ] = useState( '' );
  const [ baseCurrencyRate, setbaseCurrencyRate ] = useState( '' );

  const updateGeneralSettingsInDB = async(data) => {
    const dataObj = {
      generalsettings_title: websiteTitle,
      generalsettings_Timezone: timeZoneVal,
      generalsettings_basecurrencysymbol: baseCurrencySymbol,
      generalsettings_basecurrencysymbolposition: baseCurrencySymbolPosition,
      generalsettings_basecurrencytext: baseCurrencyText,
      Generalsettings_basecurrencytextposition: baseCurrencyTextPosition,
      generalsettings_basecurrencyrate: baseCurrencyRate,
      uniqueID: data
    }
    const res = await updateGeneralSettings(dataObj);
    if ( res.status === 200 ) {
      alert( "Settings updated successfully" );
    }
    else {
      alert( "Settings update failed" );
    }
  }

  const getGeneralSettingsData = async () => {
    const res = await getGeneralSettings();
    setupdateData( [ ...res.data ] );
    setwebsiteTitle( res.data[ 0 ].generalsettings_title );
    setbaseCurrencySymbol( res.data[ 0 ].generalsettings_basecurrencysymbol );
    setbaseCurrencySymbolPosition( res.data[ 0 ].generalsettings_basecurrencysymbolposition );
    setbaseCurrencyText( res.data[ 0 ].generalsettings_basecurrencytext );
    setbaseCurrencyTextPosition( res.data[ 0 ].Generalsettings_basecurrencytextposition );
    setbaseCurrencyRate( res.data[ 0 ].generalsettings_basecurrencyrate );
  }

  useEffect( () => {
    axios.get(TypeaheadDataApi).then((res) => setOptions(res.data));
    getGeneralSettingsData();
  },[])
  return (
    <Fragment>
      <Breadcrumbs
        parent="General Settings"
        title="General Settings"
        mainTitle="Update Basic Informations"
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
                        <Label>{"Website Title   "}</Label>
                        <Input
                          onChange={(e) => setwebsiteTitle(e.target.value)}
                          value={websiteTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <Form>
                        <FormGroup>
                          <Label>{"Timezone"}</Label>
                          <Typeahead
                            onChange={(e) => settimeZoneVal(e[0].name)}
                            id="basic-typeahead"
                            labelKey="name"
                            multiple={multiple}
                            options={options}
                            placeholder="Choose a state..."
                          />
                        </FormGroup>
                      </Form>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      {" "}
                      <FormGroup>
                        <Label>{"Base Currency Symbol "}</Label>
                        <Input
                          onChange={(e) => setbaseCurrencySymbol(e.target.value)}
                          value={baseCurrencySymbol}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Base Currency Symbol Position"}</Label>
                        <Input
                          onChange={(e) => setbaseCurrencySymbolPosition(e.target.value)}
                          value={baseCurrencySymbolPosition}
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
                          <option selected>Left</option>
                          <option>Right</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"4"}>
                      {" "}
                      <FormGroup>
                        <Label>{"Base Currency Text"}</Label>
                        <Input
                          onChange={(e) => setbaseCurrencyText(e.target.value)}
                          value={baseCurrencyText}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"4"}>
                      <FormGroup>
                        <Label>{"Base Currency Text Position"}</Label>
                        <Input
                          onChange={(e) => setbaseCurrencyTextPosition(e.target.value)}
                          value={baseCurrencyTextPosition}
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Category</option>
                          <option>Left</option>
                          <option selected>Right</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={"4"}>
                      {" "}
                      <FormGroup>
                        <Label>{"Base Currency Rate"}</Label>
                        <InputGroup className="mb-3">
                          <InputGroupText>{"1 USD ="}</InputGroupText>
                          <Input
                            onChange={(e) => setbaseCurrencyRate(e.target.value)}
                            value={baseCurrencyRate}
                            className="form-control"
                            type="number"
                            aria-label="Amount (to the nearest dollar)"
                          />
                          <InputGroupText>{"USD"}</InputGroupText>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Button
                            onClick={() => updateGeneralSettingsInDB(updateData[0].generalsettings_id)}
                            disabled={ ( websiteTitle && timeZoneVal && baseCurrencySymbol && baseCurrencySymbolPosition && baseCurrencyText && baseCurrencyTextPosition && baseCurrencyRate !== '' ) ? false : true }
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

export default General_Settings;
