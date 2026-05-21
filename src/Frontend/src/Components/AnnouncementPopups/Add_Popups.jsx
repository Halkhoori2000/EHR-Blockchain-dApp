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
import { Breadcrumbs, Btn } from "../../AbstractElements";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Dropzone from "react-dropzone-uploader";
import { insertPopupInfoInDb, updatePopupInfoInDb } from "../../api/api";
function Add_Popups() {
  const navigate = useNavigate();
  const location = useLocation();

  const [popupNameVal, setpopupNameVal] = useState('');
  const [serialNumberVal, setserialNumberVal] = useState('');
  const [delayVal, setdelayVal] = useState('');
  const [imageVal, setimageVal] = useState('');

  const savePopupData = async () => {
    const formData = new FormData();

    formData.append("announcementpopup_popupname", popupNameVal);
    formData.append("announcementpopup_serialnumber", serialNumberVal);
    formData.append("announcementpopup_delay", delayVal);
    formData.append("announcementpopup_image", imageVal);

    const res = await insertPopupInfoInDb(formData);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/annoucement/add_popups_list`);
    } else {
      alert("Error");
    }
  };

  const updatePopupInfo = async (id) => {
    const formData = new FormData();

    formData.append("announcementpopup_popupname", popupNameVal);
    formData.append("announcementpopup_serialnumber", serialNumberVal);
    formData.append("announcementpopup_delay", delayVal);
    formData.append("announcementpopup_image", imageVal);

    const res = await updatePopupInfoInDb(id, formData);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/annoucement/add_popups_list`);
    } else {
      alert("Error occured.");
    }
  };

  const populatePopupData = () => {
    if (location.state) {
      setpopupNameVal(location.state.dataObj.announcementpopup_popupname);
      setserialNumberVal(location.state.dataObj.announcementpopup_serialnumber);
      setdelayVal(location.state.dataObj.announcementpopup_delay);
    }
  };

  useEffect(() => {
    populatePopupData();
  }, []);

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    setimageVal(file);
  };
  return (
    <Fragment>
      <Breadcrumbs
        parent="Announcement Popup"
        title="Add Popup"
        mainTitle="Add Popup"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form
                  className="theme-form"
                >
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Popup Name"}</Label>
                        <Input
                          onChange={(e) => setpopupNameVal(e.target.value)}
                          value={popupNameVal}
                          type="text"
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
                          onChange={(e) => setserialNumberVal(e.target.value)}
                          value={serialNumberVal}
                          className="form-control"
                          type="number"
                          placeholder="Serial Number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>{"Delay (miliseconds)"}</Label>
                        <input
                          onChange={(e) => setdelayVal(e.target.value)}
                          value={delayVal}
                          className="form-control"
                          type="number"
                          placeholder="Serial Number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{"Image "}</Label>
                        <Dropzone
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
                        {location.state ? (
                          <Button
                            onClick={() =>
                              updatePopupInfo(
                                location.state.dataObj.announcementpopup_id
                              )
                            }
                            disabled={
                              popupNameVal &&
                              serialNumberVal &&
                              delayVal !== "" &&
                              imageVal !== null
                                ? false
                                : true
                            }
                            className="me-3"
                            color="success"
                          >
                            {"Update"}
                          </Button>
                        ) : (
                          <Button
                            onClick={savePopupData}
                            disabled={
                              popupNameVal &&
                              serialNumberVal &&
                              delayVal !== "" &&
                              imageVal !== null
                                ? false
                                : true
                            }
                            className="me-3"
                            color="success"
                          >
                            {"Submit"}
                          </Button>
                        )}
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

export default Add_Popups;
