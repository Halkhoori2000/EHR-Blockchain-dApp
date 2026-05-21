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

import Dropzone from "react-dropzone-uploader";
import { getPreloaderDetails, updatePreloaderdetails } from "../../../api/api";

function UpdatePreloader () {
  
  const [ statusVal, setstatusVal ] = useState( '' );
  const [ preloader, setpreloader ] = useState( null );
  const [ mainPreloaderState, setmainPreloaderState ] = useState( [] );

  const populateDataFromDB = async () => {
    const res = await getPreloaderDetails();
    setmainPreloaderState( [ ...res.data ] );
    setstatusVal( mainPreloaderState[ 0 ].updatepreloader_status );
  }

  const updatePreloaderDetailsINDB = async (data) => {

    const formData = new FormData();
    formData.append( 'status', statusVal );
    formData.append('preloader_img', preloader );
    formData.append('uniqueId', data );
    const res = await updatePreloaderdetails( formData );
    if ( res.status === 200 ) {
      alert( 'Successfully updated' );
    }
  }
  useEffect( () => {
    populateDataFromDB();
  },[])
  const getUploadParams = ({ meta }) => {
    return {
      url: "https://httpbin.org/post",
    };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ( { meta, file }, status ) => {
    setpreloader( file );
  };
  return (
    <Fragment>
      <Breadcrumbs
        parent="Settings"
        title="Update Preloader"
        mainTitle="Update Preloader"
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
                    <Col>
                      <FormGroup>
                        <Label>{"Status"}</Label>
                        <Input
                          onChange={(e) => setstatusVal(e.target.value)}
                          value={statusVal}
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
                      <FormGroup>
                        <Label>{"Preloader "}</Label>
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
                            onClick={() => updatePreloaderDetailsINDB(mainPreloaderState[0].updatepreloader_id)}
                            disabled={ ( preloader !== null ) ? false : true }
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

export default UpdatePreloader;
