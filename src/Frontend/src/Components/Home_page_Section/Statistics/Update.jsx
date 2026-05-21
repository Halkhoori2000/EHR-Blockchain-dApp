import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone-uploader";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, Label, Row } from "reactstrap";
import { updateStatisticsSectionAPI } from "../../../api/api";

const Update = ({ listId }) => {
  const history = useNavigate();
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [saveFile, setSaveFile] = useState("");

  const thelocation = useLocation();
  const ifExists = thelocation.state;

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

    await updateStatisticsSectionAPI(listId, formData);
    history(`${process.env.PUBLIC_URL}/hero_section/statistics_section_list`, {
      replace: true,
    });
  };
  const populateData = () => {
    if (ifExists) {
      setTitle(ifExists?.dataObj.statisticsection_title);
      setQuantity(ifExists?.dataObj.statisticsection_quantity);
      setSerialNumber(ifExists?.dataObj.statisticsection_serialnumber);
      setSaveFile(ifExists?.dataObj.statisticsection_image);
    }
  };

  useEffect(() => {
    populateData();
  }, []);
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
                Update
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Update;
