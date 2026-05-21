import React, { useState } from "react";
import Dropzone from "react-dropzone-uploader";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, Label, Row } from "reactstrap";
import { insertPartnersAPI } from "../../../api/api";

const Create = () => {
  const history = useNavigate();
  const [url, setUrl] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [imgSave, setImgSave] = useState("");

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("partnerssection_url", url);
    formData.append("partnerssection_serialnumber", serialNumber);
    formData.append("partnerssection_image", imgSave);

    await insertPartnersAPI(formData);
    history(`${process.env.PUBLIC_URL}/hero_section/partners_list`, {
      replace: true,
    });
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    setImgSave(file);
  };
  return (
    <>
      <Form
        className="theme-form"
        onSubmit={onHandleSubmit}
        method="post"
        encType="multipart/form-data"
      >
        <Row>
          <Col>
            <FormGroup>
              <Label>{"Url"}</Label>
              <input
                placeholder="Url"
                className="form-control"
                name="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{"Serial Number"}</Label>
              <input
                placeholder="Serial Number"
                className="form-control"
                name="url"
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
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
              <Button type="submit" color="success">
                Submit
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Create;
