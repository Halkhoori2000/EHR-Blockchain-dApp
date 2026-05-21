import React, { useState } from "react";
import Dropzone from "react-dropzone-uploader";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, Label, Row } from "reactstrap";
import { insertStatisticsSectionAPI } from "../../../api/api";

const Create = () => {
  const history = useNavigate();
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [saveFile, setSaveFile] = useState("");

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    setSaveFile(file);
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("statisticsection_title", title);
    formData.append("statisticsection_quantity", quantity);
    formData.append("statisticsection_serialnumber", serialNumber);
    formData.append("statisticsection_image", saveFile);

    await insertStatisticsSectionAPI(formData);
    history(`${process.env.PUBLIC_URL}/hero_section/statistics_section_list`, {
      replace: true,
    });
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
          <Col md={"6"}>
            <FormGroup>
              <Label>{"Title"}</Label>
              <input
                placeholder="Title"
                type={"text"}
                name={"title"}
                required
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={"6"}>
            <FormGroup>
              <Label>{"Quantity"}</Label>
              <input
                placeholder="Quantity"
                type={"number"}
                name={"quantity"}
                className="form-control"
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={"12"}>
            <FormGroup>
              <Label>{"Serial Number"}</Label>
              <input
                placeholder="Serial Number"
                type={"number"}
                className="form-control"
                name={"serialNumber"}
                required
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
