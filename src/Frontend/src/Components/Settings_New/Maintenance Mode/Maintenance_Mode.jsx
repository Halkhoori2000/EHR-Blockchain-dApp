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

import Dropzone from "react-dropzone-uploader";
import { getMaintenenceInfoData, updateMaintenenceInfo } from "../../../api/api";
function Maintenance_Mode () {

  const [ maintenanceModeResData, setmaintenanceModeResData ] = useState( [] );
  
  const [ maintenenceMode, setmaintenenceMode ] = useState( '' );
  const [ allowedIpAddresses, setallowedIpAddresses ] = useState( '' );
  const [ maintenenceText, setmaintenenceText ] = useState( '' );
  const [ maintenenceImageFile, setmaintenenceImageFile ] = useState( null );
  
  const getMaintenanceModeData = async () => {
    const res = await getMaintenenceInfoData();
    setmaintenanceModeResData( [ ...res.data ] );
    setmaintenenceMode( res.data[ 0 ].updatemaintenancemode_maintenancemode );
    setallowedIpAddresses( res.data[ 0 ].updatemaintenancemode_allowedipaddresses );
    setmaintenenceText( res.data[ 0 ].updatemaintenancemode_maintenancetext );
  }

  const updateMaintenenceInfoInDb = async ( data ) => {
    const formData = new FormData();
    formData.append( 'updatemaintenancemode_maintenancemode', maintenenceMode );
    formData.append( 'updatemaintenancemode_allowedipaddresses', allowedIpAddresses );
    formData.append( 'updatemaintenancemode_maintenancetext', maintenenceText );
    formData.append( 'maintainencePic', maintenenceImageFile );
    formData.append( 'uniqueId', data );
    const res = await updateMaintenenceInfo( formData );
    if ( res.status === 200 ) {
      alert( 'Successfully updated' );
    }
  }

  useEffect( () => {
    getMaintenanceModeData();
  },[])


  const getUploadParams = ({ meta }) => {
    return {
      url: "https://httpbin.org/post",
    };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ( { meta, file }, status ) => {
    setmaintenenceImageFile( file );
  };
  return (
    <Fragment>
      <Breadcrumbs
        parent="Settings"
        title="Update Maintenance Mode"
        mainTitle="Update Maintenance Page & Mode"
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
                        <Label>{"Maintenance Mode"}</Label>
                        <Input
                          onChange={(e) => setmaintenenceMode(e.target.value)}
                          value={maintenenceMode}
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
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{" Allowed IP Addresses"}</Label>
                        <Input
                          onChange={(e) => setallowedIpAddresses(e.target.value)}
                          value={allowedIpAddresses}
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
                        <Label>{"Maintenance Text"}</Label>
                        <Input
                          onChange={(e) => setmaintenenceText(e.target.value)}
                          value={maintenenceText}
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
                        <Label>{"Maintenance"}</Label>
                        <Dropzone
                          getUploadParams={getUploadParams}
                          onChangeStatus={handleChangeStatus}
                          maxFiles={1}
                          multiple={false}
                          canCancel={false}
                          inputContent="Drop A File"
                          styles={{
                            dropzone: { width: "100%", height: 50 },
                            dropzoneActive: { borderColor: "green" },
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Button
                            onClick={() => updateMaintenenceInfoInDb(maintenanceModeResData[0].updatemaintenancemode_id )}
                            disabled={ ( maintenenceMode && allowedIpAddresses && maintenenceText !== '' && (maintenenceImageFile !== null) ) ? false : true }
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

export default Maintenance_Mode;
